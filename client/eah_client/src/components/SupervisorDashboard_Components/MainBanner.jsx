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
                <div className="ButtonElement">
                    <img src={RequestIcon} />
                    <a href="/duties-page" id="dutiespageBtn">
                        Faculty schedules
                    </a>
                </div>
                <div className="ButtonElement">
                    <img src={CalendarIcon} />
                    <a href="/exam-schedule" id="timetableBtn">
                        Schedule invigilations
                    </a>
                </div>
                <div className="ButtonElement">
                    <img src={ExchangeIcon}  id="availablerequestsBtn"/>
                    <a href="/user-registrations">
                        User registrations
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