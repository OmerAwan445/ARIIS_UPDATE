import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useRef, useEffect } from "react";

const PathMapComponent = ({ state, markersArray }) => {
    const mapRef = useRef();

    // Function to fit the map to bounds of all markers
    const fitBounds = () => {
        if (markersArray.length > 0 && mapRef.current) {
            const bounds = markersArray.map(([lat, lng]) => [lat, lng]);
            mapRef.current.fitBounds(bounds);
        }
    };

    // Call fitBounds when markersArray changes
    useEffect(() => {
        fitBounds();
    }, [markersArray]);

    return (
        <>
            <div className='main-panel'>
                <div id="map">
                    <MapContainer
                        ref={mapRef}
                        center={[state.lat, state.lng]}
                        zoom={state.zoom}
                        style={{ height: 'calc(100vh - 60px)', width: '100vw' }}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            url="https://api.mapbox.com/styles/v1/drdave/ckssg5zeu81ny17rkx0rudqof/tiles/{z}/{x}/{y}?access_token={accessToken}"
                            accessToken="pk.eyJ1IjoiZHJkYXZlIiwiYSI6ImNqdzJ1N245eTEwa2Y0YXFxbDB1eno5czkifQ.0VTfoQjwGlIW-e8Lx9Zv9g"
                            tileSize={512}
                            zoomOffset={-1}
                            maxZoom={18}
                            maxNativeZoom={18}
                        />
                        {
                            markersArray && markersArray.map(([lat, long], i) => (
                                <CircleMarker key={i} center={[lat, long]} radius={state.radius} />
                            ))
                        }
                    </MapContainer>
                </div>
            </div>
        </>
    );
};

export default PathMapComponent;
