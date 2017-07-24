import React from 'react';
import {Row, Column} from 'hedron';

import Button from '../../../../../../components/button';
import Input from '../../../../../../components/input';

export default (props) => {
  const {
    comment,
    updateComment,
    name,
    updateName,
    email,
    updateEmail,
    loading,
    updateLoading,
    createComment,
    projectId,
  } = props;

  const onInput = updater => e => {
    updater(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    createComment({email, name, comment, projectId})
      .then(() => updateLoading(false));

    updateLoading(true);
  }

  return (
    <Row>
      <Column>
        <form onSubmit={onSubmit}>
          <Input
            label="Add new comment:"
            value={comment}
            placeholder="Your comment..."
            required
            disabled={loading}
            onInput={onInput(updateComment)}
          />
          <Input
            label="Name:"
            value={name}
            placeholder="Your name..."
            required
            disabled={loading}
            onInput={onInput(updateName)}
          />
          <Input
            label="Email:"
            value={email}
            placeholder="Your email..."
            required
            disabled={loading}
            onInput={onInput(updateEmail)}
          />
          <Row>
            <Column>
              <Button
                color="green"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </Column>
          </Row>
        </form>
      </Column>
    </Row>
  );
};
