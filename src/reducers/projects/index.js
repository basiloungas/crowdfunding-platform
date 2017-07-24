import {ActionTypes as PopulatedActionTypes} from '../populated/actions';
import {ActionTypes} from './actions';

export const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROJECT:
    case ActionTypes.UPDATE_PROJECT:
      return {
        ...state,
        [action.payload.id]: {...action.payload.data},
      };
    case PopulatedActionTypes.POPULATE_DATA_SUCCESS:
      return {
        ...action.payload.projects
      };
    default:
      return state;
  }
};
