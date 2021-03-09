import React, { useState } from 'react';
import ManDP from './media/man.svg';

export const UserDetail=({userName,userType,userDepartment})=>{
    return(
        <div className="UserDetail">
           <img src={ManDP} className="ProfileDp" alt=""/>
           <div className="Details">
               <h2>{userName}</h2>
               <div className="Label">
                   {userType}
               </div>
               <p>{userDepartment}</p>
           </div>
        </div>
    )
}