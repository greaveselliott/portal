import { connect } from 'react-redux';

import Stage from './stage';

const mapStateToProps = state => ({
  isAuthenticated: state.accessToken !== undefined
});

export default connect(mapStateToProps)(Stage);
