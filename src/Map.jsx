import React from 'react';
import ReactMapGL from 'react-map-gl';

const TOKEN = 'pk.eyJ1Ijoia2VsY2MxNjkiLCJhIjoiY2p4YzFnODJhMGh4dDN5bWFkOHdpaGxkYSJ9.P05Jkczde1J1vx7262976A'

class Map extends React.Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 47.617170,
      longitude: -122.326948,
      zoom: 10
    }
  };

  
  render() {
    
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={TOKEN}
      />
    );
  }
}

export default Map;