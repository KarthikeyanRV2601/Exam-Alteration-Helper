import React, { useState } from 'react';
import {Notification} from './Notification';
export const NotificationComponent=({NotifcationList,returnDate})=>{
    NotifcationList.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
    });
    var [popup,setpopup]=useState(false);
    return(
    
        <div className="NotificationContainer">
            <div className="Title">
                <h1>Notification</h1>
                <div id="NotificationCount" src="">{NotifcationList.length}</div>
            </div>
           <div className="NotificationSection">
                {NotifcationList.map(notification=>{
                    let date=new Date(notification.date);
                    let minutes;
                    if(date.getMinutes()==0)
                    minutes="00"
                    else
                    minutes=date.getMinutes();
                    
                    let Examtime=date.getHours()+":"+minutes;
                    let NotifText=`New request from ${notification.name} on ${returnDate(date)}`;
                    let CurrentDate=new Date();
                    
                    let Classname="Text"
                    if(returnDate(CurrentDate)==returnDate(date)  && (date.getHours()-CurrentDate.getHours()<1))
                    {
                        Classname="Emergency"
                    }
                    return (
                        <>
                        <Notification notification={NotifText} Classname={Classname} setpopup={setpopup} date={returnDate(date)} Examtime={Examtime+"hr"} popup={popup}/>
                        
                        </>
                    )
                })}
            
            
           </div>
        </div>
        
    
    )
}