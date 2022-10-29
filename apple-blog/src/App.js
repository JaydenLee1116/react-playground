import './App.css';
import React, { useState } from 'react';
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
  let [inputTitle, setInputTitle] = useState('');
  let [date, setDate] = useState(
    Array(title.length).fill([
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getHours(),
      new Date().getMinutes(),
      new Date().getSeconds(),
    ])
  );
  let [modalDate, setModalDate] = useState('');
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
      setModalDate(date[i]);
    }
    setModal(!modal);
  }

  function createItem() {
    if (!inputTitle) return;
    let titleTemp = [...title];
    titleTemp.unshift(inputTitle);
    setTitle(titleTemp);
    let countTemp = [...count];
    countTemp.unshift(0);
    setCount(countTemp);
    let dateTemp = [...date];
    dateTemp.unshift([
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getHours(),
      new Date().getMinutes(),
      new Date().getSeconds(),
    ]);
    setDate(dateTemp);
  }

  function deleteItem(i) {
    let titleTemp = [...title];
    titleTemp.splice(i, 1);
    setTitle(titleTemp);
    let countTemp = [...count];
    countTemp.splice(i, 1);
    setCount(countTemp);
    let dateTemp = [...date];
    dateTemp.splice(i, 1);
    setDate(dateTemp);
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
          <p>
            {date[i][0] + 1}월 {date[i][1]}일 {date[i][2]}시 {date[i][3]}분{' '}
            {date[i][4]}초 발행
          </p>
          <button onClick={() => deleteItem(i)}>삭제하기</button>
        </div>
      ))}

      <input
        onChange={(e) => {
          setInputTitle(e.target.value);
        }}
      />
      <button onClick={createItem}>생성</button>
      {modal ? (
        <Modal title={modalTitle} backgroundColor={'tomato'} date={modalDate} />
      ) : null}
    </div>
  );
}

function Modal({ title, backgroundColor, handleGender, date }) {
  return (
    <div className="modal" style={{ background: backgroundColor }}>
      <h4>{title}</h4>
      <p>
        {date[0] + 1}월 {date[1]}일 {date[2]}시 {date[3]}분 {date[4]}초
      </p>
      <p>상세내용</p>
      <button onClick={handleGender}>글수정</button>
    </div>
  );
}

export default App;

// class Modal2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name : 'lee',
//       age : 31
//     }
//   }
//   render() {
//     return (
//       <div>{this.state.name}</div>
//     )
//   }

// }
