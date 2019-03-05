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
        <h5>GYLGF &copy; 2018 - 2019 | All Rights Reserved</h5>
        <h6><a href="https://usheninte.xyz">Coded by Usheninte</a></h6>
      </div>
    );
  }
}
