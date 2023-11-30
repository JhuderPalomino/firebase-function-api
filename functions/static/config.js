const firebaseCredentials = require('../firebase-credentials.json');

module.exports = {
  DB_INSTANCE: null,
  MONGO_DATABASE_URL: process.env.MONGO_DATABASE_URL,
  FIREBASE_CREDENTIALS: {
    projectId: firebaseCredentials.project_id,
    privateKey: firebaseCredentials.private_key,
    clientEmail: firebaseCredentials.client_email,
  }
}

