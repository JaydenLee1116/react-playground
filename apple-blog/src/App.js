import './App.css';
import { useState } from 'react';
function App() {
  // 서버에서 가져온 데이터라고 가정하자.
  let [title, setTitle] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '타입스크립트 독학',
  ]);
  let [count, setCount] = useState(Array(title.length).fill(0));
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState('');

  function handleCount(i) {
    let temp = [...count];
    temp[i] = temp[i] + 1;
    setCount(temp);
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

  function handleModal(i) {
    if (!modal) {
      setModalTitle(title[i]);
    }
    setModal(!modal);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>
          React-Blog <span onClick={handleGender}>🍎</span>
        </h4>
      </div>
      <button onClick={handleSort}>정렬하기</button>
      {title.map((title, i) => (
        <div className="list">
          <h4 onClick={() => handleModal(i)}>
            {title}
            <span
              onClick={(e) => {
                handleCount(i);
                e.stopPropagation();
              }}
            >
              {' '}
              👍{' '}
            </span>
            {count[i]}
          </h4>
          <p>2월 17일 발행</p>
        </div>
      ))}

      {modal ? <Modal title={modalTitle} backgroundColor={'tomato'} /> : null}
    </div>
  );
}

function Modal({ title, backgroundColor, handleGender }) {
  return (
    <div className="modal" style={{ background: backgroundColor }}>
      <h4>{title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={handleGender}>글수정</button>
    </div>
  );
}

export default App;
