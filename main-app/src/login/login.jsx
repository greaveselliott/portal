import React, { createRef } from 'react';
import { func } from 'prop-types';

import { Button, Input, Page } from '@portal/ui-library';

const email = createRef();
const password = createRef();

const Login = ({ onSubmit }) => (
  <Page className="eg-login" title="Login">
    <Input className="eg-login__field" name="Email" type="email" ref={email} />
    <Input className="eg-login__field" name="Password" type="password" ref={password} />
    <Button
      className="eg-login__submit"
      type="submit"
      onClick={() => onSubmit({ email: email.current.value, password: password.current.value })}
    >
      Sign in
    </Button>
  </Page>
);

Login.defaultProps = {
  onSubmit: undefined
};

Login.propTypes = {
  onSubmit: func
};

export default Login;
