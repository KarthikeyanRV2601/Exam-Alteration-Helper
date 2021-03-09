import React, { useState } from 'react';
import IllustrationContainer from '../components/LoginPage_Components/Illustration';
import Form from '../components/LoginPage_Components/Form';
import '../components/LoginPage_Components/styles/Login.css';



export const LoginPage=()=>{
    return(
        <div className="LoginPage">
            <Form/>
            <IllustrationContainer/>
        </div>
    )
}
