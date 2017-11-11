var pathCoordinates = [];
var viewer = new Cesium.Viewer('cesiumContainer');
// To display our results
var FirstDot = 1
var priviousGeoLocation = {
	latitude : 0.00,
	longitude : 0.00,
};
var geoLocation = {
	latitude : 0.00,
	longitude : 0.00,
};
// handler for left click of the mouse on the map, and get latitude and
// longitude.
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
// Catch the mouse click, and convert the location into degrees
handler.setInputAction(

// Translate mouse click into Geographic coordinates
function(click) {
	var position = viewer.camera.pickEllipsoid(click.position);
	var location = Cesium.Ellipsoid.WGS84.cartesianToCartographic(position);
	geoLocation.latitude = Cesium.Math.toDegrees(location.latitude);
	geoLocation.longitude = Cesium.Math.toDegrees(location.longitude);
	// Sets point on map
	setLocationPoint();
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

// Set a point, and mark reverse geocoded location
function setLocationPoint() {
	var entity = viewer.entities.add({
		name : 'Route point',
		// Reverse the latitude and longitude when calling "fromDegrees"
		position : Cesium.Cartesian3.fromDegrees(geoLocation.longitude,
				geoLocation.latitude),
		point : {
			pixelSize : 5,
			color : Cesium.Color.RED,
			outlineColor : Cesium.Color.WHITE,
			outlineWidth : 2
		},
		label : {
			font : '14pt monospace',
			style : Cesium.LabelStyle.FILL_AND_OUTLINE,
			outlineWidth : 2,
			verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
			pixelOffset : new Cesium.Cartesian2(0, -9)
		}
	});
	if (!FirstDot) {
		displayLine(priviousGeoLocation.longitude,
				priviousGeoLocation.latitude, geoLocation.longitude,
				geoLocation.latitude)
	} else {
		FirstDot = 0;
	}
	var ArrGeoLocation = {
		latitude : geoLocation.longitude,
		longitude : geoLocation.latitude,
	};
	pathCoordinates.push(ArrGeoLocation)
	priviousGeoLocation.longitude = geoLocation.longitude;
	priviousGeoLocation.latitude = geoLocation.latitude;
}
function resetPath() {
	FirstDot = 1;
	viewer.entities.removeAll();
	viewer.dataSources.removeAll();
	pathCoordinates = [];
}

function showPathCoordinates() {
	coordinatesString = "Path coordinates:";
	for (var i = 0; i < pathCoordinates.length; i++) {
		coordinatesString = coordinatesString + "\nlongitude: "
				+ pathCoordinates[i].longitude + " latitude: "
				+ pathCoordinates[i].latitude;
	}
	alert(coordinatesString);
}

// --------------------------------------------//

function makeCZML(longitude1, latitude1, longitude2, latitude2) {
	var czml = [
			{
				"id" : "document",
				"name" : "CZML Geometries: Polyline",
				"version" : "1.0"
			},
			{
				"id" : "redLine",
				"name" : "My Very First Line",
				"polyline" : {
					"positions" : {
						"cartographicDegrees" : [ longitude1, latitude1, 0,
								longitude2, latitude2, 0 ]
					},
					"material" : {
						"solidColor" : {
							"color" : {
								"rgba" : [ 150, 50, 100, 255 ]
							// Inbar: last fiels is tranperecy, first 3 are
							// regular RGB.
							}
						}
					},
					"width" : 5
				// Inbar: witdth of the line
				}
			} ];
	return czml;
}

function displayLine(longitude1, latitude1, longitude2, latitude2) {
	var dataSourcePromise = Cesium.CzmlDataSource.load(makeCZML(longitude1,
			latitude1, longitude2, latitude2));
	viewer.dataSources.add(dataSourcePromise);
}
