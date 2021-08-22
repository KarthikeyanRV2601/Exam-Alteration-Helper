import React, { useState } from 'react';
import cancelIcon from './media/cancel.svg'



export const PopupContainer=({userdata,setpopup})=>{
 
    

    return(
            <>
            <div className="PopupInformation">
                
                    <div className="InfoContainer">
                    <img className='closeButton' src={cancelIcon} onClick={e=>setpopup(false)}/>
                        <img src={`https://randomuser.me/api/portraits/men/${userdata.user_name.length+userdata.user_name.charCodeAt(0) - 65}.jpg`} alt="" className="dp" />
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