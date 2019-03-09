import React, { Component } from 'react';
import './style.css';

export default class Error extends Component {
  render() {
    const { reason, onRetry } = this.props;
    return (
      <div className="Error">
        <p className="Error-title">Oops...</p>
        <p className="Error-reason">{reason}</p>
        <a onClick={onRetry} className="Error-retry">
          Try again
        </a>
      </div>
    );
  }
}
