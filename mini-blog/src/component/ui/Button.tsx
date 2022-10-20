import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px;
  border-radius: 0.5rem;
  cursor: pointer;
`;

function Button(props: { title: string; onClick: () => void }) {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{title || 'button'}</StyledButton>;
}

export default Button;
