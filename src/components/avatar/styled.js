import styled from 'styled-components';

export const Container = styled.span`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
`;
