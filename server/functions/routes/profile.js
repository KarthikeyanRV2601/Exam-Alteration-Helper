const { db } = require('../utils/admin');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('../utils/config')
const auth = require('../middleware/auth');
const firebase = require('firebase');

router.post('/', auth,async (req, res) => {
    try {
        const user = firebase.auth().currentUser;
        console.log(user);
        console.log("*****************************");
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) { 
                console.log("**************user email**********");
                console.log(user.email);
                console.log("**************user email**********");
                let credential = firebase.auth.EmailAuthProvider.credential(
                    firebase.auth().currentUser.email,
                    req.body.password
                );
                try {
                    
                    const reauth = user.reauthenticateWithCredential(credential);
                    res.json({
                        "a":"b",
                        reauth
                    })

                } catch (error) {
                    console.log("***********");
                    console.log("reauth failed");
                    console.log("***********");
                    res.status(500).send('Error')
                }
                const cityRef = db.collection('user').doc(req.user.userID);
                
                res.json({
                    "a":"b"
                })
            } else {
                console.log("***********");
                console.log("User not logged in");
                console.log("***********");
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})


module.exports = router;