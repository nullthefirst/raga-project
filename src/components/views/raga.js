import React, { Component } from 'react';

import Info from './info';

import '../Main.css';

const titleMinor2 = {
  padding: '1em',
  fontSize: '2em',
  fontWeight: 'bold'
}

export default class RAGA extends Component {
  render() {
    return(
      <div>
        <h3 style={titleMinor2}>Raising Girls’ Ambition (RAGA) Conferences</h3>
        <Info />
      </div>
    );
  }
}
