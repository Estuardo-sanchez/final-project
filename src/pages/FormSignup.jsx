import { useRef, useState } from 'react';
import axios from 'axios';
import '../styles/Form.css';

export const FormSignup = () => {
  const barbershopName = useRef();
  const barbershopStreet = useRef();
  const barbershopCity = useRef();
  const barbershopProvince = useRef();
  const barbershopPostCode = useRef();
  const barbershopOpenHours = useRef();
  const barbershopCoverPhoto = useRef();
  const barbershopLattitude = useRef();
  const barbershopLongitude = useRef();


  async function handleCreateShop (e) {
    e.preventDefault();


      const data = {
        name: barbershopName.current.value,
        street: barbershopStreet.current.value,
        city: barbershopCity.current.value,
        province: barbershopProvince.current.value,
        post_code: barbershopPostCode.current.value,
        open_hours: barbershopOpenHours.current.value,
        cover_photo_url: barbershopCoverPhoto.current.value,
        lattitude: barbershopLattitude.current.value,
        longitude: barbershopLongitude.current.value
        
      }

      
      const URL_BARBERSHOPS_API = 'http://localhost:8000/api/barbershops';
      const barbershopCreated = await axios.post(URL_BARBERSHOPS_API, data)
      .then(res => window.location = "/Map")
      // console.log(barbershopCreated)
      
    }

  return(
    <div className="form-container">
    <div className="sign-up-title">Add your barbershop!</div>
    <div className="content">
      <form onSubmit={handleCreateShop}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Barbershop's name</span>
            <input ref={barbershopName} type="text" placeholder="Enter your shops name" required />
          </div>
          <div className="input-box">
            <span className="details">City</span>
            <input ref={barbershopCity} type="text" placeholder="Enter your city" required />
          </div>
          <div className="input-box">
            <span className="details">street</span>
            <input ref={barbershopStreet} type="text" placeholder="Enter your streets name" required />
          </div>
          <div className="input-box">
            <span className="details">Province</span>
            <input ref={barbershopProvince} type="text" placeholder="Enter your province" required />
          </div>
          <div className="input-box">
            <span className="details">Postal code</span>
            <input ref={barbershopPostCode} type="text" placeholder="Enter your postal code" required />
          </div>
          <div className="input-box">
            <span className="details">Hours of business</span>
            <input ref={barbershopOpenHours} type="text" placeholder="Enter your business hours" required />
          </div>
          <div className="input-box">
            <span className="details">Barbershop photo</span>
            <input ref={barbershopCoverPhoto} type="text" placeholder="Enter your barbershop photo url" required />
          </div>
          <div className="input-box">
            <span className="details">Lattitude</span>
            <input ref={barbershopLattitude} type="text" placeholder="Enter your lattitude" required />
          </div>
          <div className="input-box">
            <span className="details">Longitude</span>
            <input ref={barbershopLongitude} type="text" placeholder="Enter your longitude" required />
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  </div>
  )
}

export default FormSignup;
