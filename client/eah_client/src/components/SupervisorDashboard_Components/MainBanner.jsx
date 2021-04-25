import React, { useState } from 'react';
import {Link} from './MainBannerComponents/Link';
import RequestIcon from './media/request.svg';
import CalendarIcon from './media/calendar.svg';
import ExchangeIcon from './media/question.svg';

export const MainBanner=({dutyLinks,requestLinks,returnDate})=>{
    // console.log(dutyLinks);
    dutyLinks.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
    });
    return(
        <div className="MainBanner">

            <div className="Details">
                <h1>Details</h1>
                <div className="ButtonSection">
                <div className="ButtonElement">
                    <img src={RequestIcon} />
                    <a href="/duties-page" id="dutiespageBtn">
                    Faculty registrations
                    </a>
                </div>
                <div className="ButtonElement">
                    <img src={CalendarIcon} />
                    <a href="/timetable" id="timetableBtn">
                    Schedule exams
                    </a>
                </div>
                <div className="ButtonElement">
                    <img src={ExchangeIcon}  id="availablerequestsBtn"/>
                    <a>
                            Available requests
                    </a>
                </div>
                </div>  
            </div>
            <div className="QuickLinks">
                    <h1>Quick links</h1>
                    <div className="Sections">
                       <div className="QuickButtons">
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}