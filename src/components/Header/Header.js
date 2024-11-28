import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  useEffect(() => {
    window.addEventListener("scroll", isSticky)
    return () => {
      window.removeEventListener("scroll", isSticky)
    }
  })

  const isSticky = (e) => {
    const header = document.querySelector('.header-section')
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className='header-section'>

      <Container>
        <Navbar expand="lg" className="mb-3">
          <Navbar.Brand to="#" className='nav-logo'>Travel Diaries</Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start" show={open}>
            <Offcanvas.Header>
              <h3>Travel Diaries</h3>
              <span className='ms-auto'>
                <i class="bi bi-x-lg" onClick={toggleMenu}></i>
              </span>

            </Offcanvas.Header>
            <Offcanvas.Body className='mx-5'>
              <Nav className="justify-content-end flex-grow-1 pe-3 ms-auto">
                <Link to="/" className='nav-link mx-2'>Home</Link>
                <Link to="/about" className='nav-link mx-2'>About</Link>
                <Link to="/tours" className='nav-link mx-2'>Tours</Link>
                <Link to="/contact" className='nav-link mx-2'>Contact</Link>
              </Nav>

              {/* Modal */}

              <button className='book-btn btn' onClick={handleShow}>Register</button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Register Here</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>First name</Form.Label>
                      <Form.Control placeholder="First name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control placeholder="Last name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="phone" placeholder="Phone number" />
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="I accept terms & conditions" />
                    </Form.Group>
                  </Form>

                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Register
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* Modal */}

            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className='toggle-btn d-lg-none mx-3'>
            <i class="bi bi-list" onClick={toggleMenu}></i>
          </div>
        </Navbar>

      </Container>

    </header>
  )
}

export default Header