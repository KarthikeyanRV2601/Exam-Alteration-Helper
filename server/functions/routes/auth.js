const { db } = require('../utils/admin');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('../utils/config')
const auth = require('../middleware/auth');
const firebase = require('firebase');

router.get('/', auth, async (req, res) => {
    try {
        res.json({
            user: {
                user_name: req.user.user_name,
                email: req.user.email,
                userID: req.user.user_id,
                department: req.user.department,
                posting: req.user.posting
            }
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})


router.post('/login', [
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Passwords need to have a minimum of 6 characters').isLength({ min: 6})
],
async (req, res) => {
    const errors = validationResult(req);
    const errorList = {}

    if(!errors.isEmpty()) {
        errors['errors'].forEach((item, index) => {
            if (item.param == 'email')
                errorList['email'] = item.msg
            else if (item.param == 'password')
                errorList['password'] = item.msg
        })
        return res.status(400).json(errorList);
    }

    const user = {
        email: req.body.email,
        password: req.body.password
    };

    try {
        const response = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        const token = await response.user.getIdToken();
        // console.log(token);          
        return res.status(201).json({
            message: 'User logged in',
            token: token
        });
    } catch (error) {
        console.error(error);
        if(error.code == 'auth/wrong-password')
            return res.status(403).json({ general: 'The password is incorrect.'})
        return res.status(500).json({ error: error.code})
    }

}
)

module.exports = router;
    