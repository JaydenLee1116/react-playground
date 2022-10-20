import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 2rem);
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid grey;
  border-radius: 0.5rem;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
`;

const ContentText = styled.p`
  font-size: 1rem;
  white-space: pre-wrap;
`;

function CommentListItem(props: { comment: any }) {
  const { comment } = props;

  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
}

export default CommentListItem;
