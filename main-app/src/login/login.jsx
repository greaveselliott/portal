import React, { createRef } from 'react';
import { func } from 'prop-types';

const email = createRef();
const password = createRef();

const Login = ({ onSubmit }) => (
  <form
    className="eg-login"
    onSubmit={e => {
      e.preventDefault();
      onSubmit({ email: email.current.value, password: password.current.value });
    }}
  >
    <input className="eg-login__email" type="email" ref={email} />
    <input className="eg-login__password" type="password" ref={password} />
    <input type="submit" />
  </form>
);

Login.defaultProps = {
  onSubmit: undefined
};

Login.propTypes = {
  onSubmit: func
};

export default Login;
