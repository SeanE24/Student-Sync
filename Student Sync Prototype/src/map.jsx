import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";


const CITY_BOUNDS = [
  [120.5562, 16.3744],
  [120.6394, 16.4526],
];

const DEFAULT_CENTER = { latitude: 16.4023, longitude: 120.596 };

const MINT = "#2dbf94";

// Fills its parent, so the parent decides the size.
// Pass extra <Marker>s (or anything else) as children.
export default function CityRideMap({
  latitude = DEFAULT_CENTER.latitude,
  longitude = DEFAULT_CENTER.longitude,
  zoom = 12,
  showMarker = true,
  children,
}) {
  return (
    <Map
      initialViewState={{ latitude, longitude, zoom }}
      mapStyle="https://tiles.openfreemap.org/styles/positron"
      maxBounds={CITY_BOUNDS}
      minZoom={11}
      style={{ width: "100%", height: "100%" }}
    >
      {showMarker && (
        <Marker longitude={longitude} latitude={latitude} anchor="center">
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(45,191,148,.3)", display: "grid", placeItems: "center" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: MINT, border: "4px solid rgba(255,255,255,.35)", boxSizing: "border-box" }} />
          </div>
        </Marker>
      )}
      {children}
    </Map>
  );
}