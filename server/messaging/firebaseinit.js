require('dotenv').config({ path: __dirname + '/.env' });
var admin = require("firebase-admin");

const googleApplicationCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;

const serviceAccount = require(googleApplicationCredentials);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin.messaging();