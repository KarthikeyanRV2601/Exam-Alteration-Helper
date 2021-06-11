import React, { useState } from 'react';
import cancelIcon from './media/cancel.svg'
import axios from 'axios';


export const PopupContainer=({ExamData,NotificationList,setpopup,setNotifData, returnDate })=>{
    
    // let date=new Date(ExamData.date);
    let date=new Date(new Date(ExamData.date).getTime()-19800000);
    let minutes;
    if(date.getMinutes()==0)
    minutes="00"
    else
    minutes=date.getMinutes();
    let Examtime=date.getHours()+":"+minutes;

    var acceptRequest=async ()=>{
        setpopup(false)
        setNotifData(NotificationList.filter(notification=>notification.id!=ExamData.id))
        let res=await axios.post('/schedule/alter',{schedule_id:ExamData.id})
    }

    return(
            <>
                <div className="PopupInformation">
                
                    <div className="InfoContainer">
                        <img className='closeButton' src={cancelIcon} onClick={e=>setpopup(false)}/>
                            <div className="Element">
                                <label>Exam name:</label>
                                <p>{ExamData.exam_name}</p>
                            </div>
                            <div className="Element">
                                <label>Exam time:</label>
                                <p>{Examtime}</p>
                            </div>
                            
                            <div className="Element">
                                <label>Exam date:</label>
                                <p>{returnDate(date)}</p>
                            </div><div className="Element">
                                <label>Exam block:</label>
                                <p>{ExamData.block}</p>
                            </div><div className="Element">
                                <label>Exam duration:</label>
                                <p>{ExamData.duration}</p>
                            </div><div className="Element">
                                <label>Class room:</label>
                                <p>{ExamData.class_room}</p>
                            </div>
                            <button id="RequestAcceptButton" onClick={e=>{acceptRequest()}}>Accept</button>
                    </div>
                    
            </div>
            </>
    )
}