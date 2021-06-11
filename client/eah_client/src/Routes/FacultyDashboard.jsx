import React, { useState,useEffect} from 'react';
import UserDetail from '../components/FacultyDashboard_Components/UserDetail';
import NotificationComponent from '../components/FacultyDashboard_Components/NotificationComponent';
import {TopBanner} from '../components/FacultyDashboard_Components/TopBanner';
import {MainBanner} from '../components/FacultyDashboard_Components/MainBanner';
import '../components/FacultyDashboard_Components/styles/FDashboard.css';
import AOS from 'aos';
import "aos/dist/aos.css";

import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FacultyDashboard=({ isAuth, user })=>{  

    const [ Userdata, setUserData] = useState([])
    const [ Notificationdata, setNotifData] = useState([])
    const[UserIdMap,setUserIdMap]=useState({})
    var dateInPast = function(firstDate) {
        let secondDate=new Date();
        if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
          return true;
        }
      
        return false;
      };
   
        useEffect(() => {
            (async () => 
            {
                try {
                    let body = { "uid": user.userID}
                    let data = await axios.post('/schedule/get',body)
                    setUserData(data.data.data.filter((item)=>{
                        let date=new Date(item.date);
                        return (!dateInPast(date))
                    }))
                    let NotifData=await axios.get('/schedule/pending_schedule');
                    setNotifData(NotifData.data.data); 
                    
                    let res=await axios.get('/schedule/get_id');
                    setUserIdMap(res.data.data);
                } catch (error) {
                    console.log(error)
                }
            })()
        }, [])
        useEffect(async () => {
            
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
        <div className="FacultyDashboard">
            <div className="BlueBanner">
                
            </div>
            <div 
  
            className="LeftContainer">
                <UserDetail userType={user.posting} userDepartment="Department of computer science" />
                <NotificationComponent NotificationList={Notificationdata} UserIdMap={UserIdMap} setNotifData={setNotifData} returnDate={returnDate}/>
            </div>
            <div className="RightContainer">
                <TopBanner invigilationsScheduled={Userdata.length} Dutyhours="7/10" exchanges="10" />
                <MainBanner dutyLinks={Userdata.slice(0,3)} returnDate={returnDate} user={user} />
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