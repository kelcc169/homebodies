import React from 'react';
import Map from './Map';
import ShelterList from './ShelterList';

const SearchResults = (props) => {
  return(
    <div>
      {/* <Map shelters={props.shelters} /> */}
      <ShelterList locations={props.locations} 
                    selectedLocation={props.selectedLocation} 
                    handleDetailsClick={props.handleDetailsClick} />
    </div>
  )
}

export default SearchResults;