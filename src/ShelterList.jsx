import React from 'react';
import { Link } from 'react-router-dom';

const ShelterList = (props) => {
  return(
    <>
      <div>
        <h3>Shelter List</h3>
        {props.locations.map(location => (
          <div>
            {location.hours.map(hour => (
                  <p>
                    {hour}
                  </p>
                ))}
            <span> <Link to={`/show${location.name}`}>
                {location.name}
              </Link>
            </span>
                {/* <h4>{location.name}</h4> */}
                <p>{location.address}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default ShelterList;