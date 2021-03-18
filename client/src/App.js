import React from 'react';

import './App.css';
import Signup from './auth/Signup'
import Login from './auth/Login'
import Main from './main/Main'
import Goals from './goals/Goals'
import History from './history/History'
import Achievements from './achievements/Achievements'
import Settings from './settings/Settings'
import Admin from './admin/Admin'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    
        <Router>
          <Switch>
            <Route path = "/signup" component= {Signup}/>
            <Route path = "/Login" component= {Login}/>
            <Route path = "/Main" component = {Main}/>
            <Route path = "/Goals" component = {Goals}/>
            <Route path = "/History" component = {History}/>
            <Route path = "/Achievements" component = {Achievements}/>
            <Route path = "/Settings" component = {Settings}/>
            <Route path = "/admin" component = {Admin}/>
          </Switch>
        </Router>

  );
}

export default App;
