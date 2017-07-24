import styled from 'styled-components';
import {Page} from 'hedron';

export const PageWrapper = styled.div`
  margin-top: 90px;
`;

export const ContentWrapper = styled(Page)`
  padding: 40px 0 60px;
  min-height: calc(100vh - 90px - 71px);
`;
