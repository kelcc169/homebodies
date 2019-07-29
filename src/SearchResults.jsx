import React from 'react';
import Map from './Map';
import ShelterList from './ShelterList';

const SearchResults = (props) => {
  return(
    <div>
      <Map />
      <ShelterList locations={props.locations}/>
    </div>
  )
}

export default SearchResults;