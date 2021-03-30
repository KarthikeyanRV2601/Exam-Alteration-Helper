import React, { useState,useEffect,useRef }  from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/calendar.css';




const ExamInfo=({Currentdate,examData,returnDate})=>{
    var statusFlag=0;

    var [CurrentData,setCurrentData]=useState(null);
    var [showConfirmation,setShowConfirmation]=useState(false);
    var [exchangeStatus,setExchangeStatus]=useState("Request exchange");
    var requestButtonRef = useRef();

    useEffect(() => {
        
        for(let i=0;i<examData.length;++i)
        {   
            let data=examData[i];
            if(returnDate(new Date(data.date))==Currentdate){
                setCurrentData(data);
                break;
            }
            else{
                setCurrentData(null)
            }
        }

    }, [Currentdate])
    
    var makeRequestPending=(e)=>{
        setExchangeStatus("Request pending");
        statusFlag=1;
        //set flag here
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
                        <p>{new Date(CurrentData.date).getHours()+":"+new Date(CurrentData.date).getMinutes()+" hr"}</p>
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
                <button className={statusFlag==0?"exchangeRequest":statusFlag==1?"pendingStatus":statusFlag==2?"approvedStatus":null} onClick={()=>{setShowConfirmation(true)}} ref={requestButtonRef}>
                        {exchangeStatus}
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