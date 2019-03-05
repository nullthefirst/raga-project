import React, { Component } from 'react';

import Title from './components/Title';
import Key from './components/views/key';
import RAGA from './components/views/raga';
import Footer from './components/Footer';

import './components/Main.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Key />
        <RAGA />
        <Footer />
      </div>
    );
  }
}

export default App;
