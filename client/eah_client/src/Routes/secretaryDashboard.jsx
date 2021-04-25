import React, { useState,useEffect} from 'react';
import UserDetail from '../components/SupervisorDashboard_Components/UserDetail';
import NotificationComponent from '../components/SupervisorDashboard_Components/NotificationComponent';
import {TopBanner} from '../components/SupervisorDashboard_Components/TopBanner';
import {MainBanner} from '../components/SupervisorDashboard_Components/MainBanner';
import '../components/SupervisorDashboard_Components/styles/SDashboard.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SupervisorDashboard=({ isAuth, user })=>{
    const [ Userdata, setUserData] = useState([])
    const [ Notificationdata, setNotifData] = useState([])
    console.log(user);
        useEffect(() => {
            (async () => 
            {
                try {
                    let data = await axios.get('/schedule')
                    setUserData(data.data.user.data)
                    let NotifData=await axios.get('/schedule/pending_schedule')
                    setNotifData(NotifData.data.data); 

                } catch (error) {
                    console.log(error)
                }
            })()
        }, [])
 

    var returnDate=(e)=>{
        var dd=e.getDate();
        var mm=e.getMonth()+1;
        var yyyy=e.getFullYear();
        if(dd<10) 
        {   
            dd='0'+dd;
        } 
        if(mm<10) 
        {
            mm='0'+mm;
        } 
        var date = dd+ "-" + mm + "-" + yyyy;

        return date
    }
    
    
    return(
        <div className="SupervisorDashboard">
            <div className="BlueBanner">
                
            </div>
            <div 
  
            className="LeftContainer">
                <UserDetail userType={user.posting} userDepartment="Department of computer science" />
                <NotificationComponent NotificationList={Notificationdata} returnDate={returnDate}/>
            </div>
            <div className="RightContainer">
                <TopBanner invigilationsScheduled={Userdata.length} Dutyhours="7/10" exchanges="10" />
                <MainBanner dutyLinks={Userdata.slice(0,3)} returnDate={returnDate} />
            </div>
        </div>

    )
}
SupervisorDashboard.propTypes = {
    isAuth: PropTypes.bool,
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(SupervisorDashboard)