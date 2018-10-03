import React from 'react';
import { bool } from 'prop-types';

import LoginContainer from '../login/login-container';
import Apps from '../apps/apps';

const Stage = ({ isAuthenticated }) => <div>{isAuthenticated ? <Apps /> : <LoginContainer />}</div>;

Stage.defaultProps = {
  isAuthenticated: false
};

Stage.propTypes = {
  isAuthenticated: bool
};

export default Stage;
