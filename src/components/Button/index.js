import React, { PureComponent } from 'react';
import cx from 'classnames';
import './style.css';

export default class Button extends PureComponent {
  static defaultProps = { variant: 'primary' };

  render() {
    const { className, variant, disabled, children, ...props } = this.props;
    return (
      <a
        {...props}
        className={cx([
          'Button',
          `Button--${variant}`,
          className,
          { 'Button--disabled': disabled },
        ])}
      >
        {children}
      </a>
    );
  }
}
