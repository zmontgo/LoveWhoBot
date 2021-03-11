// Database requirements - Connection created at end
const { MongoClient } = require('mongodb');
const config = require('../config.json');


// Create connection
const client = new MongoClient(
  config.mongoURI,
  { useUnifiedTopology: true }
);

client.connect().then(() => {
  module.exports.Afks = client.db(config.mongodbDatabase).collection('Afks');
});