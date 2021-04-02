import React, { useRef, useState,useEffect } from 'react';
import WarningIcon from './media/warning.svg';
import exclamationIcon from './media/exclamation.svg';
import {PopupContainer} from './PopupContainer';

export const Notification=({notification,Classname,setpopup,date,Examtime,popup})=>{
    var [Bullet,setBullet]=useState(exclamationIcon);
    const TextRef=useRef(null);

    useEffect(() => {
        if(Classname=="Emergency")
        {
            setBullet(WarningIcon);
            TextRef.current.className=Classname;
        }
      }, [TextRef]);
    
    
    return(
        <>
        <div className="Notification" onClick={e=>
        {
            setpopup(true)
            console.log(popup)
            
        }}>
            <div className="Text" ref={TextRef}>
                    <img className="bullet" src={Bullet} />
                    <a href="#">{notification}</a>
            </div>
            <div className="Line">
            </div>
            
        </div>
        {popup&&<PopupContainer ExamData={notification} date={date} Examtime={Examtime} setpopup={setpopup}/>}
        </>
    )
}