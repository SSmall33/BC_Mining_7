//Mapbox layers details
mapboxgl.accessToken = 'pk.eyJ1Ijoic3VzYW5jc21hbGwiLCJhIjoiY2pwYmY2MDlmMHM0YzNxcWplZXc2MGs1ZSJ9.f6titFmZjpXY3DoX9fLGhA';

//define map variable as list
  var map = new mapboxgl.Map({
  container:'map',
  style: 'mapbox://styles/susancsmall/clpioohft00cl01p6aj2m1uu2',
  center: [-105.3000, 40.1000],
  zoom: 10,
  customAttribution: 'Icons from Maki Icons by Mapbox'
  });

// Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());

//Loaded OpenStreet basemap before geographical features load
  map.on('load', function() {
  console.log("Lets load Open Street Maps next");

    map.addLayer({
       'id' : 'openstreetmap-basemap',
        'type' : 'raster',
        'source' : {
         'type' : 'raster',
         'tiles' : [
           'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          ],
          'tileSize' : 256
          }
          }, 'boulder_county_boundary');
    });

//Pop Up
  //map.on('click', 'mining_areas', function (e) {
  //alert('Replace me with the popup.');
  //});

 map.on('click', 'mining_areas', function (e) {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const SITENAME_1 = e.features[0].properties.SITENAME_1;
  const COMMOD_T = e.features[0].properties.COMMOD_T;
  const PHYSICAL_H = e.features[0].properties.PHYSICAL_H;

  new mapboxgl.Popup().setLngLat(e.lngLat).setHTML(SITENAME_1 + " : " + COMMOD_T + " : " + PHYSICAL_H).addTo(map);
  });

  //Change cursor to pointer when mouse is over places layer
map.on('mouseenter', 'mining_areas', () => {
map.getCanvas().style.cursor = 'pointer';
});

// Change it back to pointer when it leaves
map.on('mouseleave', 'mining_areas', () => {
map.getCanvas().style.cursor = '';
});

//Popup on trailheads
 map.on('click', 'trailheads', function (e) {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const THNAME = e.features[0].properties.THNAME;

  new mapboxgl.Popup().setLngLat(e.lngLat).setHTML(THNAME).addTo(map);
  });

//Change cursor to pointer when mouse is over trailheads layer
map.on('mouseenter', 'trailheads', () => {
map.getCanvas().style.cursor = 'pointer';
});

// Change it back to pointer when it leaves
map.on('mouseleave', 'trailheads', () => {
map.getCanvas().style.cursor = '';
});

//Popup on recreation _areas
 map.on('click', 'recreation _areas', function (e) {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const ACTIVITYNA = e.features[0].properties.ACTIVITYNA;

  new mapboxgl.Popup().setLngLat(e.lngLat).setHTML(ACTIVITYNA).addTo(map);
  });

//Change cursor to pointer when mouse is over recreations layer
  map.on('mouseenter', 'recreation _areas', () => {
  map.getCanvas().style.cursor = 'pointer';
  });

// Change it back to pointer when it leaves
  map.on('mouseleave', 'recreation _areas', () => {
  map.getCanvas().style.cursor = '';
  });