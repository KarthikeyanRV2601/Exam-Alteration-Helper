import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {LoginPage} from './Routes/LoginPage';
// import {ExamSchedule} from './Routes/ExamSchedule';
import Temp from './Routes/temp';
import FacultyDashboard from './Routes/FacultyDashboard';
import PrivateRoute from './components/routing/PrivateRoute'
import { LOGOUT } from './actions/types';
import TimeTable from './Routes/TimeTable';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'


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
            <PrivateRoute exact path='/' component={FacultyDashboard}  />
            {/* <PrivateRoute exact path='/schedule' component={Temp} /> */}
            <PrivateRoute exact path='/timetable' component={TimeTable} />
          </Switch>
        </Router>
      </Provider>

    </>
  )
}

export default App;