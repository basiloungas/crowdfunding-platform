import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Column} from 'hedron';

import Header from '../../components/header';

export const Homepage = ({projects}) => (
  <Row>
    <Column>
      <Header>Projects</Header>
      <p>This is a list of all projects:</p>
      <ul>
        {projects.map(project => (<li key={project}><Link to={`/project/${project}`}>{project}</Link></li>))}
      </ul>
    </Column>
  </Row>
);

export const mapStateToProps = (state, ownProps) => ({
  projects: Object.keys(state.projects),
});

export default connect(mapStateToProps)(Homepage);
