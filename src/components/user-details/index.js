import React from 'react';

import Avatar from '../avatar';
import {Container, Thumb, Name} from './styled';

export default ({user, withContainer = false}) => (
  <Container withContainer={withContainer}>
    <Thumb>
      <Avatar size={30} email={user.email} />
    </Thumb>
    <Name>
      {user.name}
    </Name>
  </Container>
);
