import React, { useRef, useState,useEffect } from 'react';
import '../components/styles/profileSettings.css'; 



export const ProfileSettings=()=>{
    var [updateusername,setupdateuname]=useState(false);
    var [updateemail,setupdateemail]=useState(false);
    var [updatepassword,setupdatepword]=useState(false);
    var [updateoccupation,setupdateocc]=useState(false);
    var [updatedepartment,setupdateudept]=useState(false);
    

    return(

        <div className="ProfileSettings">
            <form className="ProfileForm">
              
                
                    {updateusername&&<div className="input-field">
                        <input 
                            type="text" 
                            id="username"
                            name="username"
                            required />
                        <label htmlFor="username">username</label>
                    </div>}
                    {updateemail&&<div className="input-field">
                        <input 
                            type="text" 
                            id="email"
                            name="email"
                            required />
                        <label htmlFor="email">email</label>
                    </div>}
                    {updatepassword&&<div className="input-field">
                        <input 
                            type="text" 
                            id="password"
                            name="password"
                            required />
                        <label htmlFor="password">new password</label>
                    </div>}
                    {updateoccupation&&<div className="input-field">
                        <input 
                            type="text" 
                            id="occupation"
                            name="occupation"
                            required />
                        <label htmlFor="occupation">occupation</label>
                    </div>}
                    {updatedepartment&&<div className="input-field">
                        <input 
                            type="text" 
                            id="department"
                            name="department"
                            required />
                        <label htmlFor="department">department</label>
                    </div>}
              

            </form>
            {false&&<div className="ConfirmationOverlay">
                <div className="container">
                    <h2>Enter your current password to update profile</h2>
                    <div className="Buttons">
                        <button >
                            Yes
                        </button>
                        <button>
                            No
                        </button>
                    </div>

                </div>
            </div>
            }
        </div>
        
    )
}