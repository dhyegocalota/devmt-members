import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.css';

function Error(props) {
  const { reason, onRetry: handleRetry } = props;

  return (
    <div className="Error">
      <p className="Error-title">Oops...</p>
      <p className="Error-reason">{reason}</p>
      <Button onClick={handleRetry} variant="error">
        Try again
      </Button>
    </div>
  );
}

Error.propTypes = {
  reason: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired,
};

export default Error;
