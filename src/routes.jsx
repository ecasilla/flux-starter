import React from 'react';
import App from './App';
import {Route, NotFoundRoute} from 'react-router';
import Home from './components/Home/Home';
import About from './components/Home/About';
import Contact from './components/Home/Contact';
import NotFound from './components/Pages/not-found';


export default (
  <Route handler={App}>
    <Route name="index" path="/" handler={Home}/>
    <Route name="about" path="/about" handler={About}/>
    <Route name="contact" path="/contact" handler={Contact}/>
    //404 Not Found
   <NotFoundRoute handler={NotFound} />
  </Route>
);
