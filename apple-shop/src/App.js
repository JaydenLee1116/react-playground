import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import Card from './components/Card';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import About from './pages/About';
import Event from './pages/Event';

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
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
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
            <Nav.Link onClick={() => navigate('/event')}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((item, i) => (
                    <Card
                      imgUrl={`https://codingapple1.github.io/shop/shoes${
                        i + 1
                      }.jpg`}
                      alt={`신발${i + 1}`}
                      width={'80%'}
                      title={item.title}
                      price={item.price}
                    ></Card>
                  ))}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

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

        <Route path="*" element={<div>없는페이지입니다</div>} />
      </Routes>
    </div>
  );
}

export default App;
