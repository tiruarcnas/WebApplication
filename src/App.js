import React from 'react';
import { InternalRouter } from './component/Router';

const App = () => {
  return (
    <div className='App'>
      <InternalRouter />
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
