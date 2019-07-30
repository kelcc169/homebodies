import React from 'react';
import TopNav from './TopNav';

const ShelterDetail = (props) => {
  //const shelter = props.selectedLocation ? props.selectedLocation : [];
  return(
    <>
    <TopNav />
    <div>
        <h4 style={{textAlign: "center"}}>{props.selectedLocation.name}</h4>
        <p id="callbutton">Call</p>
          <div className='infowrap'>
            <div className="displayinfo" style={{display: "inline-block"}}>
              <img src="./images/orion.png" style={{height: "130px", width: "200px"}}/>
              {/* <h5>{props.selectedLocation.address}</h5> */}
            </div>
            <div className="displayinfo" style={{display: "inline-block"}}>
              <p className="titles">Hours of Availability</p>
              {props.selectedLocation.hours.map(hour => (
                <p style={{lineHeight: "1px", fontStyle: "italic"}}>
                  {hour}
                </p>
              ))}
            </div>
          </div>
          <div className='infowrap'>
            <div className="displayinfo" style={{display: "inline-block"}}>
              <p className="titles">Offers:</p>
              {props.selectedLocation.offers.map(offer => (
                <p style={{lineHeight: "1px"}}>
                  {offer}
                </p>
              ))}
            </div>
            <div className="displayinfo" style={{display: "inline-block"}}>
            <p className="titles">Qualificatins:</p>
            {props.selectedLocation.qualifications.map(qualification => (
              <p style={{lineHeight: "1px"}}>
                {qualification}
              </p>
            ))}
            </div>
            
          </div>
      </div>
    </>
  )
}

export default ShelterDetail;