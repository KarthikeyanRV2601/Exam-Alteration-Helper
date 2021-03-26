import React  from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/calendar.css';

const CalendarComponent=({setCurrentdate})=>{
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
    var calendarChange=(e)=>{
        setCurrentdate(returnDate(e))
        return
    }
    
    setCurrentdate(returnDate(new Date()))

    return(
        <div className="ActualCalendarcontainer">
            <Calendar
                onChange={e => calendarChange(e)}
            />

        </div>
    )
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(CalendarComponent)