import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const LandingPage = (props) => {
  return(
    <>
      <Navbar expand="sm" variant="light" bg="light" fixed="top" className="topnav" >
        <Button variant="light"><i className="fas fa-chevron-left hidden" /></Button>
        <Image src="./images/SafeYouthLogo.png" fluid />
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}><i className="fas fa-bars"></i></Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>      
              <div>Sign In</div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
      <div id="searchstuff">
        <h6 className="mission" style={{marginTop: '95px'}}>Mission:</h6>
        <h6 className="mission">Help youth find a safe place to sleep tonight</h6>
        {/* <img src="http://placekitten.com/g/200/200" /> */}
        <br />
        <h6 style={{textAligh: "left", marginTop: '60px', color:'#030987'}}>Find a bed:</h6>
        <Link to="/results">
        <input style={{textAligh: "left", padding: "5px", fontSize: '15px'}} className="searchbar" type="text" placeholder="🔎 type in zip, neighborhood or school" ></input>
        </Link>
        {/* <Link to="/results"><button type="submit">ENTER</button></Link> */}
      </div>
    </>
  )
}

export default LandingPage;