import React, { useEffect } from "react";
import Footer from "components/footer";
import Navbar from "components/navbar";
import mapboxgl from "mapbox-gl";

const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoibGVvbmFyZG9sb3VpZTMwIiwiYSI6ImNrbWozcmdkdzBuZTcydnM3Mno3aHRsY3oifQ.ADmnw6gc0gEHygCUSGAY8A";
    const map = new mapboxgl.Map({
      container: "mapDiv",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div id="mapDiv"  style={{ top:0, bottom:0, width:'100%', height:'20%'}} />
      <Footer />
    </>
  );
};

export default Map;
