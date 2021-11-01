import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './_helpers';
import RegisterPage from './RegisterPage/RegisterPage';
import { alertActions } from './_actions';
import Login from './component/Session/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Dashboard/User/Home';

const App = () => {
  useEffect(() => {
    let user = localStorage.getItem('access_token');
    if (user) {
      history.push('/home');
    }
  }, []);

  return (
    <div className='jumbotron'>
      <div className='container'>
        <ToastContainer />
        <div className='col-md-8 offset-md-2'>
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          <Router history={history}>
            <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/login' component={Login} />
              {/* <Route path='/register' component={RegisterPage} /> */}
              <Route exact path='/' component={RegisterPage} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;

// on every refresh JWT tokens are refreshed and checked if its still valid or not - wrt - validity
// HOC - with authentication - which in return gives a authorized component - otherwise to login page.
//Redux - Data persistency - and to access my data through out the application.
// Provider - It acts as an HOC - which basically provides the data
// Store - my data storage of the application.
// MapdispatchToState - a function which will return my data/state/store.
// MapdispatchToProps - this is used to call/dispatch my function(api / function).
// Actions - Makes the functional call
// Reducers - saves the data in store.

//Session management -
// maintain session -
// login
// validate the credentials -
// save these validated tokens in localstorage.
// everytime you login - you have check if u have valid jwt token or token.
// every time you make any api call - JWT token is appended in headers of the api call.
// In the backend you have to check whether the token you have got is valid or not.

// Folder  structure
// App -
//   Components -
// Login
// Logout
//WithAUthenticatedComponent -
// ActiveOrders
// < Home ></Home >
// <SavedReminders/>
// ApiConfig.jsx( we will one function which takes my argument/data, make the authenticated api call and returns the response)

///==========
// ------------ to understand
// Session management.
