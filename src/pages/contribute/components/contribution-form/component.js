import React from 'react';
import {Row, Column} from 'hedron';
import { Prompt } from 'react-router'

import Button from '../../../../components/button';
import Input from '../../../../components/input';

export default (props) => {
  const {
    amount,
    email,
    name,
    changeAmount,
    changeEmail,
    changeName,
    currency,
    loading,
    updateLoading,
    createContribution,
    projectId,
  } = props;

  const onInput = updater => e => {
    updater(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();

    const data = {
      email,
      name,
      amount,
      currency,
      projectId,
    };

    createContribution(data)
      .then(() => {
        changeAmount(0);
        changeEmail('');
        changeName('');
        updateLoading(false)
      });

    updateLoading(true);
  }

  const formIsHalfFilledOut = (amount !== 0 || email !== '' || name !== '');

  return (
    <form onSubmit={onSubmit} >
      <Prompt
        when={formIsHalfFilledOut}
        message="Are you sure you want to leave? You are half way there into making this contribution."
      />

      <Input
        label={`Amount: (${currency})`}
        type="number"
        value={amount}
        min="0.01"
        step="0.01"
        required
        disabled={loading}
        onInput={onInput(changeAmount)}
      />

      <Input
        label="Name:"
        value={name}
        placeholder="Enter your name"
        required
        disabled={loading}
        onInput={onInput(changeName)}
      />

      <Input
        label="Email:"
        type="email"
        value={email}
        placeholder="Enter your email"
        required
        disabled={loading}
        onInput={onInput(changeEmail)}
      />

      <Row>
        <Column>
          <Button
            color="green"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Placing contribution...' : 'Place contribution'}
          </Button>
        </Column>
      </Row>
    </form>
  );
}
