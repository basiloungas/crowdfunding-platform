import {
  compose,
  withState,
} from 'recompose';

import Tabs from './component';
import {TabTypes} from './constants';

export default compose(
  withState('selectedTab', 'changeTab', TabTypes.comments),
)(Tabs);
