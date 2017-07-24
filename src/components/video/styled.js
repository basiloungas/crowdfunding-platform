import styled from 'styled-components';

// responsive video wrapper taken from:
// https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
export const VideoContainer = styled.div`
  position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
