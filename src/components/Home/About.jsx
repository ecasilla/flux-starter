import React from 'react';
import {Paper,FlatButton} from 'material-ui';
import Header from '../Shared/Header'

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Header/>
        <h1>About?</h1>
        <FlatButton label="About" />
      </div>
    );
  }
};


