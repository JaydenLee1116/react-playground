import { Table } from 'react-bootstrap';
import { Children, memo, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeAge } from './../store/userSlice';
import { addCount, subtractCount, deleteCart } from './../store/itemSlice';

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch(); // store.js에게 요청을 보내주는 함수

  return (
    <div>
      {state.user.name}의 장바구니
      <button onClick={() => dispatch(changeAge(100))}>{state.user.age}</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>추가</th>
            <th>제거</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, i) => (
            <tr key={state.cart[i].id}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeName());
                    dispatch(addCount(item.id));
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeName());
                    if (state.cart[i].count <= 1) {
                      dispatch(deleteCart(item.id));
                    } else {
                      dispatch(subtractCount(item.id));
                    }
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
