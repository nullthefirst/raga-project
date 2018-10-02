import React, { Component } from 'react';

import Top from './top';
import Mid from './mid';
import End from './end';

import '../Main.css';

export default class RAGA extends Component {
  render() {
    return(
      <div>
        <Top />
        <hr />
        <Mid />
        <hr />
        <End />
      </div>
    );
  }
}