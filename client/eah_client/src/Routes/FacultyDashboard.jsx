import React, { useState,useEffect} from 'react';
import UserDetail from '../components/FacultyDashboard_Components/UserDetail';
import {NotificationComponent} from '../components/FacultyDashboard_Components/NotificationComponent';
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
    const [ data, setData] = useState([])
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
                setData(data.data.user.data)
                
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    
    var NotifcationList=["A new request for faculty exchange has arrived","Thumbi kannan accepted your exchange request","Secretary has scheduled a new exam for you","Secretary has scheduled a new exam for you","Secretary has scheduled a new exam for you","Secretary has scheduled a new exam for you","Secretary has scheduled a new exam for you"]
    
    var requestsLinks=["Secretary has scheduled a new exam for you"]
    return(
        <div className="FacultyDashboard">
            <div className="BlueBanner">
                
            </div>
            <div 
  
            className="LeftContainer">
                <UserDetail userType="faculty" userDepartment="Department of computer science" />
                <NotificationComponent NotifcationList={NotifcationList}/>
            </div>
            <div className="RightContainer">
                <TopBanner invigilationsScheduled="9" Dutyhours="7/10" exchanges="10" />
                <MainBanner dutyLinks={data.slice(0,3)} requestLinks={requestsLinks} returnDate={returnDate} />
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