import React from 'react';
import styled from 'styled-components';

function Button(props) {
  return (
    <Wrapper>
      <button onClick={props.isClicked}>제이든</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: red;
`;

export default Button;
