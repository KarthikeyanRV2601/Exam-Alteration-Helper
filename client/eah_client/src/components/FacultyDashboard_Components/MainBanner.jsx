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
                            Request exchange
                    </a>
                </div>
                <div className="ButtonElement">
                    <img src={CalendarIcon} />
                    <a href="/timetable" id="timetableBtn">
                            Time table
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
                        <div className="Upcoming Section">
                            <h2>Upcoming duty details</h2>
                            <div className="Links">
                               {
                                
                               dutyLinks.map(link=>{
                                   let date=new Date(new Date(link.date).getTime()-19800000);
                                   let DutyText=`Exam scheduled on ${returnDate(date)}  at block ${link.block} , class room ${link.class_room}`
                                    return (
                                        
                                        <Link linkText={DutyText}/>
                                    )
                                })}
                            </div>
                        </div>
                        {/* <div className="DeptSec Section">
                        <h2>Department secretary requests</h2>
                            <div className="Links">
                                {requestLinks.map(link=>{
                                    return (
                                        <Link linkText={link}/>
                                    )
                                })}
                            </div>
                        </div> */}
                    </div>
            </div>
        </div>
    )
}