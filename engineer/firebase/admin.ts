import admin, { ServiceAccount } from 'firebase-admin';

import serviceAccount from './engineer-portfolio-admin-key.json';
// var serviceAccount = require(`${process.env.NEXT_PUBLIC_ADMINKEY}`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
  databaseURL: 'https://items.firebaseio.com',
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = admin.database();
const ref = db.ref('restricted_access/secret_document');
ref.once('value', function (snapshot) {
  console.log(snapshot.val());
});

export default db;
