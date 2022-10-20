import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';

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

function PostList(props: {
  posts: { id: number }[];
  onClickItem: (post: any) => void;
}) {
  const { posts, onClickItem } = props;

  return (
    <Wrapper>
      {posts.map((post) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => onClickItem(post)}
          />
        );
      })}
    </Wrapper>
  );
}

export default PostList;
