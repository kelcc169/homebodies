import React from 'react';
import { Link } from 'react-router-dom';

const ShelterList = (props) => {
  return(
    <>
      <div>
        <h3>Shelter List</h3>
        {props.locations.map((location, i) => (
          <div> 
            {/* <Link to={`/show/${location.name}`}> */}
              <h3 key={i}>{location.name}</h3>
            {/* </Link> */}
            {/* <h4>{location.name}</h4> */}
            <p>{location.address}</p>
            <p>Hours of Operation:</p>
            {location.hours.map(hour => (
              <p>
                {hour}
              </p>
            ))}
            <button type="button" onClick={(e) => props.handleDetailsClick(e, i)}>
              <Link to={`/show/${location.name}`}>
                SEE DETAILS
              </Link>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default ShelterList;