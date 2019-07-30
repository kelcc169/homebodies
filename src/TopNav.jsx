import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Button from 'react-bootstrap/Button';

const TopNav = (props) => (
  <Navbar expand="sm" variant="light" bg="light" fixed="top" className="topnav" >
    <Button variant="light"><i className="fas fa-chevron-left"></i></Button>
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}><i className="fas fa-bars"></i></Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>      
          <div>Sign In</div>
      </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Navbar>
)
export default TopNav;