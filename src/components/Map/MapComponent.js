import React, { useState, useEffect } from "react";
import { Map, TileLayer, Polyline, MapContainer, Popup } from "react-leaflet";

const MapComponent = ({state}) => {

  const position = [state.lat, state.lng];

  return (
    <div id="map">
      <MapContainer
        style={{ height: 'calc(100vh - 60px)' }}
        center={position}
        zoom={state.zoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {state.polylineData.map(({ id, from_lat, from_long, to_lat, to_long, color }) => (
          <Polyline
            key={id}
            positions={[
              [parseFloat(from_lat), parseFloat(from_long)],
              [parseFloat(to_lat), parseFloat(to_long)],
            ]}
            color={color}
            weight={1}
          >
            <Popup>{`This is a ${color} line`}</Popup>
          </Polyline>
        ))}
      </MapContainer>
      </div>
    );
};

export default MapComponent;