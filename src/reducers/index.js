import {combineReducers} from 'redux';

import projects from './projects';
import contributions from './contributions';
import comments from './comments';
import users from './users';
import populated from './populated';

export default combineReducers({
  projects,
  contributions,
  comments,
  users,
  populated,
});
