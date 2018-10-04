import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';

const Input = forwardRef(({ className, placeholder, type }, ref) => (
  <input className={classnames('eg-input', className)} placeholder={placeholder} ref={ref} type={type} />
));

Input.defaultProps = {
  className: undefined,
  placeholder: undefined,
  type: 'text'
};

Input.propTypes = {
  className: string,
  placeholder: string,
  type: string
};

export default Input;
