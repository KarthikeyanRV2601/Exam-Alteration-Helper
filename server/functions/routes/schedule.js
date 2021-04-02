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
        const snapshot = await scheduleRef.where('userID', '==', req.user.userID).get();

        data = snapshot.docs.map(doc => {
            obj = doc.data()
            obj.id = doc.id
            obj.date = obj.date.toDate()
            return obj
        })

        res.json({
            user: {
                user_name: req.user.user_name,
                email: req.user.email,
                userID: req.user.user_id,
                data:data,
                length: data.length
            }
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})

// get all user's schedules where request_status is pending
router.get('/pending_schedule', async (req, res) => {
    try {
        const scheduleRef = db.collection('schedule');
        const snapshot = await scheduleRef.where('request_status', '==', 'pending').get();

        data = snapshot.docs.map(doc => {
            obj = doc.data()
            obj.id = doc.id
            obj.date = obj.date.toDate()
            return obj
        })
        // console.log(data[0].date.toDate());
        // console.log(new Date());

        res.json({
                data:data,
                length: data.length
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})

// Add new exam to logged in user's exhedule
router.post('/', auth, async (req, res) => {
    try {

        const res = await db.collection('schedule').add({
            name: req.user.user_name,
            block: req.body.block,
            class_romm: req.body.class_room,
            date: req.body.date,
            duration: req.body.duration,
            exam_name: req.body.exam_name,
            reqest_status: "none",
            userID: req.data.userID,
        });
        // console.log(req.body[0].date.toDate());
        // console.log(new Date());

        res.json({
            user: {
                user_name: req.user.user_name,
                email: req.user.email,
                userID: req.user.user_id,
                data:data,
                length: data.length
            }
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})

// change status of user's scpecific schedule
router.post('/status', auth, async (req, res) => {

    console.log(req.body);
    try {
        
        const cityRef = db.collection('schedule').doc(req.body.schedule_id);
        // Set the 'capital' field of the city
        const result = await cityRef.update({request_status: req.body.status});

        res.json({
            result
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})

module.exports = router;

