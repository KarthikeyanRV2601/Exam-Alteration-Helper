import FacultyDashboard from './FacultyDashboard';
import SupervisorDashboard from './secretaryDashboard';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const Dashboard=({ user })=>{
    if(user)
    {
        if(user.account_status!="approved" && user.posting!="supervisor")
        {
            return <Redirect to='/not-approved'/>
        }
    }
    return(
        <>
            {
                user&&user.posting=="faculty"&&<FacultyDashboard/>
            }
            {
                user&&user.posting=="supervisor"&&<SupervisorDashboard/>
            }
        </>
    )
}

Dashboard.propTypes = {
    isAuth: PropTypes.bool,
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(Dashboard)