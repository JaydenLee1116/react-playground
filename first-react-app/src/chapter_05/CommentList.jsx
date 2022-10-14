import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '제이든',
    comment: '생명의 유일한 증거는 성장이다!',
  },
  {
    name: '호두',
    comment: '산책가자~',
  },
  {
    name: '움밤',
    comment: '좀만 더 잘게',
  },
];

export default function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment name={comment.name} comment={comment.comment} />
      ))}
      {[<Comment />, <Comment />]}
    </div>
  );
}
