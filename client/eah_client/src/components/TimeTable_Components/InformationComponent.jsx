import React, { useState }  from 'react';
import { connect } from 'react-redux';
import './styles/calendar.css';
// import back from './media/icons/back.svg';



const InformationComponent=()=>{

    var ExamDetails=[
      {
        Name:"exam1",
        Description:"this is a exam1"
        }
    
    ]

    // const [ExamNumber,setExamNumber]=useState(0);

    return(
        <div className="InformationContainer" >
            <h2>List of exams on 26-01-2021</h2>
            <div className="Wrapper">
                  <div className="SwitchLeft">
                      {/* <img src={back} onClick={e=>setExamNumber(ExamNumber-1)}/> */}
                  </div>
                  {/* {displayData.thumbnail?<img className="Thumbail" src={displayData.thumbnail}/>:null} */}
                  <div className="SwitchRight">
                      {/* <img src={back} onClick={e=>setExamNumber(ExamNumber+1)}/> */}
                  </div>
            </div>
            <div className='ExamList'>
            {ExamDetails.map(ExamDetail=>{
                return(
                    <div className="Exam">
                        <h2>{ExamDetail.Name}</h2>
                        <div className='Description'>{ExamDetail.Description}</div>
                    </div>
                    
                )
            })}
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(InformationComponent)