import 'babel/polyfill';
import React from 'react';
import FastClick from 'fastclick';
import mui from 'material-ui-sass';

export default class App extends React.Component {
  render() {
    var {Toolbar,RaisedButton} = mui;
    return (
     <Toolbar>
      <RaisedButton label="Create Broadcast" primary={true} />
     </Toolbar>
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
