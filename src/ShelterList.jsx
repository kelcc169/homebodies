import React from 'react';

const ShelterList = (props) => {
  return(
    <>
      <div>
        <h3>Shelter List</h3>
        {props.locations.map(location => (
                <p>{location.name}</p>
        ))}
      </div>
    </>
  )
}

export default ShelterList;