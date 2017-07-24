import {withProps} from 'recompose';
import {connect} from 'react-redux';
import {compose} from 'redux';

import getPopulatedProject from '../../selectors/get-populated-project';
import Contibute from './component';

export default compose(
  withProps((ownProps) => ({
    projectId: ownProps.match.params.projectId
  })),
  connect((state, ownProps) => ({
    project: getPopulatedProject()(state, ownProps),
  }))
)(Contibute);
