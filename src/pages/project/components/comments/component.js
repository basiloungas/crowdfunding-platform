import React from 'react';
import {Column} from 'hedron';

import UserDetails from '../../../../components/user-details';
import {dateFromNow} from '../../../../utils/helpers';

import NewCommentForm from './components/new-comment-form';

import {Comment, DateContainer, TextContainer} from './styled';

export default (props) => {
  const {comments, projectId} = props;

  return (
    <div>
      {comments.map(comment => (
        <Comment key={comment.id}>
          <Column>
            <p>
              <UserDetails user={comment.user} />
              <DateContainer>
                {dateFromNow(comment.createdAt)}
              </DateContainer>
            </p>
            <TextContainer>{comment.text}</TextContainer>
          </Column>
        </Comment>
      ))}
      <NewCommentForm projectId={projectId} />
    </div>
  );
}

