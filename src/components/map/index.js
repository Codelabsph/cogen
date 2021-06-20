import { compose, withProps } from "recompose";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";

const Map = compose(
  withProps({
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "600px" }} />,
    mapElement: <div style={{ height: "100%" }} />,
  }),
  withGoogleMap
)((props) => {
  const { defaultCenter, center, setArea } = props;

  const onPolylineComplete = (e) => {
    const newShape = e;
    const area = google.maps.geometry.spherical.computeArea(newShape.getPath());
    if (area > 0) setArea(area);
    else setArea(0);
  };

  const defaultCenterVal = { lat: 14.599512, lng: 120.984222 };

  return (
    <GoogleMap
      defaultZoom={20}
      defaultCenter={defaultCenter || defaultCenterVal}
      center={center}
      options={{
        draggable: true,
        mapTypeId: "satellite",
        disableDefaultUI: true,
      }}
    >
      <DrawingManager
        defaultDrawingMode={google.maps.drawing.OverlayType.POLYLINE}
        defaultOptions={{
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [google.maps.drawing.OverlayType.POLYLINE],
          },
          polylineOptions: {
            fillColor: `#ffff00`,
            fillOpacity: 1,
            strokeColor: "red",
            strokeWeight: 2,
            clickable: false,
            editable: true,
            zIndex: 1,
            editable: true,
          },
        }}
        onPolylineComplete={onPolylineComplete}
      />
    </GoogleMap>
  );
});

export default Map;
