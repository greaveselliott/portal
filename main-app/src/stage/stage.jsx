import React from 'react';
import { bool } from 'prop-types';

import LoginContainer from '../login/login-container';
import AppsContainer from '../apps/apps-container';

import './stage.scss';

const Stage = ({ isAuthenticated }) => (
  <div className="eg-stage">
    {isAuthenticated ? '' : ''}
    <LoginContainer />
    <AppsContainer />
  </div>
);

Stage.defaultProps = {
  isAuthenticated: false
};

Stage.propTypes = {
  isAuthenticated: bool
};

export default Stage;
