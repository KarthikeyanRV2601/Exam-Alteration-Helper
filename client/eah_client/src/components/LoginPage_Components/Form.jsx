import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import logo1 from './media/yeah1.svg'

import logo2 from './media/yeah2.svg'

const Form=({ login, user, isAuth })=>{


    const [ formData , setFormData ] = useState({
        "email": "",
        "password": "",
    })

    const { email, password } = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    if (isAuth) 
    {
        return <Redirect to='/' />
        
    }

    const onSubmit = async e => {
        e.preventDefault();
        // login("mighil@gmail.com","mighil")
        return login(email, password);
        
    }

    return(
            <div className="LeftPanel">
                <div className="Introtext">
                    <img className="Logo" src={logo2} />
                    <p>Your exam alteration needs,<br/><span>fulfilled</span></p>
                </div>
                <form onSubmit={e => onSubmit(e)} className="LoginForm">
                    <div className="input-field">
                    <input 
                        type="text" 
                        id="email"
                        name="email"
                        onChange={e => onChange(e)}
                        required />
                    <label for="email">email</label>
                    </div>
                    <div className="input-field">
                        <input 
                            type="password" 
                            id="pwd"
                            name="password" 
                            onChange={e => onChange(e)}
                            required />
                        <label for="pwd">password</label>
                    </div>
                    <button className="LoginButton">Login</button>
                </form>
            </div>
    )
}

Form.propTypes = {
    login: PropTypes.func.isRequired,
    isAuth: PropTypes.bool,
    user: PropTypes.object,
  };

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, { login })(Form);


