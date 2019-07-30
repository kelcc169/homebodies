import React from 'react';
import { Link } from 'react-router-dom';

const ShelterList = (props) => {
  return(
      <div>
        {props.locations.map((location, i) => (
          <div> 
            <h3 key={i}>{location.name}</h3>
            <p>{location.address}</p>
            <p>Hours of Operation:</p>
            <button type="button" onClick={(e) => props.handleDetailsClick(e, i)}>
              <Link to={`/show/${location.name}`}>
                SEE DETAILS
              </Link>
            </button>
          </div>
        ))}
      </div>
  )
}

export default ShelterList;