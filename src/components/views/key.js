import React, { Component } from 'react';

import Vision from './vision';
import About from './about';

export default class Key extends Component {
  render() {
    return(
      <div>
        <Vision />
        <About />
      </div>
    );
  }
}
