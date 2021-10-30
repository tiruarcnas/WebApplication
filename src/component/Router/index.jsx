import React from 'react';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../Session/Login';
import Logout from '../Session/Logout';

export const InternalRouter = () => {
  return (
    <Router>
      <Route path='/' render={() => <Login />} />
      <Route path='/logout' render={() => <Logout />} />
    </Router>
  );
};
