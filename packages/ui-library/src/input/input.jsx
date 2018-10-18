import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';

import './input.scss';

const Input = forwardRef(({ className, name, placeholder, type }, ref) => (
  <div className={classnames('eg-input', className)}>
    <label className="eg-input__label" htmlFor={name}>
      {name}
    </label>
    <input className={`eg-input__${type}`} id={name} placeholder={placeholder} ref={ref} type={type} />
  </div>
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
