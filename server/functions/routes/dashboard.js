const { db } = require('../utils/admin');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('../utils/config')
const auth = require('../middleware/auth');

const firebase = require('firebase');

router.get('/', auth, (req, res) => {
    console.log(req.user)
    res.json({
        status: "success",
        user: {
            user_name: req.user.user_name,
            email: req.user.email,
            userID: req.user.user_id
        }
    })
})

module.exports = router;