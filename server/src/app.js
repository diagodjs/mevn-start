// import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongo = require('mongodb')


const MongoClient = mongo.MongoClient
const uri = YOUR_CONNECTION_STRING
var client;

const app = express() // create your express app
// make app use dependencies

var mongoClient = new MongoClient(uri, { reconnectTries :
Number.MAX_VALUE, autoReconnect : true, useNewUrlParser : true })

mongoClient.connect((err, db) => { // returns db connection
  if (err != null) {
    console.log(err)
    return
  }
  client = db
})

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081) // client is already running on 8080
