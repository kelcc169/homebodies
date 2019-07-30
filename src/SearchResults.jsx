import React from 'react';
import Map from './Map';
import TopNav from './TopNav';
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
                    selectedLocation={props.selectedLocation} 
                    handleDetailsClick={props.handleDetailsClick} />
      </div>
    </div>
  )
}

export default SearchResults;