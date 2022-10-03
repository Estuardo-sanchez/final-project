import React from 'react'
import './Map.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map() {
  const position = [43.2557, -79.8711]
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: 1000, width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[43.22253103244279, -79.88574371583258]}>
        <Popup>
          ACE Barbers <br /> Book here!
        </Popup>
      </Marker>
      <Marker position={[43.243599148277106, -79.87500595990427]}>
        <Popup>
          LA Barbers <br /> Book here!
        </Popup>
      </Marker>
      <Marker position={[43.22522148413848, -79.8367317731949]}>
        <Popup>
          Lions Den Barbers <br /> Book here!
        </Popup>
      </Marker>
      <Marker position={[43.2631992671876, -79.84506065251591]}>
        <Popup>
          Lions Den Barbers <br /> Book here!
        </Popup>
      </Marker>
    </MapContainer>
  );
}
