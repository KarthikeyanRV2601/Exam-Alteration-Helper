import React, { useState,useEffect,useRef }  from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/calendar.css';
import axios from 'axios';



const ExamInfo=({Currentdate,examData,returnDate})=>{
    var [CurrentData,setCurrentData]=useState(null);
    var [showConfirmation,setShowConfirmation]=useState(false);
    var requestButtonRef = useRef();

    useEffect(() => {
        if(!Currentdate)
        {
            Currentdate=returnDate(new Date())
        }
        for(let i=0;i<examData.length;++i)
        {   
            let data=examData[i];
            let Datadate=new Date(data.date);
            if(returnDate(Datadate)==Currentdate){
                setCurrentData(data);
                break;
            }
            else{
                setCurrentData(null)
            }
        }

    }, [Currentdate])

    
    var ButtonInnerText="loading";
    var makeRequestPending=(e)=>{
        setShowConfirmation(false);
        let body = {
            schedule_id: CurrentData.id,
            status: "pending"
        }
        try {
            const res = axios.post('/schedule/status', body);
            CurrentData.request_status="pending";
        } catch (error) {
            console.log(error);
        }
        
        //set flag here

    }
    var returnClassName=()=>{
        var statusFlag=CurrentData.request_status;

        if(!statusFlag||statusFlag=="none")
        {
        
        ButtonInnerText="Request exchange";
        return "exchangeRequest";
        }
        else if (statusFlag=="pending")
        {
        ButtonInnerText="Request pending";
        return "pendingStatus";
        }
        else if (statusFlag=="alloted")
        {
        ButtonInnerText="Request exchange";
        return "approvedStatus";

    }
    }
    return(
        <>
        { CurrentData && 
            <div className="ExamInfo">
                <div className="ExamName">
                    <h1>Exam</h1>
                    <h2>{CurrentData.exam_name +" "+ Currentdate}</h2>
                </div>
                
                <div className="Information">
                    <div className="Info">
                        <p>Duration</p>
                        <p>{CurrentData.duration}</p>
                    </div>
                    <div className="Info">
                        <p>Slot</p>
                        <p>{new Date(new Date(CurrentData.date).getTime()-19800000).getHours()+":"+new Date(new Date(CurrentData.date).getTime()-19800000).getMinutes()+" hr"}</p>
                    </div>
                    <div className="Info">
                        <p>Block</p>
                        <p>{CurrentData.block}</p>
                    </div>
                    <div className="Info">
                        <p>Room</p>
                        <p>{CurrentData.class_room}</p>
                    </div>  
                   
                </div>
                <button className={returnClassName()} onClick={()=>{setShowConfirmation(true)}} ref={requestButtonRef}>
                        {ButtonInnerText}
                </button>
                
            </div>
        }
        {
            !CurrentData &&
            <div className="ExamInfo">
                <h1>{Currentdate}</h1>
                <h2>No exam scheduled on this day</h2>
            </div>
        }
        
        {
            showConfirmation && <div className="ExchangeConfirmation">
            <div className="container">
                <h2>Are you sure you want to request for exchange</h2>
                <div className="Buttons">
                    <button onClick={(e)=>makeRequestPending(e)}>
                        Yes
                    </button>
                    <button onClick={()=>{setShowConfirmation(false)}}>
                        No
                    </button>
                </div>

            </div>
        </div>
        }
        </>
    )
}



const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(ExamInfo)