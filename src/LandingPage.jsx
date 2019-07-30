import React from 'react';

const LandingPage = (props) => {
  return(
    <>
    <div>
      <h1>Welcome to the Shelter App</h1>
      <img src="http://placekitten.com/g/200/200" />
      <br />
      <input type="text" placeholder="Please enter your location..."></input>
      <br />
      <button type="submit">ENTER</button>

    </div>
    </>
  )
}

export default LandingPage;