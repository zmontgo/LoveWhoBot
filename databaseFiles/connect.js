// Database requirements - Connection created at end
const { MongoClient } = require('mongodb');
const config = require('../config.json');

async() => {
  // Create connection
  const client = new MongoClient(
    config.mongoURI,
    { useUnifiedTopology: true }
  );

  await client.connect();

  module.exports.Afks = client.db(config.mongodbDatabase).collection('Afks');
}