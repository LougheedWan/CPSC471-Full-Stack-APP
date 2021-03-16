import React from 'react';

import './App.css';
import Signup from './auth/Signup'
import Login from './auth/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    
        <Router>
          <Switch>
            <Route path = "/signup" component= {Signup}/>
            <Route path = "/Login" component= {Login}/>
          </Switch>
        </Router>

  );
}

export default App;
