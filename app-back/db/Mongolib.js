//El proyecto no funciona correctamente por un problema con el módulo jade al instalarlo y no lo pude arreglar
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = process.env.mongourl;

const dbName = 'web_database';

const client = new MongoClient(url, { useUnifiedTopology: true });

const getDatabase = (callback) => {
    client.connect(function (err) {
        assert.strictEqual(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        callback(db, client);
    });
}

const findDocuments = function (db, callback) {
    const collection = db.collection('offers');
    collection.find({}).toArray(function (err, docs) {
        assert.strictEqual(err, null);
        callback(docs);
    });
}

const addDocuments = function (db, job, callback) {
    const collection = db.collection('offers');
    collection.insertOne(job, function (err, result) {
      assert.strictEqual(null, err);
      callback(job);
    });
  };

exports.getDatabase = getDatabase;
exports.findDocuments = findDocuments;
exports.addDocuments = addDocuments;