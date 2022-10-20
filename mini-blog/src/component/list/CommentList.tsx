import React from 'react';
import styled from 'styled-components';
import CommentListItem from './CommentListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & > * {
    :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

function CommentList(props: {
  comments: { id: number; content: string }[] | undefined;
}) {
  const { comments } = props;

  return (
    <Wrapper>
      {comments?.map((comment: any) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </Wrapper>
  );
}

export default CommentList;
