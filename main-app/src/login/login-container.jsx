import { connect } from 'react-redux';

import { fetchAuth } from '@portal/redux/actions';
import Login from './login';

export const mapDispatchToProps = dispatch => ({
  onSubmit: loginCredentials => dispatch(fetchAuth(loginCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
