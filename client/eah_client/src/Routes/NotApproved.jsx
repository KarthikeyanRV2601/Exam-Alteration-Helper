import React, { useState, useEffect }  from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import illustro from '../components/NotApproved_Components/media/page-not-found.svg';
import '../components/NotApproved_Components/styles/style.css';
const NotApproved=({isAuth})=>{


    // if (isAuth) 
    // {
    //     return <Redirect to='/' />
    // }
    // else{
    //     console.log("failed")
    // }

    var signOut=()=>{
        localStorage.removeItem("token");
        window.location.reload();
    }

    return(
        <>
        <div className="ErrorDisplay">
            <div className="Left">
                <h1>Oops!</h1>
                <h2>You are not authorised yet.<br/>Please wait until you are approved</h2>
                <button onClick={e=>signOut()}>
                    Signout
                </button>
            </div>
            <div className="Right">
                <img src={illustro} alt=""/>
            </div>
        </div>
        
        </>
    )
}


NotApproved.propTypes = {
    isAuth: PropTypes.bool,
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(NotApproved)