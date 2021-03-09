import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Form=({ login, user, isAuthenticated })=>{


    const [ formData , setFormData ] = useState({
        "email": "",
        "password": "",
    })

    const { email, password } = formData;

    if (isAuthenticated && user !== null) 
    {
        return <Redirect to='/' />
        
    }

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async e => {
        e.preventDefault();
        console.log(formData);
        console.log(email);
        // login("mighil@gmail.com","mighil")
        login(email, password);
        
    }

    return(
            <div className="LeftPanel">
                <div className="Introtext">
                    <h2><span>y</span>EAH</h2>
                    <p>Your exam alteration needs ,fulfilled</p>
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
                    <button className="LoginButton" >Submit</button>
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


