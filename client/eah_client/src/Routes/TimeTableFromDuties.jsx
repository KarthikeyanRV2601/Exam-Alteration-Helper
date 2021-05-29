import React, { useState, useEffect }  from 'react';
import CalendarComponent from '../components/TimeTable_Components/CalendarComponent';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import InformationComponent from '../components/TimeTable_Components/InformationComponent';
import ExamInfo from '../components/TimeTable_Components/ExamInformation';
import {NavbarComponent} from '../components/NavbarSupervisor';
import '../components/DutiesPage_Components/styles/timetablePage.css'

const TimeTableDuties=(props)=>{
    const [Currentdate,setCurrentdate]=useState(null)
    const [ data, setData] = useState([])
    const [userId,setUserID]=useState("")
    if(props &&userId=="")
    {
        setUserID(props.location.state.userID)
    }

    let ManDp=`https://randomuser.me/api/portraits/men/${Math.floor((Math.random() * 50) + 1)}.jpg`;
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
            if(userId!="")
            {
                try {
                    let body={"uid":userId}
                    const data = await axios.post('/schedule',body)
                    setData(data.data.data);
                } catch (error) {
                    console.log(error)
                }
            }
           
            
        })()
    }, [])
    return(
        <>
            <NavbarComponent/>

            <div className="CalendarPage">
                    <div className="UserProfile">
                        <div className="dp">
                            <img src={ManDp} alt=""/>
                        </div>
                        <div className="Detail">
                                <p>{props.location.state.username.slice(0,1).toUpperCase()+props.location.state.username.slice(1)}</p>
                        </div>
                    </div>
                <CalendarComponent examData={data} setCurrentdate={setCurrentdate} returnDate={returnDate}/>
                <ExamInfo examData={data} examData={data} Currentdate={Currentdate} returnDate={returnDate} />
                
            </div>
        </>
    )
}
const mapStateToProps = state => {

    const props = {
    isAuth: state.auth.isAuth,
    user: state.auth.user
    }
    return props
};

export default connect(mapStateToProps, null)(TimeTableDuties);

// export default TimeTable;