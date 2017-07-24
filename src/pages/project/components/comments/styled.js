import styled from 'styled-components';
import {Row} from 'hedron';

export const DateContainer = styled.span`
  padding-left: 10px;
`;

export const TextContainer = styled.p`
  margin-left: 44px;
`;

export const Comment = styled(Row)`
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  @media only screen and (max-width: 767px) {
  }
`;
