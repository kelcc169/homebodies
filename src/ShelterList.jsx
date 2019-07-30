import React from 'react';
import { Link } from 'react-router-dom';

const ShelterList = (props) => {
  return(
    <>
      <div>
        <h3>Shelter List</h3>
        {props.locations.map((location, i) => (
          <div> 
              <h3 key={i}>{location.name}</h3>
            <p>{location.address}</p>
            {/* <p>Hours of Operation:</p>
            {location.hours.map(hour => (
              <p>
                {hour}
              </p>
            ))} */}
            
            <Link to={"/show"}>
              <button type="button">
                  SEE DETAILS
              </button>
            </Link>
            
          </div>
        ))}
      </div>
    </>
  )
}

export default ShelterList;