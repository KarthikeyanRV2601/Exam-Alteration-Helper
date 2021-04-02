import React  from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/calendar.css';

const CalendarComponent=({setCurrentdate,examData,returnDate})=>{

    var calendarChange=(e)=>{
        setCurrentdate(returnDate(e))
        return
    }
    
    var tileClassName=({date})=>{

        for(let i=0;i<examData.length;++i)
        {   
            let data=examData[i];
            let DataDate=new Date(data.date);
            if(returnDate(DataDate)==returnDate(date))
            {
                return "StartDate"
            }

        }
       
        return ""
        
    }   
    return(
        <div className="ActualCalendarcontainer">
            <Calendar
                onChange={e => calendarChange(e)}
                tileClassName={tileClassName}
            />

        </div>
    )
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(CalendarComponent)