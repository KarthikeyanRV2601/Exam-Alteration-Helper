import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import {LoginPage} from './Routes/LoginPage';
import ExamSchedule from './Routes/ExamSchedule';
// import FacultyDashboard from './Routes/FacultyDashboard';
// import SupervisorDashboard from './Routes/secretaryDashboard';
import PrivateRoute from './components/routing/PrivateRoute'
import { LOGOUT } from './actions/types';
import TimeTable from './Routes/TimeTable';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import ProfileSettings from './Routes/ProfileSettings';
import {ExcelRenderer} from './Routes/tempSchedule';
import Dashboard from './Routes/Dashboard';
import {DutyPage} from './Routes/DutyPage';
const App=()=>{
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return(
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <PrivateRoute exact path='/' component={Dashboard}/>
            {/* <PrivateRoute exact path='/faculty' component={FacultyDashboard}  /> */}
            <PrivateRoute exact path='/profile-settings' component={ProfileSettings} />
            <PrivateRoute exact path='/timetable' component={TimeTable} />
            <PrivateRoute exact path='/exam-schedule' component={ExcelRenderer} />
            <PrivateRoute exact path='/duties-page' component={DutyPage} />
            
            {/* <PrivateRoute exact path='/supervisor' component={SupervisorDashboard} /> */}
          </Switch>
        </Router>
      </Provider>

    </>
  )
}

export default App