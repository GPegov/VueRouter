const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

const dbPath = path.join(__dirname, 'data', 'db.json')

// Создаём папку и файл, если их нет
if (!fs.existsSync(path.dirname(dbPath))) {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true })
}
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify({ guests: [] }))
}

const server = jsonServer.create()
const router = jsonServer.router(dbPath)
const middlewares = jsonServer.defaults({
  static: './public'
})

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)


// Добавление группы гостей
// Изменяем эндпоинты для работы с группами гостей
server.post('/guest-groups', (req, res) => {
  try {
    const newGroup = req.body;
    
    // Проверяем обязательные поля
    if (!newGroup.date || !newGroup.guests || !Array.isArray(newGroup.guests)) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid data format' 
      });
    }

    // Добавляем ID если его нет
    if (!newGroup.id) {
      newGroup.id = Date.now();
    }

    // Добавляем новую группу
    router.db.get('guest-groups').push(newGroup).write();
    
    res.status(201).json({ 
      success: true,
      message: 'Group added successfully',
      groupId: newGroup.id
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});




// Удаление группы гостей
server.delete('/guest-groups/:groupId', (req, res) => {
  try {
    const db = router.db.getState()
    const groupId = Number(req.params.groupId)
    
    const groupExists = db.guests.some(group => group.id === groupId)
    if (!groupExists) {
      return res.status(404).json({ 
        success: false,
        error: 'Group not found' 
      })
    }

    router.db.get('guests').remove({ id: groupId }).write()
    
    res.status(200).json({ 
      success: true,
      message: 'Group deleted successfully',
      groupId: groupId
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
})

// Удаление гостя из группы
server.delete('/groups/:groupId/guests/:guestId', (req, res) => {
  try {
    const db = router.db.getState()
    const groupId = Number(req.params.groupId)
    const guestId = Number(req.params.guestId)
    
    const group = db.guests.find(g => g.id === groupId)
    if (!group) {
      return res.status(404).json({ 
        success: false,
        error: 'Group not found' 
      })
    }

    const guestExists = group.guests.some(g => g.id === guestId)
    if (!guestExists) {
      return res.status(404).json({ 
        success: false,
        error: 'Guest not found in group' 
      })
    }

    router.db.get('guests')
      .find({ id: groupId })
      .get('guests')
      .remove({ id: guestId })
      .write()

    res.status(200).json({ 
      success: true,
      message: 'Guest deleted successfully',
      groupId: groupId,
      guestId: guestId
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
})

server.use(router)

const PORT = 4000
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`)
})