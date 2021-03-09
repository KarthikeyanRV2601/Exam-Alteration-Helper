import React, { useState } from 'react';
import IllustrationContainer from '../components/LoginPage_Components/Illustration';
import Form from '../components/LoginPage_Components/Form';
import '../components/LoginPage_Components/styles/Login.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


export const LoginPage=({ isAuth })=>{

    if (isAuth) 
    {
        return <Redirect to='/' />
    }

    return(
        <div className="LoginPage">
            <Form/>
            <IllustrationContainer/>
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
