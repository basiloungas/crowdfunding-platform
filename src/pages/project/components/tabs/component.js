import React from 'react';

import Information from '../information';
import Comments from '../comments';
import Contributions from '../contributions';

import {TabTypes} from './constants';
import {Tab, TabContainer, Container} from './styled';

export const getContent = (selectedTab, project) => {
  switch(selectedTab) {
    case TabTypes.info:
      return <Information data={project.info} />
    case TabTypes.comments:
      return <Comments comments={project.comments} projectId={project.id} />
    case TabTypes.contributions:
      return <Contributions contributions={project.contributions} />
    default:
      return null;
  }
}

export default (props) => {
  const {
    project,
    selectedTab,
    changeTab,
  } = props;

  return (
    <Container>
      <TabContainer>
        <Tab sm={4}
          selected={selectedTab === TabTypes.info}
          onClick={() => changeTab(TabTypes.info)}
        >
          Information
        </Tab>
        <Tab sm={4}
          selected={selectedTab === TabTypes.comments}
          onClick={() => changeTab(TabTypes.comments)}
        >
          Comments ({project.comments.length})
        </Tab>
        <Tab sm={4}
          selected={selectedTab === TabTypes.contributions}
          onClick={() => changeTab(TabTypes.contributions)}
        >
          Contributions ({project.contributions.length})
        </Tab>
      </TabContainer>

      {getContent(selectedTab, project)}
    </Container>
  );
}

