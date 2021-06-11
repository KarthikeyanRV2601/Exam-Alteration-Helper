import React, { useRef, useState,useEffect } from 'react';
import WarningIcon from './media/warning.svg';
import exclamationIcon from './media/exclamation.svg';
import {PopupContainer} from './PopupContainer';

export const Notification=({Id,notification,actualNotificationData,Classname,date,Examtime,setPopupData,setpopup})=>{
    var [Bullet,setBullet]=useState(exclamationIcon);
    const NotifText=useRef(null);
    const TextRef=useRef(null);
  

    return(
        <>
        <div className="Notification" onClick={e=>
        {   
            setPopupData(actualNotificationData);
            setpopup(true);
        }}>
            <div className="Text" ref={TextRef}>
                    <img className="bullet" src={Bullet} />
                    <a href="#" id={"Notif"+Id} ref={NotifText}>{notification}</a>
            </div>
            <div className="Line">
            </div>
            
        </div>
        </>
    )
}