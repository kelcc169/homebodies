import React from 'react';
import TopNav from './TopNav';

const ShelterDetail = (props) => {
  //const shelter = props.selectedLocation ? props.selectedLocation : [];
  return(
    <>
    <TopNav />
    <div>
        <h3>Location Details</h3>
        {/* {props.locations.map(location => ( */}
          <div>
            <h4>{props.selectedLocation.name}</h4>
            <h5>{props.selectedLocation.address}</h5>
            <h5>Working Hours:</h5>
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