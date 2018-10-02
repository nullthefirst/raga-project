import React, { Component } from 'react';

import AppMenu from './components/AppMenu';
import Footer from './components/Footer';

import './components/Main.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppMenu />
        <Footer />
      </div>
    );
  }
}

export default App;
