import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import OSM from './OSM';
import { MapContainer, TileLayer } from 'react-leaflet';
import Card from './Card'
import Footer from './Footer'
const Map = () => {

    //The location and zoom are the two variables needed to render the map. These are fetched by the redux toolkit store

  const location = useSelector((state) => state.changeLocation.location);
  const zoom = useSelector((state) => state.changeLocation.zoom);

  useEffect(() => {
    // Whenever the location or zoom changes, the map will re-center and update its zoom level.
  }, [location, zoom]);


  return (
    <div>
        {/* The MapContainer and Tilelayer are taken from Leaflet OSM and an API call is made in TileLayer to MapTiler API */}
        
         <MapContainer style={{zIndex:"-50"}} key={`${location[0]}-${location[1]}-${zoom}`} center={location} zoom={zoom}>
        <Card/>
      <TileLayer url={OSM.maptiler.url} attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
    </MapContainer>
    <br></br>
    <Footer/>
    </div>
  );
};

export default Map;
