import React, { Component } from 'react';
import './style.css';

export default class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <p className="Loading-text">
          Loading
          <span className="Loading-dot" />
          <span className="Loading-dot" />
          <span className="Loading-dot" />
        </p>
      </div>
    );
  }
}
