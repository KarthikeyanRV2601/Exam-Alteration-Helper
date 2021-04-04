import React, { useRef, useState,useEffect } from 'react';
import './styles/profileSettings.css'; 
import cancelIcon from './styles/media/cancel.svg';
import IllustrationContainer from './Illustro';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const ProfileSettingsComponent=({user})=>{
    var [Overlay,setOverlay]=useState(false);
    var FormData=useRef(null);
    var passwordConfirm=useRef(null);
    // console.log(user);
    let UpdatedData={
        u_name:null,
        email:null,
        posting:null,
        department:null
    }
    var setpopup=()=>{
        setOverlay(false)
    }
    var HandleChange=()=>{
        UpdatedData.u_name=FormData.current[0].value;
        UpdatedData.email=FormData.current[1].value;
        UpdatedData.posting=FormData.current[2].value;
        UpdatedData.department=FormData.current[3].value;
        let User_given_password=passwordConfirm.current.value;
        console.log(User_given_password);
        //api post request here for userdata 
        setpopup(false);
    }

    return(

        <div className="ProfileSettings">
            <div className="FormWrap">
                
                <form className="ProfileForm" ref={FormData}>
              
                
              {<div className="input-field">
                  <input 
                      type="text" 
                      id="username"
                      name="username"
                      placeholder={user.user_name}
                      required />
                  <label htmlFor="username">username</label>
              </div>}
              {<div className="input-field">
                  <input 
                      type="text" 
                      id="email"
                      name="email"
                      placeholder={user.email}
                      required />
                  <label htmlFor="email">email</label>
              </div>}
              {false&&<div className="input-field">
                  <input 
                      type="text" 
                      id="password"
                      name="password"

                      required />
                  <label htmlFor="password">new password</label>
              </div>}
              {<div className="input-field">
                  <input 
                      type="text" 
                      id="posting"
                      name="posting"
                      placeholder={user.posting}
                      required />
                  <label htmlFor="posting">posting</label>
              </div>}
              {<div className="input-field">
                  <input 
                      type="text" 
                      id="department"
                      name="department"
                      required 
                      placeholder={user.department}/>
                  <label htmlFor="department">department</label>
              </div>}
        

      </form>
                <button onClick={e=>setOverlay(true)}>Update profile</button>
            </div>
            
            {Overlay&&<div className="ConfirmationOverlay">
                
                <div className="container">
                <img className='closeButton' src={cancelIcon} onClick={e=>setpopup(false)}/>
                    <h2>Enter your current password</h2>

                    <div className="input-field">
                        <input 
                            type="password" 
                            id="passwordConfirm"
                            name="passwordConfirm"  
                            required ref={passwordConfirm}/>
                        <label htmlFor="passwordConfirm">password</label>
                    </div>
                    <button onClick={e=>HandleChange(e)}>Confirm password</button>

                </div>
            </div>
            }
            <IllustrationContainer/>
        </div>
        
    )
}



ProfileSettingsComponent.propTypes = {
    login: PropTypes.func.isRequired,
    isAuth: PropTypes.bool,
    user: PropTypes.object,
  };

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(ProfileSettingsComponent);
