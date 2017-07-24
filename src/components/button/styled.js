import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 3px;
  text-align: center;
  display:block;
  transition: all 0.25s ease-in-out;
  line-height: 1;
  cursor:pointer;

  &:hover {
    transform: translateY(-1px);
    text-decoration: none;
  }

  &:disabled {
    background: #999 !important;
    color: #444 !important;
    transform: none !important;
    cursor: initial;
    box-shadow: none !important;
  }
`;

export const GreyButton = Button.extend`
  box-shadow: inset 0px 0px 0px 1px #999;
  background: #eee;
  color: #333;

  &:hover {
    transform: translateY(-1px);
    text-decoration: none;
    background: #ddd;
    color: #333;
  }
`;

export const GreenButton = Button.extend`
	box-shadow: inset 0px 0px 0px 1px #05AF3C;
  background: #25CB68;
  color: white;

  &:hover {
    transform: translateY(-1px);
    text-decoration: none;
    background: #05AF3C;
    color: white;
  }
`;

