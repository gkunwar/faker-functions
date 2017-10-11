import * as functions from 'firebase-functions'

// if you need to use the Firebase Admin SDK, uncomment the following:
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase);

// Create and Deploy Cloud Function with TypeScript using script that is
// defined in functions/package.json:
//    cd functions
//    npm run deploy

export let helloWorld = functions.https.onRequest((req, res) => {
 res.send("Hello from Firebase!\n\n");
});


export let addDocument = functions.https.onRequest((req, res) => {
  console.log('req.query', req.query);
  const name = req.query.name;
  const value = req.query.value;
  let obj = {};
  obj[name] = value;

  admin.firestore().collection('messages').add(obj).then(writeResult => {
    // Send back a message that we've succesfully written the message
    res.json({result: `Message with ID: ${writeResult.id} added.`});
  });
});

