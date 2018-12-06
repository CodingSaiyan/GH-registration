import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Team_Registration_Form from './components/Team_Registration_Form/Team_Registration_Form';
import Landing from './components/Landing/Landing'
import Teams from './components/Teams/Teams'
import Standings from './components/Standings/Standings'
import Players from './components/Players/Players'

export default (
  <Switch>
        <Route exact path='/' component={ Landing } />
        <Route exact path='/teams' component={ Teams } />
        <Route path='/teams/standings' component={ Standings } />
        <Route path='/players' component={ Players } />
        <Route path='/teams/team_registration_form' component={ Team_Registration_Form } />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
  </Switch>
)