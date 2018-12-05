import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Team_Registration_Form from './components/Team_Registration_Form/Team_Registration_Form';

export default (
  <Switch>
    <Route exact path='/' />
        {/* <Route path="/teams" /> */}
        <Route path='/teams/team_registration_form' component={ Team_Registration_Form } />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
  </Switch>
)