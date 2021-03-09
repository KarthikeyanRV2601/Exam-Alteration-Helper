import React, { useState } from 'react';



export const Notification=({notification})=>{
    return(
        <div className="Notification">
            <div className="Text">
                    <span className="bullet">

                    </span>
                    <a href="#">{notification}</a>
            </div>
            <div className="Line">
            </div>
        </div>
    )
}