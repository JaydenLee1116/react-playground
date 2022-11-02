import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
let Button = styled.button`
  background: ${({ color }) => color};
  color: ${({ color }) => (color === 'tomato' ? 'white' : 'black')};
  padding: 10px;
`;

let NewButton = styled(Button)`
  padding: 20px;
`;

function Detail({ shoes }) {
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [money, setMoney] = useState('');
  let [tab, setTab] = useState(null);

  useEffect(() => {
    let timer = setTimeout(() => setAlert(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isNaN(money) === true) console.log('숫자가 아닙네다');
  }, [money]);

  return (
    <div className="container">
      {alert && <div className="alert alert-warning">2초이내 구매시 할인</div>}
      {count}
      <Button color="tomato" onClick={() => setCount((count) => count + 1)}>
        카운트버튼
      </Button>
      <Button color="yellowgreen">버튼</Button>
      <NewButton color="blue">새로운 버튼</NewButton>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              Number(id) + 1
            }.jpg`}
            width="100%"
            alt=""
          />
        </div>
        {isNaN(Number(money)) && <div>숫자가 아닙니다!</div>}
        <input
          onChange={(e) => {
            setMoney(e.target.value);
          }}
        />
        <div className="col-md-6">
          <h4 className="pt-5">
            {shoes.find((item) => item.id === Number(id)).title}
          </h4>
          <p>{shoes.find((item) => item.id === Number(id)).content}</p>
          <p>{shoes.find((item) => item.id === Number(id)).price} 원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
        <div className="container">
          <Button color={'grey'} onClick={() => setTab(0)}>
            텝111111
          </Button>
          <Button color={'skyblue'} onClick={() => setTab(1)}>
            텝22222
          </Button>
          <Button color={'green'} onClick={() => setTab(2)}>
            텝33333
          </Button>
        </div>
        {/* {tab === 0 ? (
          <div>111</div>
        ) : tab === 1 ? (
          <div>222</div>
        ) : tab === 2 ? (
          <div>333</div>
        ) : null} */}
        <TabContent tab={tab} />
      </div>
    </div>
  );
}

function TabContent({ tab }) {
  if (tab === 0) {
    return <div>000</div>;
  } else if (tab === 1) {
    return <div>111</div>;
  } else if (tab === 2) {
    return <div>222</div>;
  }
}

export default Detail;
