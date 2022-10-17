import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = inputs;

  const nameInput = useRef();

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputs({ ...inputs, [name]: value });
  };
  const onReset = () => {
    setInputs({ name: '', nickname: '' });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        placeholder="이름"
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        onChange={onChange}
        placeholder="닉네임"
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
