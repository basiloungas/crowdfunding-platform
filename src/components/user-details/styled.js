import styled from 'styled-components';

export const Container = styled.span`
  padding: 4px 8px;
  display: inline-block;
  border-radius: 3px;
  box-shadow: ${props => props.withContainer ? 'inset 0px 0px 0px 1px #ccc' : 'none'};
  background: ${props => props.withContainer ? '#fff' : 'inherit'};
`;

export const Thumb = styled.span`
  display: inline-block;
  margin-right: 6px;
`

export const Name = styled.b`
`
