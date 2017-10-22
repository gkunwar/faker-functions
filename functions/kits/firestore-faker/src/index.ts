import * as functions from 'firebase-functions'
import * as faker from 'faker'

// if you need to use the Firebase Admin SDK, uncomment the following:
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase);

function getConfig() {
  let config = functions.config()['firestore-faker']['default'];
  config['collection'] = config['collection'] || 'messages';
  console.log('using config', config);
  return config;
}

function addToCollection(obj: any) {
  let config = getConfig();
  let name = config.collection
  console.log('name', name);
  return admin.firestore()
              .collection(name)
              .add(obj).then(writeResult => {
                return {id: writeResult.id, collection:name, doc: obj};
  });
}

export let addDocument = functions.https.onRequest((req, res) => {
  console.log('addDocument query', req.query);
  const name = req.query.name;
  const value = req.query.value;
  let obj = {};
  obj[name] = value;

  addToCollection(obj).then(result => {
    // Send back a message that we've succesfully written the message
    res.json(result);
  });
});

export let addFake = functions.https.onRequest((req, res) => {
  console.log('addFake query', req.query);
  const name = req.query.name || 'text';
  const value = faker.hacker.phrase();
  let obj = {};
  obj[name] = value;

  addToCollection(obj).then(result => {
    // Send back a message that we've succesfully written the message
    res.json(result);
  });
});


