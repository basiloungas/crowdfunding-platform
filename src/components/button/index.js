import React from 'react';
import {GreenButton, GreyButton} from './styled';

export default (props) => {
  const {
    color = 'grey',
    clickHandler = () => {},
    urlTo,
    disabled,
    children,
  } = props;

  const Button = (color === 'green'
    ? GreenButton
    : GreyButton
  );

  if (urlTo) {
    return <Button to={urlTo} disabled={disabled}>{children}</Button>
  }

  const ButtonSimple = Button.withComponent('button');

  return <ButtonSimple onClick={clickHandler} disabled={disabled}>{children}</ButtonSimple>
};
