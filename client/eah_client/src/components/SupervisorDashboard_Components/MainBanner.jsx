import React, { useState } from 'react';
import {Link} from './MainBannerComponents/Link';
import RequestIcon from './media/request.svg';
import CalendarIcon from './media/calendar.svg';
import ExchangeIcon from './media/question.svg';

export const MainBanner=()=>{
    // console.log(dutyLinks);

    return(
        <div className="MainBanner">

            <div className="Details">
                <h1>Details</h1>
                <div className="ButtonSection">
                <a className="ButtonElement" href="/duties-page" id="DutiesPage">
                    <img src={RequestIcon} />
                    Faculty schedules
                    
                </a>
                <a className="ButtonElement" href="/exam-schedule" id="scheduleInvigilations">
                    <img src={CalendarIcon} />
                    Schedule invigilations
                    
                </a>
                <a className="ButtonElement" href="/user-registrations" id="UserRegistrations">
                    <img src={ExchangeIcon}  id="availablerequestsBtn"/>
                    
                    User registrations
                    
                </a>
                </div>  
            </div>
            
        </div>
    )
}