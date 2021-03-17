import React from 'react';

import './App.css';
import Signup from './auth/Signup'
import Login from './auth/Login'
import Main from './main/Main'
import Goals from './main/Goals'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    
        <Router>
          <Switch>
            <Route path = "/signup" component= {Signup}/>
            <Route path = "/Login" component= {Login}/>
            <Route path = "/Main" component = {Main}/>
            <Route path = "/Goals" component = {Goals}/>
          </Switch>
        </Router>

  );
}

export default App;
