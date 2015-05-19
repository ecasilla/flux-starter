import React        from 'react';
import Demo         from './components/Demo.react.jsx';
import LoginPage    from './components/session/LoginPage.react.jsx';
import SignupPage   from './components/session/SignupPage.react.jsx';
import {Router,Route,DefaultRoute} from 'react-router';

export default (
  <Route name="app" path="/" handler={Demo}>
    <DefaultRoute handler={StoriesPage} />
    <Route name="login" path="/login" handler={LoginPage}/>
    <Route name="signup" path="/signup" handler={SignupPage}/>
  </Route>
);
