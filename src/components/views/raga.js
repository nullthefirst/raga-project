import React, { Component } from 'react';

import About from './about';
import Info from './info';
import Vision from './vision';

import '../Main.css';

export default class RAGA extends Component {
  render() {
    return(
      <div>
        <About />
        <h3>Raising Girls’ Ambition (RAGA) Conferences</h3>
        <Info />
        <Vision />
      </div>
    );
  }
}
