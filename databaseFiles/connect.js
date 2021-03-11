// Database requirements - Connection created at end
const { MongoClient } = require('mongodb');
const mongoURI = require('../config.json').mongodbURI;


// Create connection
const client = new MongoClient(
  mongoURI,
  { useUnifiedTopology: true }
);

client.connect();

// Make sure MongoDB can be accessed outside of this file
module.exports.client = client;