
const chai = require("chai")
const axios = require("axios")
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let should = chai.should();
let path = 'http://localhost:5000/vathiraid-6beca/us-central1/api/schedule'

describe("Schedule test", function() {

    this.timeout(20000)
    let token;
    beforeEach(async function() {

        let body = { "email": "mighil@gmail.com","password":"mighil" }
        try {
            
            const result = await axios.post('http://localhost:5000/vathiraid-6beca/us-central1/api/auth/login', body);
            token = result.data.token;
        } catch (error) {
            console.log("axios post request failed  ")
        }
        
    })

    describe("Add a schedule", () => {

        it("Should return error if block no is not valid", async (done) => {
            
            let body = {
                "block": "a",
                "class_room": "AB-203",
                "date": "22-02-2021",
                "duration": "1",
                "exam_name": "Periodical",
                "request_status": "pending"
            }
            chai.request(path)
                .post('/')
                .set('auth-token', token)
                .send(body)
                .end(function (err, res) {

                    res.should.have.status(400);
                    chai.expect(res.body).to.contain.property('block')
                    chai.expect(res.body.block).to.equal('block is not valid')
                });
                    
            done()
        })

        it("Should return error if class room no is not valid", async (done) => {
        
            let body = {
                "block": "AB-203",
                "class_room": "x",
                "date": "22-02-2021",
                "duration": "1",
                "exam_name": "Periodical",
                "request_status": "pending"
            }
            chai.request(path)
                .post('/')
                .set('auth-token', token)
                .send(body)
                .end(function (err, res) {

                    res.should.have.status(400);
                    chai.expect(res.body).to.contain.property('class_room')
                    chai.expect(res.body.class_room).to.equal('class room is not valid')
     
                });
                    
            done()
        })

        it("Should return error if duration is not valid", async (done) => {
            
            let body = {
                "block": "AB-203",
                "class_room": "J-205",
                "date": "22-02-2021",
                "duration": "1123",
                "exam_name": "Periodical",
                "request_status": "pending"
            }
            chai.request(path)
                .post('/')
                .set('auth-token', token)
                .send(body)
                .end(function (err, res) {

                    res.should.have.status(400);
                    chai.expect(res.body).to.contain.property('duration')
                    chai.expect(res.body.duration).to.equal('duration is not valid')
     
                });
                    
            done()
        })

        it("Should return error if exam name is not valid", async (done) => {
            
            let body = {
                "block": "AB-203",
                "class_room": "J-205",
                "date": "22-02-2021",
                "duration": "2",
                "exam_name": "",
                "request_status": "pending"
            }
            chai.request(path)
                .post('/')
                .set('auth-token', token)
                .send(body)
                .end(function (err, res) {

                    res.should.have.status(400);
                    chai.expect(res.body).to.contain.property('exam_name')
                    chai.expect(res.body.exam_name).to.equal('exam name is not valid')
     
                });
                    
            done()
        })

        it("Should return error if request_status is not valid", async (done) => {
            
            let body = {
                "block": "AB-203",
                "class_room": "J-205",
                "date": "22-02-2021",
                "duration": "2",
                "exam_name": "",
                "request_status": "xyz"
            }
            chai.request(path)
                .post('/')
                .set('auth-token', token)
                .send(body)
                .end(function (err, res) {

                    res.should.have.status(400);
                    chai.expect(res.body).to.contain.property('request_status')
                    chai.expect(res.body.request_status).to.equal('request status is not valid')
     
                });
                    
            done()
        })

        it("Should accept if request_status is none", async (done) => {
            
            let body = {
                "block": "AB-203",
                "class_room": "J-205",
                "date": "22-02-2021",
                "duration": "2",
                "exam_name": "Periodical 2",
                "request_status": "none"
            }
            chai.request(path)
                .post('/')
                .set('auth-token', token)
                .send(body)
                .end(function (err, res) {

                    res.should.have.status(200);
                });
                    
            done()
        })

        it("Should accept if request_status is pending", async (done) => {
            
            let body = {
                "block": "AB-203",
                "class_room": "J-205",
                "date": "22-02-2021",
                "duration": "2",
                "exam_name": "Periodical 2",
                "request_status": "pending"
            }
            chai.request(path)
                .post('/')
                .set('auth-token', token)
                .send(body)
                .end(function (err, res) {

                    res.should.have.status(200);
                });
                    
            done()
        })

        it("Should accept if request_status is accepted", async (done) => {
            
            let body = {
                "block": "AB-203",
                "class_room": "J-205",
                "date": "22-02-2021",
                "duration": "2",
                "exam_name": "Periodical 2",
                "request_status": "accepted"
            }
            chai.request(path)
                .post('/')
                .set('auth-token', token)
                .send(body)
                .end(function (err, res) {

                    res.should.have.status(200);
                });
                    
            done()
        })
    })

    describe("All schedule", () => {
        
        let body = {
            "uid": "Sk88jvhrKRMw4lYj1zaieM6QQM63"
        }
        it("Should return schedule of current user", async (done) => {
            
            chai.request(path)
                .post('/get')
                .send(body)
                .set('auth-token', token)
                .end(function (err, res) {
                    // console.log(res.body)
                    chai.expect(res.body.data[0]).to.contain.property('class_room')
                    chai.expect(res.body.data[0]).to.contain.property('request_status')
                    chai.expect(res.body.data[0]).to.contain.property('block')
                    chai.expect(res.body.data[0]).to.contain.property('duration')
                    chai.expect(res.body.data[0]).to.contain.property('request_status')
                    chai.expect(res.body.data[0].userID).to.equal('Sk88jvhrKRMw4lYj1zaieM6QQM63')
                    chai.expect(res.body.data).to.have.lengthOf.above(1);
     
                });
                    
            done()
        })

        it("Should give error since no token is supplied", async (done) => {

            let body = {

            }
            chai.request(path)
                .post('/get')
                .send(body)
                .end(function (err, res) {
                    res.should.have.status(403);
                });
                    
            done()
        })
    
        it("Should return error as token is incorrect", async (done) => {
    
            chai.request(path)
                .post('/get')
                .send(body)
                .set('auth-token', "aqwoiej")
                .end(function (err, res) {
                    res.should.have.status(400);
                    chai.expect(res.body).to.contain.property('error')
                    chai.expect(res.body.error).to.equal('Incorrect token')
     
                });
                    
            done()
        })
    })

    describe("Pending schedules", () => {

        it("Should return all the pending schedules", async (done) => {
    
            chai.request(path)
                .get('/pending_schedule')
                .set('auth-token', token)
                .end(function (err, res) {
                    chai.expect(res.body.data).to.have.lengthOf.above(0);
                    chai.expect(res.body.data[0]).to.contain.property('request_status')
                    chai.expect(res.body.data[0].request_status).to.equal('pending')
                });
                    
            done()
        })

        it("Should not give error even if token not there", async (done) => {
    
            chai.request(path)
                .get('/pending_schedule')
                .set('auth-token', "aqwoiej")
                .end(function (err, res) {
                    res.should.have.status(200);
                    chai.expect(res.body.data).to.have.lengthOf.above(0);
                    chai.expect(res.body.data).to.contain.property('length')
                });
                    
            done()
        })
    })


    describe("Get ids", () => {

        it("Should return usernames and ids", async (done) => {
    
            chai.request(path)
                .get('/get_id')
                .end(function (err, res) {
                    // chai.expect(res.body.data).to.have.lengthOf.above(1);
                    // console.log(res.body)
                    chai.expect(res.body.data).to.contain.property('mighil')
                    chai.expect(res.body.result).to.equal('success')
                    res.should.have.status(200);

                });
                    
            done()
        })
    })


    describe("Pending account", () => {

        it("Should return pending account details", async (done) => {
    
            chai.request(path)
                .get('/pending_account')
                .end(function (err, res) {
                    // chai.expect(res.body.data).to.have.lengthOf.above(1);
                    // console.log(res.body)
                    chai.expect(res.body.data[0]).to.contain.property('user_name')
                    chai.expect(res.body.data[0]).to.contain.property('email')
                    chai.expect(res.body.data[0]).to.contain.property('userID')
                    chai.expect(res.body.data[0]).to.contain.property('posting')
                    chai.expect(res.body.data[0]).to.contain.property('department')
                    chai.expect(res.body.result).to.equal('success')
                    res.should.have.status(200);

                });
                    
            done()
        })
    })

    describe("Add schedules from excel sheet", () => {

        it("Should not accept wrong information", async (done) => {
    
            let body = {
                "block": "A",
                "duration": "240 hours",
                "class_room": "B",
                "exam_name": "p",
                "request_status": "no request"
            }
            chai.request(path)
                .post('/list')
                .send(body)
                .end(function (err, res) {
                    // chai.expect(res.body.data).to.have.lengthOf.above(1);
                    // console.log(res.body)
                    chai.expect(res.body).to.contain.property('block')
                    chai.expect(res.body.block).to.equal('block is not valid')
                    chai.expect(res.body).to.contain.property('duration')
                    chai.expect(res.body.duration).to.equal('duration is not valid')
                    chai.expect(res.body).to.contain.property('class_room')
                    chai.expect(res.body.class_room).to.equal('class room is not valid')
                    chai.expect(res.body).to.contain.property('exam_name')
                    chai.expect(res.body.exam_name).to.equal('exam name is not valid')
                    res.should.have.status(400);

                });
                    
            done()
        })
    })

    describe("Add schedules from excel sheet", () => {

        it("Should not accept wrong information", async (done) => {
    
            let body = {
                "block": "A",
                "duration": "240 hours",
                "class_room": "B",
                "exam_name": "p",
                "request_status": "no request"
            }
            chai.request(path)
                .post('/list')
                .send(body)
                .end(function (err, res) {
                    // chai.expect(res.body.data).to.have.lengthOf.above(1);
                    // console.log(res.body)
                    chai.expect(res.body).to.contain.property('block')
                    chai.expect(res.body.block).to.equal('block is not valid')
                    chai.expect(res.body).to.contain.property('duration')
                    chai.expect(res.body.duration).to.equal('duration is not valid')
                    chai.expect(res.body).to.contain.property('class_room')
                    chai.expect(res.body.class_room).to.equal('class room is not valid')
                    chai.expect(res.body).to.contain.property('exam_name')
                    chai.expect(res.body.exam_name).to.equal('exam name is not valid')
                    res.should.have.status(400);

                });
                    
            done()
        })
    })

    describe("Change status of user's scpecific schedule", () => {

        it("Should not change schedule if schedule ID is wrong", async (done) => {
    
            let body = {
                "status": "pending",
                "schedule_id": "1234567"
            }
            chai.request(path)
                .post('/status')
                .send(body)
                .end(function (err, res) {
                    // chai.expect(res.body.data).to.have.lengthOf.above(1);
                    // console.log(res.body)
                    res.should.have.status(403);
                });
                    
            done()
        })

        it("Should not change schedule if status is wrong", async (done) => {
    
            let body = {
                "status": "accepted",
                "schedule_id": "1IV2wVyY1FpvGBrPLqne"
            }
            chai.request(path)
                .post('/status')
                .set('auth-token', token)
                .send(body)
                .end(function (err, res) {
                    // chai.expect(res.body.data).to.have.lengthOf.above(1);
                    // console.log(res.body)
                    chai.expect(res.body).to.contain.property('request_status')
                    chai.expect(res.body.request_status).to.equal('request status is not valid')
                    res.should.have.status(400);
                });
                    
            done()
        })
    })

    describe("Change status of user's account", () => {

        it("Should not change schedule if user name is wrong", async (done) => {
    
            let body = {
                "account_status": "pending",
                "user_name": "amrita"
            }
            chai.request(path)
                .post('/account_status')
                .send(body)
                .end(function (err, res) {
                    // chai.expect(res.body.data).to.have.lengthOf.above(1);
                    // console.log(res.body)
                    res.should.have.status(500);
                });
                    
            done()
        })

        it("Should not change account status if status is wrong", async (done) => {
    
            let body = {
                "status": "cringe",
                "user_name": "mighil"
            }
            chai.request(path)
                .post('/account_status')
                .send(body)
                .end(function (err, res) {
                    // chai.expect(res.body.data).to.have.lengthOf.above(1);
                    // console.log(res.body)
                    chai.expect(res.body).to.contain.property('account_status')
                    chai.expect(res.body.account_status).to.equal('account status is not valid')
                    res.should.have.status(400);
                });
                    
            done()
        })
    })
    
})