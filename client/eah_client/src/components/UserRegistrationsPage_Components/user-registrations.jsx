import React, { useRef, useState,useEffect } from 'react';
import './styles/styles.css';
import ManDP from './media/man.svg';
import Cancel from './media/cancel.svg';
import searchIcon from './media/search.svg';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const UserRegistrations=({user})=>{
    const [usersDataTemp,setusersDataTemp]=useState([]);
    const [usersData,setusersData]=useState([]);
    const [SearchValue,setSearchValue]=useState("");
    const [isRedirect,setisRedirect]=useState({})
    const [showPopup,setshowPopup]=useState(false);
    const [popupData,setpopupData]=useState({
        name:"",
        department:"",
        posting:""
    });
    useEffect(async () => {
        let res1=await axios.get('/schedule/pending_account');
        setusersData(res1.data.data);
        setusersDataTemp(res1.data.data)
        console.log(res1.data.data)
    }, [])

    useEffect(async () => {
        setusersDataTemp(usersData.filter((user)=>user.user_name.indexOf(SearchValue)==0))
    }, [SearchValue])


    var setAllowance=async (e,userdata,flag)=>
    {
        if(flag==1)
        {
            // console.log(userdata)
            let body={
                user_name:userdata.user_name,
                status:"approved"
            }
            let res=await axios.post('/schedule/change_account_status',body);
        }
        else{
            let body={
                user_name:userdata.user_name,
                status:"rejected"
            }
            let res=await axios.post('/schedule/change_account_status',body);
        }
        setusersDataTemp(usersDataTemp.filter(function(ele){ 
            return ele.user_name != userdata.user_name; 
        }));
    }
    
    var handleClick=(userdata)=>{
        setpopupData({name:userdata.user_name,department:userdata.department,posting:userdata.posting})
        setshowPopup(true);
    }
    var HandleChange=(e)=>{
        setSearchValue(e.target.value)
        
    }
    return (
        <>
            <div className="RegistrationsPage">
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
                                <div className="Profile" onClick={e=>handleClick(userdata)}>
                                        <img src={`https://randomuser.me/api/portraits/men/${Math.floor((Math.random() * 50) + 1)}.jpg`} alt="" className="DP"/>
                                        <div className="Text">
                                            {userdata.user_name}
                                        </div>
                                        <div className="Buttons">
                                            <button className="Button Allow" onClick={e=>setAllowance(e,userdata,1)}>
                                                Allow
                                            </button>
                                            <button className="Button Deny" onClick={e=>setAllowance(e,userdata,0)}>
                                                Deny
                                            </button>
                                            
                                            
                                        </div>

                                </div>
                            )

                        })
                    }
                    

                    
                </div>
            </div>
                
            {
             showPopup &&
             <div className="Overlay">
                <div className="Content">
                    <img className="cancel" src={Cancel} onClick={e=>setshowPopup(false)}/>
                    <img src={ManDP} alt="" className="dp" />

                    <div className="Name field">
                        <div className="Label">
                            Name
                        </div>
                        <div className="Text">
                            {popupData.name}
                        </div>
                    </div>
                    <div className="Posting field">
                        <div className="Label">
                            Posting
                        </div>
                        <div className="Text">
                            {popupData.posting}
                        </div>
                    </div>
                    <div className="Name field">
                        <div className="Label">
                            Department
                        </div>
                        <div className="Text">
                            {popupData.department}
                        </div>
                    </div>
                   
                
                
                </div>
                
            </div>
                }
        </>
    )
}




UserRegistrations.propTypes = {
    isAuth: PropTypes.bool,
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});


export default connect(mapStateToProps, null)(UserRegistrations)