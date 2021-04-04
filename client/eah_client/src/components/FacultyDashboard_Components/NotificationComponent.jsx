import React, { useState } from 'react';
import {Notification} from './Notification';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {PopupContainer} from './PopupContainer';
const NotificationComponent=({NotificationList,returnDate, user})=>{
    var dateInPast = function(firstDate) {
        let secondDate=new Date();
        if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
          return true;
        }
      
        return false;
      };
    NotificationList=NotificationList.filter((item)=>{
        let date=new Date(item.date);
        
        return ((item.name !== user.user_name)&&(!dateInPast(date)))
    })
    NotificationList.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
    });
  
    var [popup,setpopup]=useState(false);
    var [PopupData,setPopupData]=useState(null);
    return(
    
        <div className="NotificationContainer">
            <div className="Title">
                <h1>Available requests</h1>
                <div id="NotificationCount" src="">{NotificationList.length}</div>
            </div>
           <div className="NotificationSection">
                {NotificationList.map(notification=>{

                   
                    let date=new Date(notification.date);
                    console.log(dateInPast(date)) 
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
                        <Notification notification={NotifText} actualNotificationData={notification} Classname={Classname} setpopup={setpopup} date={returnDate(date)} Examtime={Examtime+"hr"} popup={popup} setPopupData={setPopupData}/>
                        </>
                    )
                        

 
                })}
            
            {popup&&<PopupContainer ExamData={PopupData} setpopup={setpopup}  returnDate={returnDate} />}
           </div>
        </div>
        
    
    )
}
NotificationComponent.propTypes = {
    isAuth: PropTypes.bool,
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});


export default connect(mapStateToProps, null)(NotificationComponent)