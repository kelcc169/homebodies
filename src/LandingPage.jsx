import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
  return(
    <>
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