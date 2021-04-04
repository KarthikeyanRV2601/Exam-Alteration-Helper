import React, { useRef, useState,useEffect } from 'react';
import '../components/styles/profileSettings.css'; 
import cancelIcon from './styles/media/cancel.svg';



export const ProfileSettings=()=>{
    var [update_username,setupdateuname]=useState(true);
    var [update_email,setupdateemail]=useState(true);
    var [update_password,setupdatepword]=useState(false);
    var [update_posting,setupdatepost]=useState(true);
    var [update_department,setupdateudept]=useState(true);
    var [Overlay,setOverlay]=useState(false);
    var FormData=useRef(null);
    var passwordConfirm=useRef(null);
    let UpdatedData={
        u_name:null,
        email:null,
        posting:null,
        department:null
    }
    var setpopup=()=>{
        setOverlay(false)
    }
    var HandleChange=()=>{
        UpdatedData.u_name=FormData.current[0].value
        UpdatedData.email=FormData.current[1].value
        UpdatedData.posting=FormData.current[2].value
        UpdatedData.department=FormData.current[3].value
        let User_given_password=passwordConfirm.current.value
        console.log(User_given_password);
        //api post request here for userdata 
        setpopup(false);
    }

    return(

        <div className="ProfileSettings">
            <form className="ProfileForm" ref={FormData}>
              
                
                    {update_username&&<div className="input-field">
                        <input 
                            type="text" 
                            id="username"
                            name="username"
                            required />
                        <label htmlFor="username">username</label>
                    </div>}
                    {update_email&&<div className="input-field">
                        <input 
                            type="text" 
                            id="email"
                            name="email"
                            required />
                        <label htmlFor="email">email</label>
                    </div>}
                    {update_password&&<div className="input-field">
                        <input 
                            type="text" 
                            id="password"
                            name="password"
                            required />
                        <label htmlFor="password">new password</label>
                    </div>}
                    {update_posting&&<div className="input-field">
                        <input 
                            type="text" 
                            id="position"
                            name="position"
                            required />
                        <label htmlFor="position">position</label>
                    </div>}
                    {update_department&&<div className="input-field">
                        <input 
                            type="text" 
                            id="department"
                            name="department"
                            required />
                        <label htmlFor="department">department</label>
                    </div>}
              

            </form>
            <button onClick={e=>setOverlay(true)}>Update profile</button>
            {Overlay&&<div className="ConfirmationOverlay">
                
                <div className="container">
                <img className='closeButton' src={cancelIcon} onClick={e=>setpopup(false)}/>
                    <h2>Enter your current password</h2>

                    <div className="input-field">
                        <input 
                            type="password" 
                            id="passwordConfirm"
                            name="passwordConfirm"
                            required ref={passwordConfirm}/>
                        <label htmlFor="passwordConfirm">password</label>
                    </div>
                    <button onClick={e=>HandleChange(e)}>Confirm password</button>

                   

                </div>
            </div>
            }
            
        </div>
        
    )
}