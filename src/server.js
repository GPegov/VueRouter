const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./dataBase.js')
const cors = require('cors')


const server = express()
server.use(express.json())
server.use(cors())
// server.use('/guests', cors())


let db

connectToDb((err) => {
    if(!err) {
        server.listen(3000, () => {
            console.log('app listening on port 3000')
        })
        db = getDb()
    }

})


server.get('/guests', (req, res) => {

    let guests = []

    db.collection('guests')
     .find() 
     .forEach(guest => guests.push(guest))
     .then(() => {
        res.status(200).json(guests)
     })
     .catch(() => {
        res.status(500).json({error: 'Could not fetch the documents'})
     })

})

server.get('/guests/:id', (req, res) => {

    if(ObjectId.isValid(req.params.id)) {
        db.collection('guests')
        .findOne({_id: new ObjectId(req.params.id)})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not fetch the document'})
        })
    } else {
        res.status(500).json({error: 'Not a valid document id'})
    }

    
})


server.post('/guests', (req, res) => {
    const guest = req.body

    db.collection('guests')
        .insertOne(guest)
        .then(result => {
            res.status(201).json(result) 
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create a new document'})
        })
})


server.delete('/guests/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)) {
        db.collection('guests')
        .deleteOne({_id: new ObjectId(req.params.id)})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not delete the document'})
        })
    } else {
        res.status(500).json({error: 'Not a valid document id'})
    }
})

server.patch('/guests/:id', (req, res) => {
    const updates = req.body
    if(ObjectId.isValid(req.params.id)) {
        db.collection('guests')
        .updateOne({_id: new ObjectId(req.params.id)}, {$set: updates})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not update the document'})
        })
    } else {
        res.status(500).json({error: 'Not a valid document id'})
    }
})

