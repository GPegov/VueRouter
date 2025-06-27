const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

// Путь к db.json внутри src/data
const dbPath = path.join(__dirname, 'data', 'db.json')

// Создаём папку и файл, если их нет
if (!fs.existsSync(path.dirname(dbPath))) {
  fs.mkdirSync(path.dirname(dbPath)), { recursive: true }
}
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify({ guests: [] }))
}

const server = jsonServer.create()
const router = jsonServer.router(dbPath)
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 4000

server.listen(PORT, '0.0.0.0', () => {
  console.log('Сервер запущен на http://0.0.0.0:' + PORT)
  console.log('База данных:', dbPath)
})

