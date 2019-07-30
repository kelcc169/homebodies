import React from 'react';

const ShelterDetail = (props) => {
  return(
    <>
    
    <div>
        <h3>Location Details</h3>
        {/* {props.locations.map(location => ( */}
          <div>
            <h4>{props.selectedLocation.name}</h4>
            <h5>{props.selectedLocation.address}</h5>
            {props.selectedLocation.hours.map(hour => (
              <h6>
                {hour}
              </h6>
            ))}
          </div>
        {/* ))} */}
      </div>
    </>
  )
}

export default ShelterDetail;