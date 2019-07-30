import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Button from 'react-bootstrap/Button';

const LandingPage = (props) => {
  return(
    <>
    <Navbar expand="sm" variant="light" bg="light" fixed="top" className="topnav" >
      <Button variant="light"></Button>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}><i className="fas fa-bars"></i></Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>      
            <div>Sign In</div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
    <div>
      <h1>Welcome to the Shelter App</h1>
      <img src="http://placekitten.com/g/200/200" />
      <br />
      <input type="text" placeholder="Please enter your location..."></input>
      <br />
      <Link to="/results"><button type="submit">ENTER</button></Link>

    </div>
    </>
  )
}

export default LandingPage;