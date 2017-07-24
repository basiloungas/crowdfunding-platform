import React from 'react';
import {Row, Column} from 'hedron';

import {
  Label,
  LabelContainer,
  Input,
} from './styled';

export default (props) => {
  const {
    type = "text",
    value,
    onInput,
    label,
    ...inputProps,
  } = props;
  return (
    <Row>
      <Column md={2}>
        <LabelContainer>
          <Label>{label}</Label>
        </LabelContainer>
      </Column>

      <Column md={10}>
        <Input
          type={type}
          value={value}
          {...inputProps}
          onInput={onInput}
        />
      </Column>
    </Row>
  );
}
