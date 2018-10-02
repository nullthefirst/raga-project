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
        <h3>Raising Girls’ Ambition (RAGA) Conferences</h3>
        <Mid />
        <hr />
        <End />
        <hr />
      </div>
    );
  }
}