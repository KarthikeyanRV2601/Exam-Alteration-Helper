import React  from 'react';
import CalendarComponent from '../components/TimeTable_Components/CalendarComponent';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InformationComponent from '../components/TimeTable_Components/InformationComponent';
const TimeTable=()=>{
    return(
        <div className="CalendarPage">
            <CalendarComponent/>
            <InformationComponent/>
        </div>
        
    )
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(TimeTable);