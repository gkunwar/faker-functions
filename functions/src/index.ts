import * as functions from 'firebase-functions'

// if you need to use the Firebase Admin SDK, uncomment the following:
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase);

function addToCollection(name: string, obj: any) {
  return admin.firestore().collection(name).add(obj);
}

export let helloWorld = functions.https.onRequest((req, res) => {
 res.send("Hello from Firebase!\n\n");
});


export let addDocument = functions.https.onRequest((req, res) => {
  console.log('req.query', req.query);
  const name = req.query.name;
  const value = req.query.value;
  let obj = {};
  obj[name] = value;

  addToCollection('messages', obj).then(writeResult => {
    // Send back a message that we've succesfully written the message
    res.json({result: `Message with ID: ${writeResult.id} added.`});
  });
});


