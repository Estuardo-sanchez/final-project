import "../styles/AdminPage.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

export const AdminPage = () => {
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/barbershops')
      .then((res) => {
        setBarbers(res.data.barbershops);

      })
  }, [])


  return (
    barbers.map(barber => (
      <main className="layout">
        <section className="side-bar">
        <h1 className='sidebar-barbershop-name'>{`${barber.name}`}</h1>
          <img className='side-barbershop-img' src={barber.cover_photo_url} alt="barbers" /> <br />
          <p className='address-text'> {`${barber.street}, ${barber.city}, ${barber.province}, ${barber.post_code}`} </p>
        </section> hello
        <section className="schedule">
        </section>
      </main>
    ))
  );
}
