import React, { useState, useEffect }  from 'react';
import CalendarComponent from '../components/TimeTable_Components/CalendarComponent';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import InformationComponent from '../components/TimeTable_Components/InformationComponent';
import ExamInfo from '../components/TimeTable_Components/ExamInformation';
import {NavbarComponent} from '../components/Navbar';
import { Redirect } from 'react-router-dom';
const TimeTable=({user})=>{

    const [Currentdate,setCurrentdate]=useState(null)
    const [ scheduledata, setscheduleData] = useState([])

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
                const data = await axios.post('/schedule',body)
                setscheduleData(data.data.data.filter((item)=>{
                    let date=new Date(item.date);
                    return (!dateInPast(date))
                }))
                
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    if(user)
    {
        if(user.account_status!="approved")
        {
            return <Redirect to='/not-approved'/>
        }
    }
    return(
        <>
            <NavbarComponent/>
            <div className="CalendarPage">
                <CalendarComponent examData={scheduledata} setCurrentdate={setCurrentdate} returnDate={returnDate}/>
                <ExamInfo examData={scheduledata} Currentdate={Currentdate} returnDate={returnDate} isMyTimetable={true}/>
                
            </div>
        </>
    )
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(TimeTable);