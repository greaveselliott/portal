import React from 'react';
import { bool, func } from 'prop-types';

import { Button } from '@portal/ui-library';

import LoginContainer from '../login/login-container';
import AppsContainer from '../apps/apps-container';
import UsersContainer from '../users/users-container';

import './stage.scss';

const Stage = ({ isAuthenticated, isEditing, isViewingUsers, onGotoLoginPage, onGotoAppsPage }) => (
  <div className="eg-stage">
    <header className="eg-stage__header">
      {(isEditing || isViewingUsers) && (
        <Button className="eg-stage__back-button" onClick={() => onGotoAppsPage()}>
          Back
        </Button>
      )}
      <h1 className="eg-stage__title">Portal</h1>
      {isAuthenticated && (
        <Button className="eg-stage__logout" onClick={() => onGotoLoginPage()}>
          Sign out
        </Button>
      )}
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
  isViewingUsers: bool,
  onGotoLoginPage: func.isRequired,
  onGotoAppsPage: func.isRequired
};

export default Stage;
