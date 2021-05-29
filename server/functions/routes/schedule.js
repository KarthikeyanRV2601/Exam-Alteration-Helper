const { db } = require('../utils/admin');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('../utils/config')
const auth = require('../middleware/auth');
const firebase = require('firebase');
// const { check, validationResult } = require('express-validator');

router.post('/', async (req, res) => {
    try {
        const scheduleRef = db.collection('schedule');
        // console.log(req.user)
        console.log(req.body)
        const snapshot = await scheduleRef.where('userID', '==', req.body.uid).get();
        data = snapshot.docs.map(doc => {
            obj = doc.data()
            obj.id = doc.id
            // obj.date = obj.date.toDate()
            return obj
        })

        res.json({
            data
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})

// get all schedules
router.get('/all',async (req, res) => {
    try {
        const scheduleRef = db.collection('schedule');
        // console.log(req.user)
        const snapshot = await scheduleRef.get();
        data = snapshot.docs.map(doc => {
            obj = doc.data()
            obj.id = doc.id
            // obj.date = obj.date.toDate()
            return obj
        })

        res.json({
                data:data,
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
            // console.log(obj);
            // const Ref = db.collection('users');
            // // console.log(obj.userID)
            // const snapshot = await Ref.where('userID', '==', obj.userID).get();
            // snapshot.forEach(doc => {
            //     console.log(doc.data().user_name)
            //     obj.user_name = doc.data().user_name
            //   })
            //   console.log(obj.user_name)
            return obj
        })

        console.log(data);
        // console.log(new Date());

        res.json({
                data,
                length: data.length
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})

// change ownership of exam duty
router.post('/alter', auth, async (req, res) => {
    try {

        const ref = db.collection('schedule').doc(req.body.schedule_id);
        const result = await ref.update({userID: req.user.uid, request_status: "alloted"});
        // console.log(data[0].date.toDate());
        // console.log(new Date());

        res.status(200).json({
                "result" : "success"
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})

// get user name and ids
router.get('/get_id', async (req, res) => {
    try {
        const userRef = db.collection('users');
        const snapshot = await userRef.where('posting', '==', 'faculty').get();

        if (snapshot.empty) {
            console.log('No matching documents.');
            res.status(200).json({
                "result" : "failure"
            })
        }  
        let data = {}
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            data[doc.data().user_name] = doc.data().userID;
          });
          
        res.status(200).json({
                "result" : "success",
                data
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})

// get account details of pending accounts
router.get('/pending_account', async (req, res) => {
    try {
        const userRef = db.collection('users');
        const snapshot = await userRef.where('account_status', '==', 'pending').get();

        if (snapshot.empty) {
            console.log('No matching documents.');
            res.status(200).json({
                "result" : "failure"
            })
        }  
        data = snapshot.docs.map(doc => {
            
            obj = doc.data()
            obj.id = doc.id
            return obj
        })

        res.status(200).json({
                "result" : "success",
                data
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})

// Add 
router.post('/list', async (req, res) => {

    try {
        const scheduleRef = db.collection('schedule');
        req.body.forEach(async function (item) {
            // console.log("pee date",firebase.firestore.Timestamp.fromDate(new Date(item.date)))
            let new_date = firebase.firestore.Timestamp.fromDate(new Date(item.date));
            // console.log("pee date",new_date)
            
            const res = await db.collection('schedule').add({

                block: item.block,
                class_room: item.class_room,
                date: new Date(item.date).toUTCString(),
                duration: item.duration,
                exam_name: item.exam_name,
                reqest_status: "none",
                userID: item.userID,
            });
        });

        res.json({
            "a":"b"
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

// change account status to approved
router.post('/change_account_status',async (req, res) => {

    console.log(req.body);
    try {
        
        const cityRef = db.collection('users').doc(req.body.user_name);
        // Set the 'capital' field of the city
        const result = await cityRef.update({account_status: req.body.status});

        res.json({
            result
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})

// change status of user's account
router.post('/account_status', async (req, res) => {

    console.log(req.body);
    try {
        
        const cityRef = db.collection('users').doc(req.body.user_name);
        // Set the 'capital' field of the city
        const result = await cityRef.update({account_status: req.body.account_status});

        res.json({
            result
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})

module.exports = router;

