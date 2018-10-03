import { connect } from 'react-redux';

import { fetchAuth } from '../redux/actions';
import Login from './login';
/* eslint-disable */
export const mapDispatchToProps = dispatch => ({
  onSubmit: loginCredentials => dispatch(fetchAuth(loginCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
