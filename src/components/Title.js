import React, { Component } from 'react';

import './Main.css';

const titleMain = {
  padding: '1em',
  fontSize: '3.2em',
  textDecoration: 'underline',
  textDecorationColor: '#212121'
}

export default class Title extends Component {
  render() {
    return (
      <div>
        <h4 style={titleMain}
          className="note">Raising Girls Ambition PROJECT</h4>
      </div>
    );
  }
}
