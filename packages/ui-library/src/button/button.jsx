import React from 'react';
import { arrayOf, func, node, oneOfType, string } from 'prop-types';
import classnames from 'classnames';

import './button.scss';

const Button = ({ children, className, onClick }) => (
  <button className={classnames('eg-button', className)} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  className: undefined
};

Button.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  className: string,
  onClick: func.isRequired
};

export default Button;
