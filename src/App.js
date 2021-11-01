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
