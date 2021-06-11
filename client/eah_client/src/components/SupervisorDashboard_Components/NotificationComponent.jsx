import React, { useState } from 'react';
import {Notification} from './Notification';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {PopupContainer} from './PopupContainer';
const NotificationComponent=({NotificationList,returnDate, user})=>{
 

  
    var [popup,setpopup]=useState(false);
    var [PopupData,setPopupData]=useState(null);
    return(
    
        <div className="NotificationContainer">
            <div className="Title">
                <h1>Pending registrations</h1>
                <div id="NotificationCount" src="">{NotificationList.length}</div>
            </div>
           <div className="NotificationSection">
                {NotificationList.map((notification,Id)=>{

                    let date=new Date(notification.createdAt);
                    

                    let NotifText=`New signup request from ${notification.user_name} on ${returnDate(date)}`;
                   
  
                    return (
                        <>
                        <Notification notification={NotifText} Id={Id} actualNotificationData={notification} setpopup={setpopup} date={returnDate(date)}  popup={popup} setPopupData={setPopupData}/>
                        </>
                    )
                        

 
                })}
            
            {popup&&<PopupContainer userdata={PopupData} setpopup={setpopup}  returnDate={returnDate} />}
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