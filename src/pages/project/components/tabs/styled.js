import styled from 'styled-components';
import {Row, Column} from 'hedron';

export const Container = styled.div`
  margin: -20px;
`;

export const TabContainer = styled(Row)`
  border-bottom: 1px solid #ccc;
`;

export const Tab = styled(Column)`
  text-align: center;
  background: ${props => props.selected ? '#ddd' : 'inherit'};
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  cursor:pointer;
  padding: 16px;
  line-height: 1;
  border-right: 1px solid #ccc;

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    border-right: none;
  }

  @media only screen and (max-width: 767px) {
    border-right: none;
  }
`;
