const { admin, db } = require('../utils/admin');

module.exports = async function(req, res, next) {
    let token = req.header('auth-token')
    if(!token)
    {
        console.log("No token found")
        return res.status(403).json({ error: 'Unauthorized'}) //403 - unauthorized
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        console.log("Decoded token" + decodedToken)
        userData = await db.collection('users').where('userID', '==', req.user.uid).limit(1).get()
        req.user.user_name = userData.docs[0].data().user_name;
        next()
    } catch (error) {
        console.error(error)
        return res.status(400).json(err)
    }
    
}