'use client';

import { MapContainer, Polyline, Popup, TileLayer } from "react-leaflet";

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
          url="https://api.mapbox.com/styles/v1/drdave/ckssg5zeu81ny17rkx0rudqof/tiles/{z}/{x}/{y}?access_token={accessToken}"
          accessToken="pk.eyJ1IjoiZHJkYXZlIiwiYSI6ImNqdzJ1N245eTEwa2Y0YXFxbDB1eno5czkifQ.0VTfoQjwGlIW-e8Lx9Zv9g"
          tileSize={512}
          zoomOffset={-1}
          maxZoom={18}
          maxNativeZoom={18}
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