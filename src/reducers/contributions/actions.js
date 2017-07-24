import {
  getOrCreateEntry,
  pushData,
  getData,
  setData,
} from '../../firebase';

export const CREATE_CONTRIBUTION_START = 'CREATE_CONTRIBUTION_START';
export const CREATE_CONTRIBUTION_SUCCESS = 'CREATE_CONTRIBUTION_SUCCESS';
export const CREATE_CONTRIBUTION_FAIL = 'CREATE_CONTRIBUTION_FAIL';
export const ADD_CONTRIBUTION = 'ADD_CONTRIBUTION';

export const ActionTypes = {
  CREATE_CONTRIBUTION_START,
  CREATE_CONTRIBUTION_SUCCESS,
  CREATE_CONTRIBUTION_FAIL,
  ADD_CONTRIBUTION,
};

export const createContribution = (data) => {
  return (dispatch, getState) => {
    const {
      email,
      name,
      amount,
      currency,
      projectId,
    } = data;

    dispatch(createContributionStart());

    // Data
    const projectRef = `/projects/${projectId}`;
    const userData = {email, name};
    const contributionData = userKey => ({
      amount,
      createdAt: +new Date(),
      currency,
      project: projectId,
      user: userKey,
    });

    const updateProject = (project, contributionId) => ({
      ...project,
      current: parseFloat(project.current) + parseFloat(amount),
      contributions: [...project.contributions, contributionId],
    });

    // Get or create User
    return getOrCreateEntry('users', 'email', email, userData)
      // Create Contribution
      .then(userKey => pushData('contributions', contributionData(userKey)))
      // Add new Contribution to Project and increment current
      .then(contributionId => getData(projectRef)
        .then(project => setData(projectRef, updateProject(project, contributionId)))
      )
      .then(data => dispatch(createContributionSuccess(data)))
      .catch(error => dispatch(createContributionFail(error)));
  }
};

export const createContributionStart = () => ({
  type: CREATE_CONTRIBUTION_START,
  payload: null,
});

export const createContributionSuccess = (payload) => ({
  type: CREATE_CONTRIBUTION_SUCCESS,
  payload,
});

export const createContributionFail = (error) => ({
  type: CREATE_CONTRIBUTION_FAIL,
  payload: error,
  error: true,
});

export const addContribution = (id, data) => ({
  type: ADD_CONTRIBUTION,
  payload: {id, data},
});
