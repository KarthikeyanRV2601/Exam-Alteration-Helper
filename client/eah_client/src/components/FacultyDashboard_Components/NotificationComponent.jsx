import React, { useState } from 'react';
import {Notification} from './Notification';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const NotificationComponent=({NotificationList,returnDate, user})=>{
    NotificationList=NotificationList.filter((item)=>{
        return item.name !== user.user_name
    })
    NotificationList.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
    });
    var [popup,setpopup]=useState(false);
    
    return(
    
        <div className="NotificationContainer">
            <div className="Title">
                <h1>Notification</h1>
                <div id="NotificationCount" src="">{NotificationList.length}</div>
            </div>
           <div className="NotificationSection">
                {NotificationList.map(notification=>{

 
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
NotificationComponent.propTypes = {
    isAuth: PropTypes.bool,
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});


export default connect(mapStateToProps, null)(NotificationComponent)