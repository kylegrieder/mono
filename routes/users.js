var express = require('express');
var router = express.Router();
const {ObjectID} = require('mongodb')
const COLLECTION = 'Users'

const client = require('../database/client')

// CRUD: read/retrieve
router.get('/', async function(req, res, next) { // /users
  await client.connect()
  const db = client.db(process.env.MONGODB_DB_NAME) // local

  const results = await db.collection(COLLECTION).find({}).toArray()

  res.json(results)
});

// CRUD: create
router.post('/new', async function(req, res, next) { // /users/new
  await client.connect()
  const db = client.db(process.env.MONGODB_DB_NAME) // local

  const user = req.body

  if (user.hasOwnProperty('name') && user.name !== '' && user.name !== null) {
    const result = await db.collection(COLLECTION).insertOne(user)

    if (result.insertedCount === 1) {
      res.status(202)
      res.send('Successfully inserted user object into Users collection')

      return
    }

    res.status(500)
    res.send('Unable to insert user object into Users collection')

    return
  }

  res.status(400)
  res.send('Validation failed, bad request. Check request body and try again.')
}) 

// CRUD: update
router.put('/user/:userId', async function(req, res, next) {
  const userId = req.params.userId
  const replacementObject = req.body

  console.log(userId)

  await client.connect()
  const db = client.db(process.env.MONGODB_DB_NAME) // local
  
  if (replacementObject.hasOwnProperty('name') && replacementObject.name !== '' && replacementObject.name !== null) {
    const result = await db.collection(COLLECTION).replaceOne({_id: ObjectID.createFromHexString(userId)}, replacementObject)

    if (result.insertedCount === 1) {
      res.status(202)
      res.send('Successfully replaced user object with updated user')

      return
    }

    res.status(500)
    res.send('Unable to replace user object into Users collection')

    return
  }

  res.status(400)
  res.send('Validation failed, bad request. Check request body and try again.')
})

module.exports = router;
