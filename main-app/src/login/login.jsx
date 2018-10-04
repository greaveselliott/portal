import React, { createRef } from 'react';
import { func } from 'prop-types';

import { Page } from '@portal/ui-library';

const email = createRef();
const password = createRef();

const Login = ({ onSubmit }) => (
  <Page className="eg-login" title="Login">
    <form
      className="eg-login__form"
      onSubmit={e => {
        e.preventDefault();
        onSubmit({ email: email.current.value, password: password.current.value });
      }}
    >
      <input className="eg-login__field" type="email" ref={email} />
      <input className="eg-login__field" type="password" ref={password} />
      <input type="submit" />
    </form>
  </Page>
);

Login.defaultProps = {
  onSubmit: undefined
};

Login.propTypes = {
  onSubmit: func
};

export default Login;
