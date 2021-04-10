const chai = require("chai")
const axios = require("axios")
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let should = chai.should();

describe("Login", function(){

    it("Should get all schedules of a particular user", async (done) => {
        
        let body = {
            "email": "mighil@gmail.com",
            "password": "mighil"
        }
        chai.request('http://localhost:3000')
            .post('/login')
            .type('form')
            .send(body)
            .end((err, res) => {
                // console.log(res)
                  res.should.have.status(404);
            });
        done();
        
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