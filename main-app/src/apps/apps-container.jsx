import { connect } from 'react-redux';

import { fetchAppUsers, fetchAppUpdate } from '@portal/redux/actions';
import Apps from './apps';

const mapStateToProps = state => ({
  accessToken: state.accessToken,
  apps: state.apps
});

const mapDispatchToProps = dispatch => ({
  onFetchAppUsers: props => dispatch(fetchAppUsers(props)),
  onFetchAppUpdate: props => dispatch(fetchAppUpdate(props))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Apps);
