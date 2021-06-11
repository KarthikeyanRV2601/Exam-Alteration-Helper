import React, { useState } from 'react';
import {Notification} from './Notification';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {PopupContainer} from './PopupContainer';
const NotificationComponent=({NotificationList,setNotifData,UserIdMap,returnDate, user})=>{
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
    var dateInPast = function(firstDate) {
        let secondDate=new Date();
        if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
          return true;
        }
      
        return false;
      };
    // console.log(NotificationList);
    NotificationList=NotificationList.filter((item)=>{
        let date=new Date(item.date);
        item.name=getKeyByValue(UserIdMap,item.userID);
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
                {NotificationList.map((notification,Id)=>{
                    notification.name=getKeyByValue(UserIdMap,notification.userID);
                    let date=new Date(notification.date);
                    // console.log(dateInPast(date)) 
                    let minutes;
                    if(date.getMinutes()==0)
                    minutes="00"
                    else
                    minutes=date.getMinutes();
                    let Examtime=date.getHours()+":"+minutes;
                    let NotifText=`New request from ${notification.name && notification.name.charAt(0).toUpperCase()+notification.name.slice(1,notification.name.length)} on ${returnDate(date)}`;
                    let CurrentDate=new Date();
                    
                    let Classname="Text"
                    if(returnDate(CurrentDate)==returnDate(date)  && (date.getHours()-CurrentDate.getHours()<1))
                    {
                        Classname="Emergency"
                    }
                    return (
                        <>
                        <Notification notification={NotifText}  Id={Id} actualNotificationData={notification} Classname={Classname} setpopup={setpopup} date={returnDate(date)} Examtime={Examtime+"hr"} popup={popup} setPopupData={setPopupData}/>
                        </>
                    )
                        

 
                })}
            
            {popup&&<PopupContainer ExamData={PopupData} setNotifData={setNotifData} NotificationList={NotificationList} setpopup={setpopup}  returnDate={returnDate} />}
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