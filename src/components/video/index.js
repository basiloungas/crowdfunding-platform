import React from 'react';

import {VideoContainer} from './styled';

export default ({url}) => (
  <VideoContainer>
    <iframe
      title="Video"
      width="100%"
      height="100%"
      src={url}
      frameBorder="0"
      allowFullScreen
    />
  </VideoContainer>
)
