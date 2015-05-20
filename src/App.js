import 'babel/polyfill';
import React from 'react';
import FastClick from 'fastclick';

export default class App extends React.Component {
  render() {
    return (
     <h1>Hello World!</h1>
    );
  }
}

// Run the application when both DOM is ready
// and page content is loaded
Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  }).then(() => FastClick.attach(document.body))
]).then(console.log("APP READY"));
