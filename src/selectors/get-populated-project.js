import { createSelector } from 'reselect'

const getProject = (state, props) => state.projects[props.projectId];
const getProjectId = (state, props) => props.projectId;
const getUsers = state => state.users;
const getContributions = state => state.contributions
const getComments = state => state.comments

const getPopulatedProject = () => {
  return createSelector(
    [
      getProject,
      getProjectId,
      getUsers,
      getContributions,
      getComments,
    ],
    (originalProject, projectId, users, contributions, comments) => {
      const project = {
        id: projectId,
        ...originalProject,
      };

      project.owner = users[project.owner];

      project.contributions = project.contributions.map(id => {
        const contribution = {
          id,
          ...contributions[id],
        };

        contribution.user = users[contribution.user];
        return contribution;
      });

      project.comments = project.comments.map(id => {
        const comment = {
          id,
          ...comments[id],
        };

        comment.user = users[comment.user];
        return comment;
      });

      return project;
    }
  )
}

export default getPopulatedProject
