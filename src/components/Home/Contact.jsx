import React from 'react';
import {Paper,FlatButton} from 'material-ui';
import Header from '../Shared/Header'

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
      <Header/>
      <h1>Contact?</h1>
      </div>
    );
  }
};
