import React, { useState } from 'react';
import {Notification} from './Notification';
export const NotificationComponent=({NotifcationList})=>{

    return(
        <div className="NotificationContainer">
            <div className="Title">
                <h1>Notification</h1>
                <div id="NotificationCount" src="">{NotifcationList.length}</div>
            </div>
           <div className="NotificationSection">
                {NotifcationList.map(notification=>{
                    return (
                        <Notification notification={notification}/>
                    )
                })}
            
            
           </div>
        </div>
    )
}