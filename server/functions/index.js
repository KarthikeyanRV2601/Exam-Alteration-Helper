const functions = require("firebase-functions");
const express = require('express');
const app = express();
const config = require('./utils/config')
const firebase = require('firebase');
firebase.initializeApp(config)
const cors = require('cors');
app.use(cors());

app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/schedule', require('./routes/schedule'));
app.use('/profile', require('./routes/profile'));

exports.api = functions.https.onRequest(app)
