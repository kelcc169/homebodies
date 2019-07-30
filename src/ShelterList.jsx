import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const ShelterList = (props) => {
  return(
    <div>
      {props.locations.map((location, i) => (
        <Link to="/show" >
          <Card>
            <Card.Body>
              <Card.Title>
              <Nav expand="xs" variant="light" bg="light" className="pretendnav" >
                <Nav.Item>
                  <Nav.Link href="#" eventKey="disabled" disabled >{location.name}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" eventKey="disabled" disabled >{location.distance}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" eventKey="disabled" disabled >{location.beds}</Nav.Link>
                </Nav.Item>
              </Nav>
              </Card.Title>
              <Card.Text>
                {location.address}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default ShelterList;