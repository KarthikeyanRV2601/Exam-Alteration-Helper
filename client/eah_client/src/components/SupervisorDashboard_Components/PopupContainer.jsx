import React, { useState } from 'react';
import cancelIcon from './media/cancel.svg'



export const PopupContainer=({userdata,setpopup})=>{
 
    

    return(
            <>
            <div className="PopupInformation">
                
                    <div className="InfoContainer">
                    <img className='closeButton' src={cancelIcon} onClick={e=>setpopup(false)}/>
                        <div className="Element">
                            <label>User name:</label>
                            <p>{userdata.user_name}</p>
                        </div>
                        <div className="Element">
                            <label>Posting:</label>
                            <p>{userdata.posting}</p>
                        </div>
                        <div className="Element">
                            <label>Department:</label>
                            <p>{userdata.department}</p>
                        </div>
                        
                        
                    </div>
            </div>
            </>
    )
}