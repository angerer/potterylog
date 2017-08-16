import React, { Component } from 'react';
import WorkLog from './WorkLog.js'

class Works extends Component {
  render() {
    return (
      <div className="Work-display">
        <div className="Work-details">
          <p>Stuff goes here</p>
        </div>
        <WorkLog />
      </div>
    );
  }
}

export default Works;
