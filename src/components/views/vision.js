import React, { Component } from 'react';

import '../Main.css';

const titleMinor = {
  fontSize: '2em',
  fontWeight: 'bold'
}

export default class Vision extends Component {
  render() {
    return(
      <div>
        <h3 style={titleMinor}>Our Vision</h3>
        <p>The <a href="https://www.gylgfoundation.org/" alt="Global Youth leadership and Girl-Child Foundation (GYLGF)">Global Youth leadership and Girl-Child Foundation (GYLGF)</a> envisions a society where the potentials of youth and girl-child are fully developed and supported to become socially responsible, responsive, and able to lead themselves and contribute meaningfully to a healthy society.</p>
      </div>
    );
  }
}
