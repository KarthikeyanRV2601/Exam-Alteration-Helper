import React, { useState ,useRef} from 'react';
import ManDP from './media/man.svg';
import settingsIcon from './media/settings.svg';

import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UserDetail=({userName,userType,userDepartment, user})=>{

    const animateRef = useRef(null);

    var signout=(e)=>{
        localStorage.removeItem("token");
        animateRef.current.classList.remove("AnimateMenu");
        window.location.reload();
    }


    var Show_Hide_menu=(e)=>{
        if(animateRef.current.classList.contains("AnimateMenu"))
            animateRef.current.classList.remove("AnimateMenu")
        else
            animateRef.current.classList.add("AnimateMenu")  
    }

    if(user)
    {
        console.log(user)
    }

    return(
        <div className="UserDetail">
           <img src={ManDP} className="ProfileDp" alt=""/>
           <div className="Details">
               <h2>{user ? user.user_name : ""}</h2>
               <div className="Label">
                   {userType}
               </div>
               <p>{userDepartment}</p>
               
           </div>
           <img id="SettingsIcon" src={settingsIcon} onClick={e=>Show_Hide_menu(e)}/>

           <div className="Menu" ref={animateRef}>
               <div className="Option" id="Signout" onClick={e=>signout(e)}>Sign out</div>
               <div className="Option" id="Profilesettings">Profile settings</div>
           </div>
        </div>
    )
}

UserDetail.propTypes = {
    isAuth: PropTypes.bool,
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(UserDetail)