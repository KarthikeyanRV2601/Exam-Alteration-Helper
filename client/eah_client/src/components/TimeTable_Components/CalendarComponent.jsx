import React  from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/calendar.css';

const CalendarComponent=()=>{

    var calendarChange=()=>{
        return
    }
    

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