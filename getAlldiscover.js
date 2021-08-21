const mongodb = require('mongodb');

const uri =
  'mongodb+srv://ray:1998@cluster0.ho33k.mongodb.net/Sitboard?retryWrites=true&w=majority';
let client = null;

async function main(params) {
  const reused = client != null;
  if (client == null) {
    client = await mongodb.MongoClient.connect(uri);
  }

  const docs = await client
    .db('Sitboard')
    .collection('discovers')
    .find()
    .toArray();

  return { body: { result: docs, reused } };
}

exports.main = main;
