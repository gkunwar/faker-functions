import * as functions from 'firebase-functions'
import * as requestPromise from "request-promise";

// if you need to use the Firebase Admin SDK, uncomment the following:
import * as admin from 'firebase-admin'

// let config = functions.config()['firestore-slacker']['default'] || {};
// const PATH = config['path'] || '/messages/{documentId}';
// console.log('using PATH', PATH);

/**
 * Post a message to Slack about the new GitHub commit.
 */
function postToSlack(text) {
  return requestPromise({
    method: 'POST',
    // TODO: Configure the `slack.webhook_url` Google Cloud environment variables.
    // functions.config().firestore_slack.webhook_url
    uri: 'https://hooks.slack.com/services/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',
    body: {
      text: text
      //text: `<${url}|${commits} new commit${commits > 1 ? 's' : ''}> pushed to <${repo.url}|${repo.full_name}>.`
    },
    json: true
  });
}

exports.onDocumentCreate = functions.firestore.document('/messages/{documentId}')
.onCreate(event => {
  // Grab the current value of what was written
  console.log('onDocumentCreate', event.params);
  const doc = event.data.data();
  console.log('doc', doc);
  return postToSlack(doc.text);
});
