
var map = L.map('map').setView([25.276987, 55.296249], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    attribution: '© CartoDB'
}).addTo(map);

function createPopupContent(color) {
    return '<p>View <b>Rail Profile Wear</b> for <i>' + color + '</i></p>';
}

// Replace 'path_to_your_kml_file.kml' with the URL to the KML file
var runLayers = [];
var colors = ["orange", "blue", "red", "purple", "yellow"]
for (var i = 1; i <= 5; i++) {
    (function (index) { // Create a closure to capture the correct value of i
        var color = colors[index - 1]; // Store the color for this iteration
        var runLayer = omnivore.kml('data' + index + '.kml', null, L.geoJSON(null, {
            style: function (feature) {
                return {
                    color: color, // Use the captured color
                    weight: 8, // Adjust the line weight as needed
                };
            }
        }))
            .on('ready', function () {
                // This function is called once the KML is loaded
                map.fitBounds(runLayer.getBounds());
            })
            .addTo(map);

        runLayer.on('click', function (e) {
            var popup = L.popup().setContent(createPopupContent(color)); // Use the captured color
            popup.setLatLng(e.latlng).openOn(map);
        });

        runLayers.push(runLayer);
    })(i);
}
