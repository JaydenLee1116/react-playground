import React, { useState, useEffect, useRef } from 'react';

function Test(props) {
  const [count, setCount] = useState(0);

  const onClick = () => {
    if (count === 0) {
      setCount(1);
    } else {
      setCount(0);
    }
  };

  useEffect(() => {
    console.log(`${count}번 눌렀다`);
    console.log(ref.current);
    return () => console.log('마운트 해제');
  }, [count]);

  const ref = useRef(0);

  return <div onClick={onClick}>{count}</div>;
}

export default Test;
