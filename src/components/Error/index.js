import React, { PureComponent } from 'react';
import Button from '../Button';
import './style.css';

export default class Error extends PureComponent {
  render() {
    const { reason, onRetry } = this.props;
    return (
      <div className="Error">
        <p className="Error-title">Oops...</p>
        <p className="Error-reason">{reason}</p>
        <Button onClick={onRetry} variant="error">
          Try again
        </Button>
      </div>
    );
  }
}
