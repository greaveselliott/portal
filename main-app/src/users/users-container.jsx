import { connect } from 'react-redux';

import { fetchAppUsers } from '@portal/redux/actions';
import Users from './users';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  onFetchAppUsers: props => dispatch(fetchAppUsers(props))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
