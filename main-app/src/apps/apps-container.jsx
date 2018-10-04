import { connect } from 'react-redux';

import { fetchAppUsers } from '@portal/redux/actions';
import Apps from './apps';

const mapStateToProps = state => ({
  accessToken: state.accessToken,
  apps: state.apps
});

const mapDispatchToProps = dispatch => ({
  onFetchAppUsers: props => dispatch(fetchAppUsers(props))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Apps);
