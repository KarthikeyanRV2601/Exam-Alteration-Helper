
const chai = require("chai")
const axios = require("axios")
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let should = chai.should();


let path = 'http://localhost:5000/vathiraid-6beca/us-central1/api/auth/'



describe("Login", function(){
    

    it("Should login a user", (done) => {
        
        // console.log(token)
        let body = {
            "email": "mighil@gmail.com",
            "password": "mighil"
        }
        // const result = await axios.post('http://localhost:5000/vathiraid-6beca/us-central1/api/auth/login', body)
        // console.log(result)
        chai.request(path)
            .post('/login')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({"email": "mighil@gmail.com","password": "mighil"})
            .end(function (err, res) {

                    // console.log(res.body)
                    // done(err)
                    
                    res.should.have.status(201);
                    chai.expect(res.body).to.contain.property('token')
                    chai.expect(res.body).to.contain.property('message')

            });
                
        done()
    })

    it("Should not login a user as wrong password is entered", async (done) => {
        
        let body = {
            "email": "mighil@gmail.com",
            "password": "mighil"
        }
        // const result = await axios.post('http://localhost:5000/vathiraid-6beca/us-central1/api/auth/login', body)
        // console.log(result)
        chai.request(path)
            .post('/login')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({"email": "mighil@gmail.com","password": "miighil"})
            .end(function (err, res) {

                    // console.log(res)
                    // done(err)
                    res.should.have.status(403);
                    chai.expect(res.body).to.contain.property('general')
                    chai.expect(res.body.general).to.equal('The password is incorrect.')
            });
                
        done()
    })

    it("Should not login a user as wrong email is entered", async (done) => {
        
        let body = {
            "email": "mighil@gmail.com",
            "password": "mighil"
        }
        // const result = await axios.post('http://localhost:5000/vathiraid-6beca/us-central1/api/auth/login', body)
        // console.log(result)
        chai.request(path)
            .post('/login')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({"email": "miighil@gmail.com","password": "miighil"})
            .end(function (err, res) {

                    // console.log(res)
                    // done(err)
                res.should.have.status(500);
                chai.expect(res.body).to.contain.property('error')
                chai.expect(res.body.error).to.equal('auth/user-not-found')
            });
                
        done()
    })

})

describe("User details", function(){

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
        
    it("Should get back user details of the given token", async (done) => {

        chai.request(path)
            .get('/')
            .set('auth-token', token)
            .end(function (err, res) {
                chai.expect(res.body.user).to.contain.property('email')
                chai.expect(res.body.user.email).to.equal('mighil@gmail.com')
                chai.expect(res.body.user).to.contain.property('department')
                chai.expect(res.body.user.department).to.equal('ECE')
                chai.expect(res.body.user).to.contain.property('user_name')
                chai.expect(res.body.user.user_name).to.equal('mighil')
            });
                
        done()
    })

    it("Should give error since no token is supplied", async (done) => {
        chai.request(path)
            .get('/')
            .end(function (err, res) {
                res.should.have.status(403);
            });
                
        done()
    })

    it("Should give error since provided is incorrect", async (done) => {
        chai.request(path)
            .get('/')
            .set('auth-token', "qwerty")
            .end(function (err, res) {
                res.should.have.status(400);
                chai.expect(res.body).to.contain.property('error')
                chai.expect(res.body.error).to.equal('Incorrect token')
            });
                
        done()
    })
                

})

// describe("Schedule", function(){

//     let user;
//     before(async (done) => {
//         try {
            
//             user = await axios.post('/login', body) 
//             done()
//         } catch (error) {
//             done(error)
//         }
//     })

//     it("Should get all schedules of a particular user", async () => {
        
//         let body = {
//             "email": "mighil@gmail.com",
//             "password": "mighil"
//         }
//         chai.request('http://localhost:3000')
//             .get('/')
//             .end((err, res) => {
//                   res.should.have.status(200);
//                   res.body.should.be.a('array');
//                   res.body.length.should.be.eql(0);
//               done();
//             });
//     })

// })