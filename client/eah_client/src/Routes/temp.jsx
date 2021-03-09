import React, { useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../components/ExamSchedule_Components/styles/style.css';

const Temp =({ isAuth, user })=>{

  return (
        <>
          <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    /*\n    DEMO STYLE\n*/\n\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\nbody {\n    font-family: 'Poppins', sans-serif;\n    background: #fafafa;\n}\n\np {\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.1em;\n    font-weight: 300;\n    line-height: 1.7em;\n    color: #999;\n}\n\na,\na:hover,\na:focus {\n    color: inherit;\n    text-decoration: none;\n    transition: all 0.3s;\n}\n\n.navbar {\n    padding: 15px 10px;\n    background: #fff;\n    border: none;\n    border-radius: 0;\n    margin-bottom: 40px;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.navbar-btn {\n    box-shadow: none;\n    outline: none !important;\n    border: none;\n}\n\n.line {\n    width: 100%;\n    height: 1px;\n    border-bottom: 1px dashed #ddd;\n    margin: 40px 0;\n}\n\ni,\nspan {\n    display: inline-block;\n}\n\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n\n.wrapper {\n    display: flex;\n    align-items: stretch;\n}\n\n#sidebar {\n    min-width: 250px;\n    max-width: 250px;\n    background: #f0f0f3;\n    color: rgb(17, 0, 0);\n    transition: all 0.3s;\n}\n\n#sidebar.active {\n    min-width: 80px;\n    max-width: 80px;\n    text-align: center;\n}\n\n#sidebar.active .sidebar-header h3,\n#sidebar.active .CTAs {\n    display: none;\n}\n\n#sidebar.active .sidebar-header strong {\n    display: block;\n}\n\n#sidebar ul li a {\n    text-align: left;\n}\n\n#sidebar.active ul li a {\n    padding: 20px 10px;\n    text-align: center;\n    font-size: 0.85em;\n}\n\n#sidebar.active ul li a i {\n    margin-right: 0;\n    display: block;\n    font-size: 1.8em;\n    margin-bottom: 5px;\n}\n\n#sidebar.active ul ul a {\n    padding: 10px !important;\n}\n\n#sidebar.active .dropdown-toggle::after {\n    top: auto;\n    bottom: 10px;\n    right: 50%;\n    -webkit-transform: translateX(50%);\n    -ms-transform: translateX(50%);\n    transform: translateX(50%);\n}\n\n#sidebar .sidebar-header {\n    padding: 20px;\n    background: #73c2fb;\n}\n\n#sidebar .sidebar-header strong {\n    display: none;\n    font-size: 1.8em;\n}\n\n#sidebar ul.components {\n    padding: 20px 0;\n    border-bottom: 1px solid #47748b;\n}\n\n#sidebar ul li a {\n    padding: 10px;\n    font-size: 1.1em;\n    display: block;\n}\n\n#sidebar ul li a:hover {\n    color: #1ae28f;\n    background: #fff;\n}\n\n#sidebar ul li a i {\n    margin-right: 10px;\n}\n\n#sidebar ul li.active>a,\na[aria-expanded=\"true\"] {\n    color: #fff;\n    background: #6d7fcc;\n}\n\na[data-toggle=\"collapse\"] {\n    position: relative;\n}\n\n.dropdown-toggle::after {\n    display: block;\n    position: absolute;\n    top: 50%;\n    right: 20px;\n    transform: translateY(-50%);\n}\n\nul ul a {\n    font-size: 0.9em !important;\n    padding-left: 30px !important;\n    background: #6d7fcc;\n}\n\nul.CTAs {\n    padding: 20px;\n}\n\nul.CTAs a {\n    text-align: center;\n    font-size: 0.9em !important;\n    display: block;\n    border-radius: 5px;\n    margin-bottom: 5px;\n}\n\na.download {\n    background: #fff;\n    color: #7386D5;\n}\n\na.article,\na.article:hover {\n    background: #6d7fcc !important;\n    color: #fff !important;\n}\n\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n\n#content {\n    width: 100%;\n    padding: 20px;\n    min-height: 100vh;\n    transition: all 0.3s;\n}\n\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n\n@media (max-width: 768px) {\n    #sidebar {\n        min-width: 80px;\n        max-width: 80px;\n        text-align: center;\n        margin-left: -80px !important;\n    }\n    .dropdown-toggle::after {\n        top: auto;\n        bottom: 10px;\n        right: 50%;\n        -webkit-transform: translateX(50%);\n        -ms-transform: translateX(50%);\n        transform: translateX(50%);\n    }\n    #sidebar.active {\n        margin-left: 0 !important;\n    }\n    #sidebar .sidebar-header h3,\n    #sidebar .CTAs {\n        display: none;\n    }\n    #sidebar .sidebar-header strong {\n        display: block;\n    }\n    #sidebar ul li a {\n        padding: 20px 10px;\n    }\n    #sidebar ul li a span {\n        font-size: 0.85em;\n    }\n    #sidebar ul li a i {\n        margin-right: 0;\n        display: block;\n    }\n    #sidebar ul ul a {\n        padding: 10px !important;\n    }\n    #sidebar ul li a i {\n        font-size: 1.3em;\n    }\n    #sidebar {\n        margin-left: 0;\n    }\n    #sidebarCollapse span {\n        display: none;\n    }\n\n    body { padding-top: 70px; background-color: #d7e6e4 !important;}\n    .jumbotron {\n      color: white;\n      background: #ecf0f1;\n\n    }\n    .navbar-light {\n      background: #2c3e50; \n      color: white;\n    }\n    .navbar-light .navbar-brand, .navbar-light a{\n      color:black;\n    }\n    .navbar-light .navbar-nav>li>a {\n      color: black;\n    } \n\n  " }} />
          <div className="wrapper">
            {/* Sidebar  */}
            <nav id="sidebar">
              <div className="sidebar-header">
                <h3>Name</h3>
              </div>
              <ul className="list-unstyled components">
                <li>
                  <a href="#">
                    <i className="fas fa-user" />
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-calendar" />
                    View Exam details
                  </a> 
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-pencil-alt" />
                    Faculty duty
                  </a>
                </li>
                {/*<li>
                      <a href="#">
                          <i class="fas fa-question"></i>
                          FAQ
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <i class="fas fa-paper-plane"></i>
                          Contact
                      </a>
                  </li> */} 
              </ul>
            </nav>
            {/* Page Content  */}
            <div id="content">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <button type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-align-left" />
                    <span />
                  </button>
                  <a className="navbar-brand" href="sid.html">
                    <img src="img/log2.jpg" alt="logo" style={{width: '180px'}} />
                  </a>
                  <div className="container"> 
                    <button className="btn btn-info pull-right"> 
                      Month
                    </button> 
                    <button className="btn btn-info pull-right"> 
                      Week
                    </button>      
                    <button className="btn btn-info pull-right"> 
                      Day
                    </button> 
                  </div>
                </div>
              </nav>
              <div className="search-container">
                <form action="/action_page.php">
                  <input type="text" placeholder="Search.." name="search" />
                  <button type="submit"><i className="fa fa-search" /></button>
                </form>
              </div>
              <div className="container">
                <h1>Calender</h1>
                <hr />
                <div className="row">     
                  {/* edit form column */}
                  <div className="col-md-9 personal-info">
                    <div className="alert alert-info alert-dismissable">
                      <a className="panel-close close" data-dismiss="alert">×</a> 
                      <strong>Edit the details if required.</strong>
                    </div>
                  </div>
                </div>
              </div>
              <hr />       
              {/* Popper.JS */}
              {/* Bootstrap JS */}
            </div></div>
            </>
      );
    }

Temp.propTypes = {
  isAuth: PropTypes.bool,
  user: PropTypes.object,
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  user: state.auth.user
});

export default connect(mapStateToProps, null)(Temp)