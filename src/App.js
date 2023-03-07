import React, { useState } from 'react';
import './App.css';
//import SignIn from './components/auth/Signin';
import Signup from './components/auth/Signup';
import AuthDetails from './components/AuthDetails';

function App() {
  

  return (
    <div className="App">
      {/*<SignIn />*/}
      <Signup />
      <AuthDetails />
    </div>
  );
}

export default App;
