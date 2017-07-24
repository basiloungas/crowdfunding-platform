import {ActionTypes as PopulatedActionTypes} from '../populated/actions';
import {ActionTypes} from './actions';

export const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      return {
        ...state,
        [action.payload.id]: {...action.payload.data},
      };
    case PopulatedActionTypes.POPULATE_DATA_SUCCESS:
      return {
        ...action.payload.comments
      };
    default:
      return state;
  }
};
