import React, { PureComponent } from 'react';
import './style.css';

export default class Button extends PureComponent {
  static defaultProps = { variant: 'primary' };

  render() {
    const { className, variant, children, ...props } = this.props;
    return (
      <a {...props} className={`Button Button--${variant} ${className}`}>
        {children}
      </a>
    );
  }
}
