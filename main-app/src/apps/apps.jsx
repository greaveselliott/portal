import { connect } from 'react-redux';

import { Tiles } from '@portal/ui-library';

const mapStateToProps = state => ({
  items: state.apps
});

export default connect(mapStateToProps)(Tiles);
