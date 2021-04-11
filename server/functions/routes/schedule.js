const { db } = require('../utils/admin');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('../utils/config')
const auth = require('../middleware/auth');
const firebase = require('firebase');
// const { check, validationResult } = require('express-validator');

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
router.post('/', [
    check('block', 'block is not valid').isLength({ min: 2}),
    check('duration', 'duration is not valid').isLength({ min: 1, max: 1}),
    check('class_room', 'class room is not valid').isLength({ min: 2}),
    check('exam_name', 'exam name is not valid').isLength({ min: 2}),
    check('request_status', 'request status is not valid').isIn(['none', 'pending', 'accepted'])
    ], async (req, res) => {

    const errors = validationResult(req);
    const errorList = {}

    if(!errors.isEmpty()) {
        errors['errors'].forEach((item, index) => {
            console.log(item)
            errorList[item.param] = item.msg
        })
        console.log(errorList)
        return res.status(400).json(errorList);
    }
    try {

        // const res = await db.collection('schedule').add({
        //     name: req.user.user_name,
        //     block: req.body.block,
        //     class_room: req.body.class_room,
        //     date: req.body.date,
        //     duration: req.body.duration,
        //     exam_name: req.body.exam_name,
        //     reqest_status: "none",
        //     userID: req.data.userID,
        // });
        // console.log(req.body[0].date.toDate());
        // console.log(new Date());

        // res.json({
        //     user: {
        //         user_name: req.user.user_name,
        //         email: req.user.email,
        //         userID: req.user.user_id,
        //         data:data,
        //         length: data.length
        //     }
        // })
        res.json({
            "msg": "pj"
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

