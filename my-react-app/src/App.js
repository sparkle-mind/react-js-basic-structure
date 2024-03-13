import './style.scss';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap css linked
import "bootstrap/dist/js/bootstrap.bundle.js"; // bootstrap js linked(optional)


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

// Import Swiper styles
import 'swiper/css';

function App() {
  // javascript write here ===============
  // ====== Modals ========
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ====== Modals ========

  return (
    // HTML code write here ===============
    <>
      <header className='header'>
        <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Brand href="#home">
              <img src='./images/logo.svg' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="About" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>
      <section className='hero-section-home'>
        <div className='hero-inner'>
          <Container>
            <Row className='text-center'>
              <Col lg={12}>
                <h1>hero section</h1>
              </Col>
              <Col lg={12}>
                <p>Run the React Application
                  Now you are ready to run your first real React application!
                  Run this command to move to the my-react-app directory:
                </p>
              </Col>
            </Row>
          </Container>
        </div>

      </section>
      <section className='card-section'>
        <div className='card-section-inner'>
          <Container>
            <Row>
              <Col md={4} xs={12}>
                <Card>
                  <Card.Img variant="top" src="images/cs-1.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} xs={12}>
                <Card>
                  <Card.Img variant="top" src="images/hero-main.png" />
                  <Card.Body>
                    <Card.Title>Card Title 2</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} xs={12}>
                <Card>
                  <Card.Img variant="top" src="images/cs-1.png" />
                  <Card.Body>
                    <Card.Title>Card Title-3</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className='swiper-slider-section'>
        <div className='swiper-slider-inner'>
          <Container>
            <div className='swiper-wrp'>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className='slider-slide-in'>
                    <h1>SLide-1</h1>
                    <p>Run the React Application Now you are ready to run your first real React application! Run this command to move to the my-react-app directory:</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slider-slide-in'>
                    <h1>SLide-2</h1>
                    <p>Run the React Application Now you are ready to run your first real React application! Run this command to move to the my-react-app directory:</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slider-slide-in'>
                    <h1>SLide-3</h1>
                    <p>Run the React Application Now you are ready to run your first real React application! Run this command to move to the my-react-app directory:</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slider-slide-in'>
                    <h1>SLide-4</h1>
                    <p>Run the React Application Now you are ready to run your first real React application! Run this command to move to the my-react-app directory:</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Container>
        </div>

      </section>
      <section className='modal-section'>
        <div className='modal-inner'>
          <Container>
            <Row>
              <Col>
                <h2>bootstrap Modal </h2>
                <Button variant="primary" onClick={handleShow}>
                  Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default App;
