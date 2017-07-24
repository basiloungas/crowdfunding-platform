import React from 'react';
import {
  compose,
  withProps,
} from 'recompose';

import {Loader} from './styled';

const sizeMapper = {
  small: '15px',
  medium: '30px',
  big: '60px',
  huge: '80px',
}

export const LoaderContainer = (props) => {
  const {
    size = 'medium',
    color = 'black',
  } = props;

  return <Loader
    className="loader"
    color={color}
    size={sizeMapper[size]}
  />;
};

export const SmallLoader = compose(
  withProps({size: 'small'})
)(LoaderContainer);

export const BigLoader = compose(
  withProps({size: 'big'})
)(LoaderContainer);

export const HugeLoader = compose(
  withProps({size: 'huge'})
)(LoaderContainer);

export default LoaderContainer;
