import React from 'react';
import { any, arrayOf, func, string } from 'prop-types';
import classnames from 'classnames';

const Button = ({ children, className, onClick }) => (
  <button className={classnames('eg-button', className)} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  className: undefined
};

Button.propTypes = {
  children: arrayOf(any).isRequired,
  className: string,
  onClick: func.isRequired
};

export default Button;
