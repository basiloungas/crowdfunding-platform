import {
  compose,
  withState,
} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NewCommentForm from './component';

import {createComment} from '../../../../../../reducers/comments/actions';

const mapDispatchToProps = dispatch => bindActionCreators({createComment},dispatch);

export default compose(
  withState('comment', 'updateComment', ''),
  withState('name', 'updateName', ''),
  withState('email', 'updateEmail', ''),
  withState('loading', 'updateLoading', false),
  connect(null, mapDispatchToProps),
)(NewCommentForm);
