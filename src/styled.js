/* eslint-disable no-unused-expressions */

import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Operator Mono';
    src: url('../fonts/Operator-Mono.ttf');
  }

  body {
    margin: 0;
  }

  ul, li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;
