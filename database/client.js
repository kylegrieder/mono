const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.MONGODB_URI, { useUnifiedTopology: true })

module.exports = client