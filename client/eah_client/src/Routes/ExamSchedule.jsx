import React, { useState,useEffect} from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ExamSchedule=({ isAuth })=>{


    return(
      <div className="ExamSchedule">
          <div className="LeftContainer">
            
          </div>
          <div className="RightContainer">

          </div>
      </div>  
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
