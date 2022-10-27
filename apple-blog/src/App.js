import './App.css';
import { useState } from 'react';
function App() {
  // 서버에서 가져온 데이터라고 가정하자.
  let [title, setTitle] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '타입스크립트 독학',
  ]);
  let [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  function handleGender() {
    let temp = [...title];
    temp[0] = '여자 코트 추천';
    setTitle(temp);
  }

  function handleSort() {
    let temp = [...title.sort()];
    setTitle(temp);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>
          React-Blog <span onClick={handleGender}>🍎</span>
        </h4>
      </div>
      <button onClick={handleSort}>정렬하기</button>

      {title.map((title) => (
        <div className="list">
          <h4>
            {title} <span onClick={handleCount}>👍</span> {count}
          </h4>
          <p>2월 17일 발행</p>
        </div>
      ))}
    </div>
  );
}

export default App;
