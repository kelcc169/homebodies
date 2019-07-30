import React from 'react';
import Map from './Map';
import ShelterList from './ShelterList';

const SearchResults = (props) => {
  return(
    <div>
      <Map shelters={props.shelters} />
      <ShelterList locations={props.shelters} selectedLocation={props.selectedLocation} />
    </div>
  )
}

export default SearchResults;