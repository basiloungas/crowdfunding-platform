import {withState} from 'recompose';
import {compose} from 'redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {createContribution} from '../../../../reducers/contributions/actions';

import ContributionForm from './component';

const mapDispatchToProps = dispatch => bindActionCreators({createContribution},dispatch);

export default compose(
  withState('amount', 'changeAmount', 0),
  withState('email', 'changeEmail', ''),
  withState('name', 'changeName', ''),
  withState('loading', 'updateLoading', false),
  connect(null, mapDispatchToProps),
)(ContributionForm);
