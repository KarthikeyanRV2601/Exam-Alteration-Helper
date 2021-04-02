import React, { useRef } from 'react';
import '../components/styles/profileSettings.css'; 



export const ProfileSettings=()=>{

    return(

        <div className="ProfileSettings">
            <form className="ProfileForm">
                    <div className="input-field">
                        <input 
                            type="text" 
                            id="username"
                            name="username"
                            required />
                        <label for="username">username</label>
                    </div>
                    <div className="input-field">
                        <input 
                            type="text" 
                            id="occupation"
                            name="occupation"
                            required />
                        <label for="occupation">occupation</label>
                    </div>
                    <div className="input-field">
                        <input 
                            type="text" 
                            id="department"
                            name="department"
                            required />
                        <label for="department">department</label>
                    </div>
               <button>
                   Update profile
               </button>

            </form>
        </div>
        
    )
}