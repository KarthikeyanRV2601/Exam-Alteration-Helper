const functions = require("firebase-functions");
const express = require('express');
const app = express();
const config = require('./utils/config')
const firebase = require('firebase');
firebase.initializeApp(config)
const cors = require('cors');
app.use(cors());

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));
app.use('/dashboard', require('./routes/dashboard'));

exports.api = functions.https.onRequest(app)
