import React from 'react';
import {Row, Column} from 'hedron';

import Header from '../../components/header';
import Button from '../../components/button';
import Box from '../../components/box';
import UserDetails from '../../components/user-details';
import ContributionsDetails from '../../components/contributions-details';

import ContributionForm from './components/contribution-form';

import {ProjectTitle, ProjectDetailsContainer} from './styled';

export default (props) => {
  const {
    project,
  } = props;

  return (
    <div>
      <Row>
        <Column lg={8}>
          <Header>Place your contribution</Header>
          <Box>
            <ContributionForm currency={project.currency} projectId={project.id}/>
          </Box>
        </Column>

        <Column lg={4}>
          <ProjectDetailsContainer>
            <Header>Project details</Header>
            <Box>
              <ProjectTitle>{project.title}</ProjectTitle>
              <p>by: <UserDetails withContainer user={project.owner} /></p>
              <ContributionsDetails project={project} />
            </Box>
          </ProjectDetailsContainer>
        </Column>
      </Row>

      <Row>
        <Column>
          <Button urlTo={`/project/${project.id}`}>Back to project</Button>
        </Column>
      </Row>
    </div>
  );
}
