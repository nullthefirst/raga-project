import React, { Component } from 'react';

import './Main.css';

const titleMinor2 = {
  padding: '1em',
  fontSize: '2em',
  fontWeight: 'bold'
}

export default class Footer extends Component {
  render() {
    return(
      <div style={titleMinor2} className="App-link">
        <h5>Global Youth leadership and Girl-Child Foundation (GYLGF) &copy; All Rights Reserved [2018-2021]</h5>
        <h6><a href="https://ninte.dev">ninte.dev</a></h6>
      </div>
    );
  }
}
