import React  from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/calendar.css';
import { CSVLink, CSVDownload } from "react-csv";

const CalendarComponent=({setCurrentdate,examData,returnDate})=>{

    var headers = [
        { label: "Exam name", key: "exam_name" },
        { label: "Date and time", key: "date" },
        { label: "Duration", key: "duration" },
        {label:  "Class room",key:"class_room"},
        {label:  "Block",key:"block"},
        {label:  "Request status",key:"request_status"}
      ];
    var calendarChange=(e)=>{
        setCurrentdate(returnDate(e))
        return
    }
    var tileClassName=({date})=>{

        for(let i=0;i<examData.length;++i)
        {   
            let data=examData[i];
            let DataDate=new Date(new Date(data.date).getTime()-19800000);
            if(returnDate(DataDate)==returnDate(date))
            {
                return "StartDate"
            }

        }
       
        return ""
        
    }   
    return(
        <div className="ActualCalendarcontainer">
          
            <Calendar
                onChange={e => calendarChange(e)}
                tileClassName={tileClassName}
            />
            <CSVLink data={examData} headers={headers} filename={"my-timetable.csv"}  className="DownloadButton">
            Download timetable
            </CSVLink>
        </div>
    )
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(CalendarComponent)