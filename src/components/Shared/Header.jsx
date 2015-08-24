import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/#">Home</a></li>
          <li><a href="/#About">About</a></li>
          <li><a href="/#Contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
};
