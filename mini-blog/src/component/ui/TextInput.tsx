import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  width: calc(100% - 2rem);
  ${(props: TextInputType) => props.height && `height: ${props.height}px;`}
  padding: 2rem;
  font-size: 2rem;
  line-height: 20px;
`;

interface TextInputType {
  height: number;
  value: string;
  onChange: (e: any) => void;
}

function TextInput(props: TextInputType) {
  const { height, value, onChange } = props;

  return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;
