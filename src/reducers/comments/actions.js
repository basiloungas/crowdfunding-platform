import {
  getOrCreateEntry,
  pushData,
  getData,
  setData,
} from '../../firebase';

export const CREATE_COMMENT_START = 'CREATE_COMMENT_START';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAIL = 'CREATE_COMMENT_FAIL';
export const ADD_COMMENT = 'ADD_COMMENT';

export const ActionTypes = {
  CREATE_COMMENT_START,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
  ADD_COMMENT,
};

export const createComment = (data) => {
  return (dispatch, getState) => {
    const {
      email,
      name,
      comment,
      projectId,
    } = data;

    dispatch(createCommentStart());

    // Data
    const commentsForProjectRef = `/projects/${projectId}/comments`;
    const userData = {email, name};
    const commentData = userKey => ({
      project: projectId,
      user: userKey,
      text: comment,
      createdAt: +new Date(),
    });

    // Get or create User
    return getOrCreateEntry('users', 'email', email, userData)
      // Create Comment
      .then(userKey => pushData('comments', commentData(userKey)))
      // Add Comment to Project
      .then(commentId => getData(commentsForProjectRef)
        .then(commentsArray => setData(commentsForProjectRef, [...commentsArray, commentId]))
      )
      .then(data => dispatch(createCommentSuccess(data)))
      .catch(error => dispatch(createCommentFail(error)));
  }
};

export const createCommentStart = () => ({
  type: CREATE_COMMENT_START,
  payload: null,
});

export const createCommentSuccess = (payload) => ({
  type: CREATE_COMMENT_SUCCESS,
  payload,
});

export const createCommentFail = (error) => ({
  type: CREATE_COMMENT_FAIL,
  payload: error,
  error: true,
});

export const addComment = (id, data) => ({
  type: ADD_COMMENT,
  payload: {id, data},
});
