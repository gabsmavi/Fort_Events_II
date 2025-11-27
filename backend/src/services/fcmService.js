const admin = require("firebase-admin");
const path = require("path");
require("dotenv").config();

const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH || './serviceAccountKey.json';

try {
  admin.initializeApp({
    credential: admin.credential.cert(require(path.resolve(serviceAccountPath)))
  });
} catch (err) {
  console.warn("FCM não inicializado (verifique FIREBASE_SERVICE_ACCOUNT_PATH).", err.message);
}

async function sendNotification(token, title, body, data = {}) {
  if (!admin.apps.length) throw new Error("Firebase Admin não inicializado");
  const message = {
    token,
    notification: { title, body },
    data
  };
  return admin.messaging().send(message);
}

module.exports = { sendNotification };


