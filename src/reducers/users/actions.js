export const ADD_USER = 'ADD_USER';

export const ActionTypes = {
  ADD_USER,
};

export const addUser = (id, data) => ({
  type: ADD_USER,
  payload: {id, data},
});
