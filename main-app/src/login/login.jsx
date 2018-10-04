import React, { createRef } from 'react';
import { func } from 'prop-types';

import { Input, Page } from '@portal/ui-library';

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
      <Input className="eg-login__field" type="email" ref={email} />
      <Input className="eg-login__field" type="password" ref={password} />
      <Input className="eg-login__submit" type="submit" />
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
