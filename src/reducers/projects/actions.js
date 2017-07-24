export const ADD_PROJECT = 'ADD_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';

export const ActionTypes = {
  ADD_PROJECT,
  UPDATE_PROJECT,
};

export const addProject = (id, data) => ({
  type: ADD_PROJECT,
  payload: {id, data},
});

export const updateProject = (id, data) => ({
  type: UPDATE_PROJECT,
  payload: {id, data},
});
