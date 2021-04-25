import React, { useState } from 'react';
import clock from '../media/clock.svg'

export const Link=({linkText})=>{
    return(
        <div className="Link">
            <img src={clock} alt=""/>
            <a href="">{linkText}</a>
        </div>
    )
}

