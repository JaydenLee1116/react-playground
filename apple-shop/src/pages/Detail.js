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

  return (
    <div className="container">
      <Button color="tomato">버튼</Button>
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
        <div className="col-md-6">
          <h4 className="pt-5">
            {shoes.find((item) => item.id === Number(id)).title}
          </h4>
          <p>{shoes.find((item) => item.id === Number(id)).content}</p>
          <p>{shoes.find((item) => item.id === Number(id)).price} 원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
