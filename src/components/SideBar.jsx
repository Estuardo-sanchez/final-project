import { useState, useEffect } from 'react';
import axios from 'axios';



export default function SideBar() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/barbershops')
    .then((res) => {
      setMarkers(res.data.barbershops);
      
    })
  },[])

  return (
    <div className='column'>
      {/* map side bar */}
    {
      markers.map(marker => (
        <div>
          <hr 
          style={{
            color: '#000000',
            backgroundColor: '#bcb5b5',
            height: 0.1,
            // borderColor: '#bcb5b5'
          }}
          />
          <img className='side-barber-img' src={marker.cover_photo_url} alt="barbers" /> <br />
          <p className='sidebar-shop-name'>{`${marker.name}`}</p>
          <p className='address-text'> {`${marker.street}, ${marker.city}, ${marker.province}, ${marker.post_code}`} </p>
          <div className='side-btn-container'>
          <button className='side-book-btn'>Book</button> {marker.open_hours}
          </div>
        </div>
      ))
    }
    </div>
  )

}