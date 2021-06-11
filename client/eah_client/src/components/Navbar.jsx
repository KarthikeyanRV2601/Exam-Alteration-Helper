import React, { useRef } from 'react';
import '../components/styles/navbar.css';
import DashboardIcon from './styles/media/dashboard.svg';
import CalendarIcon from './styles/media/calendar.svg';
import SignoutIcon from './styles/media/signout.svg';

export const NavbarComponent=()=>{
    const animateRef=useRef(null);
    
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
    
    return(
        <header className="navBar">
            <div className="wrapNavBar">
                <div className="LeftDiv">
                    <div className="Link">
                        <img src={DashboardIcon}/>
                    <a href='/'>Dashboard</a>
                    </div>
                    <div className="Link">
                        <img src={CalendarIcon}/>
                        <a href="#">Time Table</a>
                    </div>
                </div>

                <div className="RightDiv" >
                    <div className="Link">
                        <img src={SignoutIcon}/>
                        <a onClick={e=>Show_Hide_menu(e)} id="profileIcon">Profile</a> 
                    </div>
                    
                </div>
                <div className="Menu" ref={animateRef}>
                    <div className="Option" id="Signout" onClick={e=>signout(e)}>Sign out</div>
                    <a className="Option" id="Profilesettings" href="/profile-settings">Edit profile</a>
                </div>

            </div>
        </header>
    )
}


