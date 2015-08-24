import React from 'react';

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <h1>404</h1>
    );
  }
};

NotFound.displayName = 'NotFound';
