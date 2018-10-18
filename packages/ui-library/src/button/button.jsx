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
  className: undefined,
  children: [],
  onClick: null
};

Button.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  className: string,
  onClick: func
};

export default Button;
