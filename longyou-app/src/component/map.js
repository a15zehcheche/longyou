import React, { Component } from 'react';
import '../App.css';

class Map extends Component {

  render() {
    return (
      <div className="mapcontainer">
        <div className="map">
          <img width="100%" src="./map.png" alt="map" />
          <div id="bottomLeft">bottomLeft</div>
          <div id="bottomRight">bottomRight</div>
          <div id="topLeft">topLeft</div>
          <div id="topRight">topRight</div>
        </div>
      </div>
    );
  }
}
export default Map; // Don’t forget to use export default!