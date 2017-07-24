import styled from 'styled-components';
import {Row} from 'hedron';

export const MoneyContainer = styled.p`
  font-weight: bold;
  margin-left: 44px;
`;

export const DateContainer = styled.span`
  margin-left: 10px;
`;

export const Contribution = styled(Row)`
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  @media only screen and (max-width: 767px) {
  }
`;
