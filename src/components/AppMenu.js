import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './Main.css';

import RAGA from './views/raga';

export default class AppMenu extends Component {
  render() {
    return (

      <Router>
        <nav>
          <nav class="navbar fixed-top navbar-dark bg-dark bg-light">
            <span class="navbar-brand mb-0 h1">
              <Link to="/"><h4 className="note">Raising Girls Ambition PROJECT</h4></Link>
            </span>
          </nav>
          <Route exact path="/" component={RAGA} />
        </nav>
      </Router>
    );
  }
}
