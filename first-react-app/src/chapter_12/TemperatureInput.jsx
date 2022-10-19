import React, { useState, useEffect } from 'react';

const scaleNames = {
  c: '섭씨',
  f: '화씨',
};

function TemperatureInput({ temperature, scale, onTemperatureChange }) {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>온도를 입력해주세요(단위: {scaleNames[scale]}</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;
