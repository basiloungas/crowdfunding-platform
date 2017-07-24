import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  background: #333;
  color: #eee;
  border-top: 1px solid #ddd;

  & a{
    color: inherit;
  }

  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;
