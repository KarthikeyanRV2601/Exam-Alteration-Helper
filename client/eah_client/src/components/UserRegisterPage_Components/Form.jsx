import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import illustration from './media/undraw_exams_g4ow.svg';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';
const Form=({login,isAuth,user})=>{
    const [ formData , setFormData ] = useState({
        "email": "",
        "user_name":"",
        "password": "",
        "department":""
    })

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }
    if (isAuth && user) return <Redirect to='/' data-test="redirect"/>
        

    const handleClick=async ()=>{
        let res=await axios.post('/users/signup',formData);
        login(formData.email,formData.password)
        
    }
    
    return(
        <>
        <div className="Form">
            
            <div className="ActualForm">
                <h2>Sign up</h2>
                <div className="InputsWrap">
                    <div className="input-field">
                        <input 
                            type="text" 
                            id="username"
                            name="user_name"
                            placeholder="username" 
                            
                            onChange={e => onChange(e)}
                            />
                    </div>
                    <div className="input-field">
                        <input 
                            type="text" 
                            id="email"
                            name="email"
                            placeholder="email" 
                            onChange={e => onChange(e)}/>
                    </div>
                    <div className="input-field">
                        <input 
                            type="password" 
                            id="password"
                            name="password"
                            placeholder="password" 
                            onChange={e => onChange(e)}/>
                    </div>
                    <div className="input-field">
                        <input 
                            type="password" 
                            id="re-enter-password"
                            name="re-enter-password"
                            placeholder="re-enter password" />
                    </div>
                    <div className="input-field">
                        <input list="departmentsList" name="department" id="departments" placeholder="department"
                        onChange={e => onChange(e)}/>
                        <datalist id="departmentsList">
                            <option value="CSE" />
                            <option value="MEC" />
                            <option value="ECE" />
                            <option value="EEE" />
                        </datalist>
                    </div>
                </div>
                <button onClick={() =>handleClick()} >Sign up</button>
                <div className="NewUser">
                        <p>Already have an account?</p>
                        <a href="/login">Sign in here</a>
                </div>
            </div>
            <div className="Illustration">
                <img src={illustration} alt=""/>
            </div>
            
        </div>
        </>
    )
}

Form.propTypes = {
    login: PropTypes.func.isRequired,
    isAuth: PropTypes.bool,
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps,  { login })(Form)