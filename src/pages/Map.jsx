import { useState, useEffect } from 'react';
import '../styles/Map.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import axios from 'axios';
import SideBar from '../components/SideBar';



export default function Map() {
  const [markers, setMarkers] = useState([]);
  const position = [43.2557, -79.8711]

  useEffect(() => {
    axios.get('http://localhost:8000/api/barbershops')
    .then((res) => {
      setMarkers(res.data.barbershops);
      
    })
  },[])

  return (
    <div className='map-and-side'>
      {/* map side bar */}
      <div>
    {
      < SideBar/>
    }
      </div>
      {/* map container  */}
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: 1280, width: "85.7%"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        markers.map(marker => (
          <Marker key={marker.id} position={[marker.lattitude, marker.longitude]}>
            <Popup className='w3-container'>
              <img className='barber-img' src={marker.cover_photo_url} alt = "barbershops" /> <br />
              {marker.name} <br />
            </Popup>
          </Marker>
        ))
      }
    </MapContainer>
    </div>
    
  );
}
