import {getAllData} from '../../firebase';

export const POPULATE_DATA_START = 'POPULATE_DATA_START';
export const POPULATE_DATA_SUCCESS = 'POPULATE_DATA_SUCCESS';
export const POPULATE_DATA_FAIL = 'POPULATE_DATA_FAIL';

export const ActionTypes = {
  POPULATE_DATA_START,
  POPULATE_DATA_SUCCESS,
  POPULATE_DATA_FAIL,
};

export const populateData = () => {
  return (dispatch, getState) => {
    dispatch(populateDataStart());

    return getAllData()
      .then(data => dispatch(populateDataSuccess(data)))
      .catch(error => dispatch(populateDataFail(error)));
  }
};

export const populateDataStart = () => ({
  type: POPULATE_DATA_START,
  payload: null,
});

export const populateDataSuccess = (payload) => ({
  type: POPULATE_DATA_SUCCESS,
  payload,
});

export const populateDataFail = (error) => ({
  type: POPULATE_DATA_FAIL,
  payload: error,
  error: true,
});
