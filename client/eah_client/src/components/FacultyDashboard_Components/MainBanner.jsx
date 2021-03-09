import React, { useState } from 'react';
import {Link} from './MainBannerComponents/Link';
import RequestIcon from './media/request.svg';
import CalendarIcon from './media/calendar.svg';
import ExchangeIcon from './media/question.svg';

export const MainBanner=({dutyLinks,requestLinks})=>{
    return(
        <div className="MainBanner">

            <div className="Details">
                <h1>Details</h1>
                <div className="ButtonSection">
                <div className="ButtonElement">
                    <img src={RequestIcon} />
                    <button>
                            Request exchange
                    </button>
                </div>
                <div className="ButtonElement">
                    <img src={CalendarIcon} />
                    <button>
                            Personal timetable
                    </button>
                </div>
                <div className="ButtonElement">
                    <img src={ExchangeIcon} />
                    <button>
                            Available requests
                    </button>
                </div>
                </div>  
            </div>
            <div className="QuickLinks">
                    <h1>Quick links</h1>
                    <div className="Sections">
                        <div className="Upcoming Section">
                            <h2>Upcoming duty details</h2>
                            <div className="Links">
                               {dutyLinks.map(link=>{
                                    return (
                                        <Link linkText={link}/>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="DeptSec Section">
                        <h2>Department secretary requests</h2>
                            <div className="Links">
                                {requestLinks.map(link=>{
                                    return (
                                        <Link linkText={link}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}