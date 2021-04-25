import React, { useState } from 'react';
import IllustrationContainer from '../components/LoginPage_Components/Illustration';
import Form from '../components/LoginPage_Components/Form';
import '../components/LoginPage_Components/styles/Login.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import videosrc from '../components/LoginPage_Components/media/bgv.mp4';

export const LoginPage=({ isAuth, user })=>{
    var [showForm,setshowForm]=useState(false)
    var [classname,setclassname]=useState("")
    if (isAuth) 
    {
        return <Redirect to='/' />
    }
    else{
        console.log("failed")
    }

    return(
        <div className="LoginPage">
            {!showForm&&
            <>
                <video id="videoBkg" preload autoPlay muted loop>
                <source src={videosrc} type="video/mp4"/>
                </video>

                <div class="hero-section">
                <h1>Your</h1>
                <h1>Exam</h1>
                <h1>Alteration</h1>
                <h1>Helper</h1>
                {/* <p>Need we say more? <br/>Login to<strong>YEAH</strong>and make your life easy.</p> */}
                
                <button id="getStartedbtn" onClick={e=>setshowForm(true)}>Get started</button>
                </div>
            </>
                }

            {showForm&&<div className="Container">
                <Form classname={classname}/>
                <IllustrationContainer/>
            </div>}
            
        </div>
    )
}

LoginPage.propTypes = {
    isAuth: PropTypes.bool,
    user: PropTypes.object,
  };

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(LoginPage);
