import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 2rem);
  padding: 1rem;
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

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

function PostListItem(props: { post: any; onClick: () => void }) {
  const { post, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  );
}

export default PostListItem;
