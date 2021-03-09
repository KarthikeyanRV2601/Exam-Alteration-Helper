import React, { useState,useEffect} from 'react';
import UserDetail from '../components/FacultyDashboard_Components/UserDetail';
import {NotificationComponent} from '../components/FacultyDashboard_Components/NotificationComponent';
import {TopBanner} from '../components/FacultyDashboard_Components/TopBanner';
import {MainBanner} from '../components/FacultyDashboard_Components/MainBanner';
import '../components/FacultyDashboard_Components/styles/FDashboard.css';
import AOS from 'aos';
import "aos/dist/aos.css";

import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FacultyDashboard=({ isAuth, user })=>{

    useEffect(() => {
        AOS.init({
          duration : 300,
          easing: 'ease-in-out',
        });
      }, []);
    
    var NotifcationList=["A new request for faculty exchange has arrived","Thumbi kannan accepted your exchange request","Secretary has scheduled a new exam for you","Secretary has scheduled a new exam for you","Secretary has scheduled a new exam for you","Secretary has scheduled a new exam for you","Secretary has scheduled a new exam for you"]
    var dutyLinks=["Invigilation at 2pm for ECE maths exam","Invigilation at 4pm for ECE science exam"]
    var requestsLinks=["Secretary has scheduled a new exam for you"]
    return(
        <div className="FacultyDashboard">
            <div className="BlueBanner">
                
            </div>
            <div 
            data-aos={"fade-right"}
            className="LeftContainer">
                <UserDetail userName="inbaraj" userType="faculty" userDepartment="Department of computer science" />
                <NotificationComponent NotifcationList={NotifcationList}/>
            </div>
            <div
            data-aos={"fade-left"}
            className="RightContainer">
                <TopBanner invigilationsScheduled="9" Dutyhours="7/10" exchanges="10" />
                <MainBanner dutyLinks={dutyLinks} requestLinks={requestsLinks} />
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