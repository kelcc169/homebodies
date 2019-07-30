import React from 'react';
import Map from './Map';
import ShelterList from './ShelterList';

const SearchResults = (props) => {
  return(
    <div>
      <TopNav />
      <div className="map" >
        <Map shelters={props.locations} />
      </div>
      <div className="list" >
        <ShelterList locations={props.locations} 
                    selectedLocation={props.selectedLocation} />
      </div>
    </div>
  )
}

export default SearchResults;