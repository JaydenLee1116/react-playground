import React from 'react';
import styled from 'styled-components';

function Button(props) {
  return (
    <Wrapper>
      <button>제이든</button>
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: tomato;
`;

export default Button;
