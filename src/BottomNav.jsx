import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const BottomNav = (props) => (
  <Navbar expand="sm" variant="light" bg="light" fixed="bottom">
    <Container>
      <Button variant="outline-primary" className="icons">
        <i className="fas fa-utensils"></i>
        <div>Food</div>
      </Button>
      <Button variant="primary" className="icons">
        <i className="fas fa-home"></i>
        <div>Shelter</div>
      </Button>
      <Button variant="outline-primary" className="icons">
        <i className="fas fa-heartbeat"></i>
        <div>Health</div>
      </Button>
      <Button variant="outline-primary" className="icons">
        <i className="fas fa-tshirt"></i>
        <div>Clothes</div>
      </Button>
      <Button variant="outline-primary" className="icons">
        <i className="fas fa-gift"></i>
        <div>Donate</div>
      </Button>
    </Container>
  </Navbar>
)
export default BottomNav;