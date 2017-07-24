import {ActionTypes} from './actions';

export const defaultState = {
  status: false,
  isLoading: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.POPULATE_DATA_START:
      return {
        status: false,
        isLoading: true,
      }
    case ActionTypes.POPULATE_DATA_SUCCESS:
      return {
        status: true,
        isLoading: false,
      }
    case ActionTypes.POPULATE_DATA_FAIL:
      return {
        status: false,
        isLoading: false,
      }
    default:
      return state;
  }
};
