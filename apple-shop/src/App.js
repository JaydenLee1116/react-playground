import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { lazy, Suspense, useState, createContext, useEffect } from 'react';
import data from './data';
import Card from './components/Card';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
// import Detail from './pages/Detail';
import About from './pages/About';
import Event from './pages/Event';
import axios from 'axios';
// import Cart from './pages/Cart';
import { useQuery } from 'react-query';

export let Context1 = createContext();

const Detail = lazy(() => import('./pages/Detail'));
const Cart = lazy(() => import('./pages/Cart'));

function App() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(false);
  let [loading, setLoading] = useState(false);
  let [stock, setStock] = useState([10, 11, 12]);

  useEffect(() => {
    if (!localStorage.getItem('watched')?.length) {
      localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);

  let navigate = useNavigate();

  let result = useQuery(['temp'], () =>
    axios.get('https://codingapple1.github.io/userdata.json').then((res) => {
      return res.data;
    })
  );
  let [count2, setCount2] = useState(0);
  let [age, setAge] = useState(20);

  useEffect(() => {
    return () => {
      if (count2 < 3) {
        setAge(age + 1);
      }
    };
  }, [count2]);
  return (
    <div className="App">
      <div>
        <div>안녕하십니까 전 {age}</div>
        <button
          onClick={() => {
            setCount2(count2 + 1);
          }}
        >
          누르면한살먹기
        </button>
      </div>
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
            SMITE
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/event')}>Event</Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            {result.isLoading && '로딩중'}
            {result.error && '에러 발생'}
            {result.data && result.data.name}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <aside className="aside">
                <div>최근 본 상품</div>
                {JSON.parse(localStorage.getItem('watched'))
                  ?.reverse()
                  .map((item, i) => (
                    <>
                      <img
                        src={`https://codingapple1.github.io/shop/shoes${
                          i + 1
                        }.jpg`}
                      />
                      <div key={i}>{item}</div>
                    </>
                  ))}
              </aside>
              <div className="container">
                <div className="row">
                  {shoes.map((item, i) => (
                    <Card
                      key={i}
                      imgUrl={`https://codingapple1.github.io/shop/shoes${
                        i + 1
                      }.jpg`}
                      alt={`신발${i + 1}`}
                      width={'80%'}
                      title={item.title}
                      price={item.price}
                      onClick={() => {
                        navigate(`/detail/${i}`);
                        let localItems = JSON.parse(
                          localStorage.getItem('watched')
                        );
                        localItems.push(i);
                        localStorage.setItem(
                          'watched',
                          JSON.stringify([...new Set(localItems)])
                        );
                      }}
                    ></Card>
                  ))}
                </div>
              </div>
              {loading && <p>로딩 중...</p>}
              <button
                onClick={() => {
                  setLoading(true);
                  axios
                    .get(
                      `https://codingapple1.github.io/shop/data${
                        count + 2
                      }.json`
                    )
                    .then((response) => {
                      setShoes([...shoes, ...response.data]);
                      setLoading(false);
                    })
                    .catch(() => {
                      console.log('실패');
                      setLoading(false);
                    });
                  if (count < 2) {
                    setCount((count) => count + 1);
                  } else {
                    setAlert(true);
                  }
                }}
              >
                버튼
              </button>
              {alert && <p>상품이 더 없습니다.</p>}
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Suspense fallback={<div>로딩중</div>}>
              <Context1.Provider value={{ stock }}>
                <Detail shoes={shoes} />
              </Context1.Provider>
            </Suspense>
          }
        />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route>

        <Route
          path="/event"
          element={
            <>
              <Event />
              <p onClick={() => navigate('/event/one')}>1</p>
              <p onClick={() => navigate('/event/two')}>2</p>
            </>
          }
        >
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<div>없는페이지입니다</div>} />
      </Routes>
    </div>
  );
}

export default App;
