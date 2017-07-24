import React from 'react';
import {Row, Column} from 'hedron';
import renderHTML from 'react-render-html';

export default (props) => {
  const {
    data,
  } = props;

  return (
    <Row>
      <Column>
        {renderHTML(data)}
      </Column>
    </Row>
  );
}

