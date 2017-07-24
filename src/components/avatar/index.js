import React from 'react';
import Gravatar from 'react-gravatar';

import {Container} from './styled';

export default ({email, size = 50}) => (
  <Container size={size}>
    <Gravatar email={email} size={size}/>
  </Container>
);
