import React from 'react';
import {Link} from 'react-router-dom';

import {Page, Row, Column} from 'hedron';
import {Wrapper} from './styled';

export default () => (
  <Page fluid>
    <Wrapper>
      <Page>
        <Row alignContent={'center'}>
          <Column sm={12} md={4}>
            <Link to={'/'} >Coin-FUN-ding</Link>
          </Column>
          <Column sm={12} md={4}>
            <p>copyright 2017</p>
          </Column>
        </Row>
      </Page>
    </Wrapper>
  </Page>
);
