import React from 'react';
import classnames from 'classnames';
import { string, func } from 'prop-types';

const Input = ({ className, placeholder, ref, type }) => (
  <input className={classnames('eg-input', className)} placeholder={placeholder} ref={ref} type={type} />
);

Input.defaultProps = {
  className: undefined,
  placeholder: undefined,
  ref: undefined,
  type: 'text'
};

Input.propTypes = {
  className: string,
  placeholder: string,
  ref: func,
  type: string
};

export default Input;
