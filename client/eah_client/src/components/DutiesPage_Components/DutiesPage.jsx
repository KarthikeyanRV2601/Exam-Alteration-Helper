import React, { useRef, useState,useEffect } from 'react';
import '../DutiesPage_Components/styles/styles.css';
import ManDP from './media/man.svg';
import searchIcon from './media/search.svg';
import axios from 'axios';
export const DutiesPage=()=>{
    const [usersDataTemp,setusersDataTemp]=useState([]);
    const [usersData,setusersData]=useState([]);
    const [SearchValue,setSearchValue]=useState("");
    useEffect(async () => {
        let res1=await axios.get('/users/all');
        setusersData(res1.data.data);
        setusersDataTemp(res1.data.data)
    }, [])
    
    useEffect(async () => {
        setusersDataTemp(usersData.filter((user)=>user.user_name.indexOf(SearchValue)==0))
    }, [SearchValue])

    
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
                                <div className="Profile">
                                    <div className="Text">
                                        {userdata.user_name}
                                    </div>
                                    <img src={`https://randomuser.me/api/portraits/men/${Math.floor((Math.random() * 50) + 1)}.jpg`} alt="" className="DP"/>
                                </div>
                            )

                        })
                    }
                    

                    
                </div>
            </div>
        </>
    )
}
