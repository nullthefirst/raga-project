import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import './Main.css';

import RAGA from './views/raga';

export default class AppMenu extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">
                  <span id="title"><b>RAGA Project</b></span>
                </Link>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>

          <Route exact path="/" component={RAGA} />
        </div>
      </Router>
    );
  }
}