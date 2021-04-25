import React, { useState } from 'react';

export const TopBanner=({invigilationsScheduled,Dutyhours,exchanges})=>{
    return(
        <div className="TopBanner">
            <h1>Exam duties</h1>
            <div className="Details">
                <div className="Detail">
                    <p className="Value">
                        {invigilationsScheduled}
                    </p>
                    <p className="Label">
                    Pending registrations
                    </p>
                </div>
                <div className="Detail">
                    <div className="MidDetail">
                    {Dutyhours}
                    </div>
                    <p className="Label">
                        Duty hours
                    </p>
                </div>
                <div className="Detail">
                    <p className="Value">{exchanges}</p>
                    <p className="Label">Exams scheduled</p>
                </div>
            </div>
        </div>
    )
}