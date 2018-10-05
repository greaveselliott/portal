import React from 'react';
import { bool } from 'prop-types';

import { Button } from '@portal/ui-library';

import LoginContainer from '../login/login-container';
import AppsContainer from '../apps/apps-container';
import UsersContainer from '../users/users-container';

import './stage.scss';

const Stage = ({ isAuthenticated, isEditing, isViewingUsers }) => (
  <div className="eg-stage">
    <header className="eg-stage__header">
      {(isEditing || isViewingUsers) && <Button className="eg-stage__back-button">Back</Button>}
      <h1 className="eg-stage__title">Portal</h1>
      {isAuthenticated && <Button className="eg-stage__logout">Lgoout</Button>}
    </header>
    {!isAuthenticated ? <LoginContainer /> : (isViewingUsers && <UsersContainer />) || <AppsContainer />}
  </div>
);

Stage.defaultProps = {
  isAuthenticated: false,
  isEditing: false,
  isViewingUsers: false
};

Stage.propTypes = {
  isAuthenticated: bool,
  isEditing: bool,
  isViewingUsers: bool
};

export default Stage;
