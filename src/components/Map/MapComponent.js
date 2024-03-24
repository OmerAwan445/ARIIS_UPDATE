'use client';

import { useEffect } from "react";
import { MapContainer, Polyline, Popup, TileLayer } from "react-leaflet";

const MapComponent = ({ state, handleClickOnMapSectionLines }) => {

  function handlerClickMapLines(e){
    const line_section_id = e.target?.closest('path')?.getAttribute('stroke-dashoffset');
    if(!line_section_id) return;
    handleClickOnMapSectionLines (line_section_id);
  }

  useEffect(() => {
    const tileElement = document.getElementById('map-tile');
    if (!tileElement) return;

    tileElement.addEventListener('click', handlerClickMapLines);

    // Cleanup function to remove event listener
    return () => {
      tileElement.removeEventListener('click', handlerClickMapLines);
    };
  }, []);



  const position = [state.lat, state.lng];
  return (
    <div id="map">
      <MapContainer
        style={{ height: 'calc(100vh - 60px)' }}
        center={position}
        zoom={state.zoom}
        id= "map-tile"
      >
        <TileLayer
          url="https://api.mapbox.com/styles/v1/drdave/ckssg5zeu81ny17rkx0rudqof/tiles/{z}/{x}/{y}?access_token={accessToken}"
          accessToken="pk.eyJ1IjoiZHJkYXZlIiwiYSI6ImNqdzJ1N245eTEwa2Y0YXFxbDB1eno5czkifQ.0VTfoQjwGlIW-e8Lx9Zv9g"
          tileSize={512}
          zoomOffset={-1}
          maxZoom={18}
          maxNativeZoom={18}
        />
        {state.polylineData.map(({section_id, id, from_lat, from_long, to_lat, to_long, color }) => (
          <Polyline
            dashOffset={section_id}
            key={id}
            positions={[
              [parseFloat(from_lat), parseFloat(from_long)],
              [parseFloat(to_lat), parseFloat(to_long)],
            ]}
            color={color}
            weight={1}
          >
            {/* <Popup>{`This is a ${color} line`}</Popup> */}
          </Polyline>
        ))}
      </MapContainer>
      </div>
    );
};

export default MapComponent;