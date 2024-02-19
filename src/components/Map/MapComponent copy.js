import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup, MapContainer, Polyline } from "react-leaflet";
import proj4 from 'proj4';

const MapComponent = () => {
  const [state, setState] = useState({
    lat: 12.92415,
    lng: 77.67229,
    zoom: 9,
    excelData: {
      easting: [],
      northing: [],
      points: [], // Add points property to store POINT values
    },
    data: [], // Add data property to store the desired format
    validLatLngObjects: [],
  });

  const utmProjection = '+proj=utm +zone=40R +datum=WGS84 +units=m +no_defs';
  const wgs84Projection = '+proj=longlat +datum=WGS84 +no_defs';

  useEffect(() => {
    // Fetch Excel data when the component mounts
    const fetchExcelData = async () => {
      try {
        // Example data for demo
        const demoData = [
          { POINT: 'A', EASTING: 495826.79117, NORTHING: 2794807.8545 },
          { POINT: 'B', EASTING: 495904.83451, NORTHING: 2794811.76926 },
          { POINT: 'C', EASTING: 495945.98545, NORTHING: 2794815.61071 },
          // Add more data as needed
        ];

        // Separate Easting, Northing, and POINT values
        const eastingValues = demoData.map(entry => entry.EASTING);
        const northingValues = demoData.map(entry => entry.NORTHING);
        const pointValues = demoData.map(entry => entry.POINT);

        // Ensure that the number of Easting, Northing, and POINT values match
        if (eastingValues.length !== northingValues.length || eastingValues.length !== pointValues.length) {
          console.error('Mismatch in the number of Easting, Northing, and POINT values');
          return;
        }

        // Create LatLng objects only for valid coordinates
        const validLatLngObjects = eastingValues.map((eastingValue, index) =>
          proj4(utmProjection, wgs84Projection, [eastingValue, northingValues[index]])
        );

        // Log latitude and longitude to the console
        validLatLngObjects.forEach(latLng => {
          console.log(`Latitude: ${latLng[1]}, Longitude: ${latLng[0]}`);
        });

        // Create data in the desired format
        const data = validLatLngObjects.map((latLng, index) => ({
          from_lat: state.lat,
          from_long: state.lng,
          id: `ID_${index}`,
          to_lat: latLng[1],
          to_long: latLng[0],
          color: 'red', // Add color property
        }));

        setState(prevState => ({
          ...prevState,
          excelData: {
            easting: eastingValues,
            northing: northingValues,
            points: pointValues,
          },
          data: data,
          validLatLngObjects,
        }));
      } catch (error) {
        console.error('Error fetching or parsing Excel data:', error);
      }
    };

    fetchExcelData();
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts
console.log(state)
const position = [state.lat, state.lng];
  return (
    <div id="map">
      <MapContainer
        style={{ height: "90vh" }}
        center={position}
        zoom={state.zoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {state.data.map(({ id, from_lat, from_long, to_lat, to_long, color }) => (
          <Polyline
            key={id}
            positions={[
              [parseFloat(from_lat), parseFloat(from_long)],
              [parseFloat(to_lat), parseFloat(to_long)],
            ]}
            color={color}
            weight={10}
            onClick={() => handlePolylineClick(color)}
          >
            <Popup>{`This is a ${color} line`}</Popup>
          </Polyline>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
