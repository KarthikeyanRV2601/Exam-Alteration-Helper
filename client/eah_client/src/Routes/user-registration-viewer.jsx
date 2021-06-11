import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import UserRegistrations from '../components/UserRegistrationsPage_Components/user-registrations';
import {NavbarComponent} from '../components/NavbarSupervisor';

const User_registration_page=()=>{
    return(
        <>
            <NavbarComponent/>
            <UserRegistrations/>
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

export default connect(mapStateToProps, null)(User_registration_page);
