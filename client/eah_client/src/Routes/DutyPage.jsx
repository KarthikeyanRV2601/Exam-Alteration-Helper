import React, { useRef, useState,useEffect } from 'react';
import DutiesPage from '../components/DutiesPage_Components/DutiesPage';
import {NavbarComponent} from '../components/NavbarSupervisor';



export const DutyPage=({})=>{
    return (
        <>
            <NavbarComponent/>
            <DutiesPage/>
        </>
    )}
