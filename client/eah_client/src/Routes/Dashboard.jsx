import FacultyDashboard from './FacultyDashboard';
import SupervisorDashboard from './secretaryDashboard';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const Dashboard=({ isAuth, user })=>{

    return(
        <>
            {
                user.posting=="faculty"&&<FacultyDashboard/>
            }
            {
                user.posting=="supervisor"&&<SupervisorDashboard/>
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