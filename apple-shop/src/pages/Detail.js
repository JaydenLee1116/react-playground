import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Context1 } from './../App';

import cart from './../store';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../store/itemSlice';

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
  let [fade2, setFade2] = useState('');
  let state = useSelector((state) => state);

  let dispatch = useDispatch();

  useEffect(() => {
    let timer = setTimeout(() => setAlert(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isNaN(money) === true) console.log('숫자가 아닙네다');
  }, [money]);

  useEffect(() => {
    setFade2('end');
  }, []);
  // 누가 디티엘 페이지 접속하면 그 페이지에 보이는 상품 id를 가져와서
  // 로컬스토리이지에 watched 항목 추가하기
  // useEffect(() => {
  //   let tempId = shoes.find((item) => item.id === Number(id)).id;
  // }, []);

  return (
    <div className={`container start ${fade2}`}>
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
          <button
            className="btn btn-danger"
            onClick={() => {
              let name = shoes.find((item) => item.id === Number(id)).title;
              let temp = {
                id: shoes.find((item) => item.id === Number(id)).id,
                name: name,
                count: 1,
              };
              if (state.cart.filter((item) => item.id === temp.id)[0]) return;
              dispatch(updateCart(temp));
            }}
          >
            구매하기
          </button>
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
        <TabContent tab={tab} shoes={shoes} />
      </div>
    </div>
  );
}

function TabContent({ tab }) {
  let [fade, setFade] = useState('');
  let { stock } = useContext(Context1);

  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 10);
    return () => setFade('');
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {stock}
      {[<div>000</div>, <div>111</div>, <div>222</div>][tab]}
    </div>
  );
}

export default Detail;
