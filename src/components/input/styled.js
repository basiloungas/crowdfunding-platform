import styled from 'styled-components';

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Label = styled.label`
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  box-shadow: inset 0px 0px 0px 1px #ccc;
  border: none;
  border-radius: 3px;
  line-height: 1;
  padding: 10px 20px;
  background: white;
  color: black;

  &:disabled {
    background: #ddd;
    cursor: initial;
  }
`;
