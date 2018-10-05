import { connect } from 'react-redux';

import { gotoLoginPage, gotoAppsPage } from '@portal/redux/actions';

import Stage from './stage';

const mapStateToProps = state => ({
  isAuthenticated: state.accessToken !== undefined,
  isEditing: state.isEditing,
  isViewingUsers: state.isViewingUsers
});

const mapDispatchToProps = dispatch => ({
  onGotoLoginPage: () => dispatch(gotoLoginPage()),
  onGotoAppsPage: () => dispatch(gotoAppsPage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stage);
