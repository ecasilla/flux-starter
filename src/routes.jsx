import React        from 'react';
import Home         from './components/Demo.react.jsx';
import {Router,Route,DefaultRoute} from 'react-router';

export default (
  <Route name="home" path="/" handler={Home}>
    <DefaultRoute handler={Home} />
  </Route>
);
