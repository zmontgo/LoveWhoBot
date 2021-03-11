// Database requirements - Connection created at end
const { MongoClient } = require('mongodb');
const mongoURI = require('../config.json').mongodbURI;


// Create connection
const client = new MongoClient(
  mongoURI,
  { useUnifiedTopology: true }
);

client.connect();

module.exports.Afks = client.db(config.mongodbDatabase).collection('Afks');