import React from 'react';
import './App.css';
import Login from './auth/Login'

function App() {
  return (
    <div className="App">
      <h1 style = {{color: "white"}}>Welcome to our Financial Planner!</h1>
      
      <Login />

    </div>
  );
}

export default App;
