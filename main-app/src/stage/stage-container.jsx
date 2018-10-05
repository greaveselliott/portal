import { connect } from 'react-redux';

import Stage from './stage';

const mapStateToProps = state => ({
  isAuthenticated: state.accessToken !== undefined,
  isEditing: state.isEditing,
  isViewingUsers: state.isViewingUsers
});

export default connect(mapStateToProps)(Stage);
