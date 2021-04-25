import React, { useState } from 'react';
import cancelIcon from './media/cancel.svg'



export const PopupContainer=({ExamData,setpopup, returnDate })=>{
    
    let date=new Date(ExamData.date);
    let minutes;
    if(date.getMinutes()==0)
    minutes="00"
    else
    minutes=date.getMinutes();
    let Examtime=date.getHours()+":"+minutes;
    

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
                        
                    </div>
            </div>
            </>
    )
}