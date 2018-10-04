import React from 'react';
import { any, arrayOf, func } from 'prop-types';

const Button = ({ children, onClick }) => (
  <button className="eg-button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: arrayOf(any).isRequired,
  onClick: func.isRequired
};

export default Button;
