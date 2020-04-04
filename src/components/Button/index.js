import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.css';

function Button(props) {
  const { className, variant, disabled, children, ...restProps } = props;

  return (
    <a
      {...restProps}
      className={classNames([
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

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
