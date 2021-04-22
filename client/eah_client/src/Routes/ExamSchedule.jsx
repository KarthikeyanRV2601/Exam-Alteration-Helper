import React, { useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
const ExamSchedule=({ isAuth })=>{
  var [State,setstate]=useState({
    cols: null,
    rows: null
  })
  var fileHandler = (event) => {
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{setstate({
          cols: resp.cols,
          rows: resp.rows
        });
      }
    });               

  }
    return(
      <>
        <div className="ExamSchedule">
            <input type="file" onChange={e=>fileHandler(e)}></input>
        </div>  
        <OutTable data={State.rows} columns={State.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
      </>
    )

}

ExamSchedule.propTypes = {
  isAuth: PropTypes.bool,
  user: PropTypes.object,
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  user: state.auth.user
});

export default connect(mapStateToProps, null)(ExamSchedule)
