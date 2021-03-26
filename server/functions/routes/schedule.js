const { db } = require('../utils/admin');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('../utils/config')
const auth = require('../middleware/auth');
const firebase = require('firebase');


router.get('/', auth, async (req, res) => {
    try {

        const scheduleRef = db.collection('schedule');
        const snapshot = await scheduleRef.where('name', '==', req.user.user_name).get();
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
          });
          
        res.json({
            user: {
                user_name: req.user.user_name,
                email: req.user.email,
                userID: req.user.user_id
            }
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})

module.exports = router;

