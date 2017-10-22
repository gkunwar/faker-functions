import * as functions from 'firebase-functions'
import * as fsfaker from 'firestore-faker'
import * as slacker from 'firestore-slacker'

// if you need to use the Firebase Admin SDK, uncomment the following:
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase);


export let addFake = fsfaker.addFake;
export let slackPost = slacker.onDocumentCreate;
