import React, { useState } from 'react';
import ProfileSettingsComponent from '../components/ProfileSettings_Components/ProfileSettings';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {NavbarComponent} from '../components/Navbar';

const ProfileSettings=()=>{

    return(
        <>
            <NavbarComponent/>
            <ProfileSettingsComponent/>
          
        </>
    )

}



ProfileSettings.propTypes = {
    isAuth: PropTypes.bool,
    user: PropTypes.object,
  };

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(ProfileSettings);
