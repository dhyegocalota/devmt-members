import React from 'react';
import './style.css';

function Loading(props) {
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

export default Loading;
