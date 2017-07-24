import React from 'react';
import {Row, Column} from 'hedron';

import Tabs from './components/tabs';

import ContributionsDetails from '../../components/contributions-details';
import Button from '../../components/button';
import UserDetails from '../../components/user-details';
import Header from '../../components/header';
import Box from '../../components/box';
import Video from '../../components/video';

import {ButtonContainer} from './styled';

export default (props) => {
  const {
    project,
  } = props;

  const {
    id,
    title,
    description,
    owner,
    videoUrl,
  } = project;

  return (
    <Row>
      <Column>
        <Row>
          <Column>
            <Header>Project: {title}</Header>

            <Box>
              <p>{description}</p>
              <p>Created by: <UserDetails withContainer user={owner} /></p>
            </Box>
          </Column>
        </Row>

        <Row>
          <Column md={12} lg={8}>
            <Box>
              <Video url={videoUrl} />
            </Box>
          </Column>
          <Column md={12} lg={4}>
            <Box>
              <ContributionsDetails project={project}/>

              <ButtonContainer>
                <Button color="green" urlTo={`/project/${id}/contribute`}>Contribute</Button>
              </ButtonContainer>
            </Box>
          </Column>
        </Row>

        <Row>
          <Column>
            <Box>
              <Tabs project={project} />
            </Box>
          </Column>
        </Row>
      </Column>
    </Row>
  );
}
