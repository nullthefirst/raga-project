import React, { Component } from 'react';

import About from './about';
import Vision from './vision';

export default class Key extends Component {
  render() {
    return(
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Vision />
            </div>
            <div className="col-12">
              <About />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
