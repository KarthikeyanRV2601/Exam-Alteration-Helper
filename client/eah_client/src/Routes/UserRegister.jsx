import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../components/UserRegisterPage_Components/styles/style.css';
import Form from '../components/UserRegisterPage_Components/Form';
import { Redirect } from 'react-router-dom';
const RegisterNewUser=({isAuth,user})=>{

    if (isAuth) 
    {
        return <Redirect to='/' />
    }
    else{
        console.log("failed")
    }
    
    return(
        <div className="RegisterUser">
            <Form></Form>
 
        </div>
    )
}

RegisterNewUser.propTypes = {
    isAuth: PropTypes.bool,
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(RegisterNewUser)