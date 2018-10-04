import { connect } from 'react-redux';

import Apps from './apps';

const mapStateToProps = state => ({
  apps: state.apps
});

export default connect(mapStateToProps)(Apps);
