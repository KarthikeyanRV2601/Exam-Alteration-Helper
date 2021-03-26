import React, { useState,useEffect }  from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/calendar.css';




const ExamInfo=({Currentdate,examData})=>{
    
    var returnDate=(e)=>{
        var dd=e.getDate();
        var mm=e.getMonth()+1;
        var yyyy=e.getFullYear();
        if(dd<10) 
        {   
            dd='0'+dd;
        } 
        if(mm<10) 
        {
            mm='0'+mm;
        } 
        var date = dd+ "-" + mm + "-" + yyyy;

        return date
    }
    var [CurrentData,setCurrentData]=useState(null)
    useEffect(() => {
        
        for(let i=0;i<examData.length;++i)
        {   
            let data=examData[i];
            if(returnDate(new Date(data.date))==Currentdate){
                setCurrentData(data);
                console.log("found");
                break;
            }
            else{
                setCurrentData(null)
                console.log(returnDate(new Date(data.date)),"not found")
            }
        }

    }, [Currentdate])
   


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
                        <p>{CurrentData.slot}</p>
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
            </div>
        }
        {
            !CurrentData &&
            <div className="ExamInfo">
                <h1>{Currentdate}</h1>
                <h2>No exam scheduled on this day</h2>
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