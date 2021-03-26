import React, { useState, useEffect }  from 'react';
import CalendarComponent from '../components/TimeTable_Components/CalendarComponent';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import InformationComponent from '../components/TimeTable_Components/InformationComponent';
import ExamInfo from '../components/TimeTable_Components/ExamInformation';
const TimeTable=()=>{

    const [Currentdate,setCurrentdate]=useState(null)

    const [ data, setData] = useState([])

    useEffect(() => {
        (async () => 
        {
            try {
                const data = await axios.get('/schedule')
                console.log(data.data.user.data)
                setData(data.data.user.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return(
        <div className="CalendarPage">
            <CalendarComponent examData={data} setCurrentdate={setCurrentdate}/>
            <ExamInfo examData={data} Currentdate={Currentdate}/>
        </div>
    )
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(TimeTable);