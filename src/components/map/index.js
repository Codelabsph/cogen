import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";
const apiKey = process.env.NEXT_PUBLIC_GOOLE_MAPS_API_KEY;

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const { defaultCenter } = props;

  console.log(google, "google");
  const getArea = (e) => {
    const newShape = e;

    const area = google.maps.geometry.spherical.computeArea(newShape.getPath());
    alert(area);
  };
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={defaultCenter || { lat: 14.599512, lng: 120.984222 }}
      options={{
        draggable: true,
      }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
      <DrawingManager
        defaultDrawingMode={google.maps.drawing.OverlayType.POLYLINE}
        defaultOptions={{
          drawingControl: false,
          polylineOptions: {
            fillColor: `#ffff00`,
            fillOpacity: 1,
            strokeColor: "red",
            strokeWeight: 2,
            clickable: false,
            editable: true,
            zIndex: 1,
            editable:true
          },
        }}
        onPolylineComplete={getArea}
      />
    </GoogleMap>
  );
});

export default Map;
