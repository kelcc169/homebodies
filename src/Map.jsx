import React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import ShelterPin from './ShelterPin';
import ShelterPopup from './ShelterPopup';

const TOKEN = 'pk.eyJ1Ijoia2VsY2MxNjkiLCJhIjoiY2p4YzFnODJhMGh4dDN5bWFkOHdpaGxkYSJ9.P05Jkczde1J1vx7262976A'

class Map extends React.Component {
  state = {
    viewport: {
      width: '100vw',
      height: '50vh',
      latitude: 47.617170,
      longitude: -122.326948,
      zoom: 10
    },
    popupInfo: null
  };

  _onViewportChange = viewport => this.setState({viewport});

  _renderShelterMarker = (shelter, index) => {
    return (
      <Marker key={`marker-${index}`} longitude={shelter.lng} latitude={shelter.lat}>
        <ShelterPin size={20} onClick={() => this.setState({popupInfo: shelter})} />
      </Marker>
    );
  };

  _renderPopup() {
    const {popupInfo} = this.state;
    
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.lng}
          latitude={popupInfo.lat}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <ShelterPopup info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={TOKEN}
        >
          {this.props.shelters.map(this._renderShelterMarker)}
          {this._renderPopup()} 
      </ReactMapGL>
    );
  }
}

export default Map;