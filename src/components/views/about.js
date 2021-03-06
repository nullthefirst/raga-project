import React, { Component } from 'react';

import '../Main.css';

const blackBox = {
  padding: '1em',
  margin: '2em',
  color: '#c0c0c0',
  borderRadius: '6%',
  backgroundColor: '#212121'
}

const titleDark = {
  fontSize: '2em',
  fontWeight: 'bold',
  paddingTop: '0.5em',
  textDecoration: 'underline',
  textDecorationColor: '#3cb371'
}

export default class About extends Component {
  render() {
    return(
      <div style={blackBox}>
        <h3 style={titleDark}>About Us</h3>
        <p>The <a href="https://www.gylgfoundation.org/" alt="Global Youth leadership and Girl-Child Foundation (GYLGF)">Global Youth leadership and Girl-Child Foundation (GYLGF)</a> is a Non-Governmental and Leadership Organisation established in Nigeria, since 2001 and incorporated in 2014 with the Corporate Affairs Commission (CAC).</p>
        <br />
        <p>The foundation is concerned with providing result-based and enduring solutions to the challenges faced by women, youths and the girl-child especially in Oyo State, Nigeria and in any part of the World.</p>
      </div>
    );
  }
}
