import React, { useState,useEffect} from 'react';
import UserDetail from '../components/FacultyDashboard_Components/UserDetail';
import NotificationComponent from '../components/FacultyDashboard_Components/NotificationComponent';
import {TopBanner} from '../components/FacultyDashboard_Components/TopBanner';
import {MainBanner} from '../components/FacultyDashboard_Components/MainBanner';
import '../components/FacultyDashboard_Components/styles/FDashboard.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FacultyDashboard=({ isAuth, user })=>{
    const [ Userdata, setUserData] = useState([])
    const [ Notificationdata, setNotifData] = useState([])
    console.log(Userdata);
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
    
    return(
        <div className="FacultyDashboard">
            <div className="BlueBanner">
                
            </div>
            <div 
  
            className="LeftContainer">
                <UserDetail userType="faculty" userDepartment="Department of computer science" />
                <NotificationComponent NotificationList={Notificationdata} returnDate={returnDate}/>
            </div>
            <div className="RightContainer">
                <TopBanner invigilationsScheduled={Userdata.length} Dutyhours="7/10" exchanges="10" />
                <MainBanner dutyLinks={Userdata.slice(0,3)} returnDate={returnDate} />
            </div>
        </div>

    )
}
FacultyDashboard.propTypes = {
    isAuth: PropTypes.bool,
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(FacultyDashboard)