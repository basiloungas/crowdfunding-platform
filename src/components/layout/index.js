import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import {ContentWrapper, PageWrapper} from './styled';

export default (props) => (
  <PageWrapper>
    <Header />

    <ContentWrapper>
      {props.children}
    </ContentWrapper>

    <Footer />
  </PageWrapper>
);
