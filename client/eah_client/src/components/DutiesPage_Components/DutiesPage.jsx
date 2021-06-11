import React, { useRef, useState,useEffect } from 'react';
import './styles/styles.css';
import ManDP from './media/man.svg';
import searchIcon from './media/search.svg';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const DutiesPage=({user})=>{
    const [usersDataTemp,setusersDataTemp]=useState([]);
    const [usersData,setusersData]=useState([]);
    const [SearchValue,setSearchValue]=useState("");
    const [isRedirect,setisRedirect]=useState({})
    useEffect(async () => {
        let res1=await axios.get('/users/all');
        setusersData(res1.data.data);
        setusersDataTemp(res1.data.data)
    }, [])

    useEffect(async () => {
        setusersDataTemp(usersData.filter((user)=>user.user_name.indexOf(SearchValue)==0))
    }, [SearchValue])

    if(Object.keys(isRedirect).length != 0)
    {
            return(
                <Redirect to={isRedirect}/>
            )
    }
    var handleProfileClick=(userdata)=>{
        let UserTimetable={
            pathname: "/timetable-duties",
            state: { userID: userdata.userID,username:userdata.user_name}
          }
        setisRedirect(UserTimetable)
        
    }
    

    var HandleChange=(e)=>{
        setSearchValue(e.target.value)
        
    }
    return (
        <>
            <div className="DutiesPage">
                <div className="SearchBarWrap">
                    <input className="Searchbar" onChange={e=>HandleChange(e)} value={SearchValue} placeholder="start typing for user name here">

                    </input>
                    <img className="SearchButton" src={searchIcon}>

                    </img>
                </div>
                <div className="SearchResult">
                    {
                        usersDataTemp&&usersDataTemp.map((userdata,key)=>{
                            return(
                                <div className="Profile" onClick={e=>handleProfileClick(userdata)} >
                                    <div className="Text">
                                        {userdata.user_name}
                                    </div>
                                    <img src={`https://randomuser.me/api/portraits/men/${userdata.user_name.length+ userdata.user_name.charCodeAt(0) - 65}.jpg`} alt="" className="DP"/>
                                </div>
                            )

                        })
                    }
                    

                    
                </div>
            </div>
        </>
    )
}




DutiesPage.propTypes = {
    isAuth: PropTypes.bool,
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});


export default connect(mapStateToProps, null)(DutiesPage)