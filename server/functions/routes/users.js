
const { db } = require('../utils/admin');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('../utils/config')

const firebase = require('firebase');

// Get all users
router.get('/all',async (req, res) => {
    try {

        const scheduleRef = db.collection('users');
        // console.log(req.user)
        const snapshot = await scheduleRef.where('posting', '==', "faculty").get();

        data = snapshot.docs.map(doc => {
            obj = doc.data()
            obj.id = doc.id
            // obj.date = obj.date.toDate()
            return obj
        })

        res.status(200).json({
                data
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})

router.post('/signup', [
        check('user_name', 'User name is required').not().isEmpty(),
        check('email', 'Email is not valid').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6}),
        
    ],

    async (req, res) => {
        const errors = validationResult(req);
        const errorList = {}
        if(!errors.isEmpty()) {
            errors['errors'].forEach((item, index) => {
                if (item.param == 'user_name')
                    errorList['user_name'] = item.msg
                else if (item.param == 'email')
                    errorList['email'] = item.msg
                else if (item.param == 'password')
                    errorList['password'] = item.msg
            })
            return res.status(400).json(errorList);
        }

        const newUser = {
            email: req.body.email,
            password: req.body.password,
            user_name: req.body.user_name,
            department: req.body.department
        };

    
        try {
            const existingUserName = db.doc(`/users/${newUser.user_name}`)
            const doc1 = await existingUserName.get();
            
            if(doc1.exists)
            {
                return res.status(400).json({
                    user_name: 'The user name is already taken'
                })
            }

            else
            {
                const response = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
                const token = await response.user.getIdToken();
                const userID = response.user.uid;
                const userCredentials = {
                    user_name: newUser.user_name,
                    email: newUser.email,
                    createdAt: new Date().toISOString(),
                    userID: userID,
                    posting: "faculty",
                    department: newUser.department,
                    account_status: "pending"
                }

                const addUser = await db.doc(`/users/${newUser.user_name}`).set(userCredentials)

                // console.log(response);
                return res.status(201).json({
                    message: 'User Successfully Added!',
                    token: token
                });
            }

        } catch (error) {
            console.error(error);

            if(error.code == 'auth/email-already-in-use') {
                return res.status(400).json({
                    email: 'Email is already in use'
                })
            }
            return res.status(500).json({
                error: error.code
            });
        }

    }
)

module.exports = router;