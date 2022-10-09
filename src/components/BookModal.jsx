
import '../styles/BookModal.css';
import {useRef} from "react";
import axios from 'axios';


export default function BookModal({ open, onClose, barbershopId, barbershopName }) {

  const nameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const dateInput = useRef();
  const timeInput = useRef();


  function handleBookAppointment(e) {
    e.preventDefault()

    const formData = {
      name: nameInput.current.value,
      last_name: lastNameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
      date: dateInput.current.value,
      start_time: timeInput.current.value,
      barbershop_id: barbershopId
    }

    axios.post('http://localhost:8000/api/appointments', formData)
    .then(res => window.location = "/thanks-page") // send to thank you page
  }

  
  if (!open) {
    return null
  }
  return (
      <div className="overlay">
        <div className="modal-container">

          <div className="modal-right">
            <p onClick={onClose} className="close-modal-btn">X</p>
            <div className="modal-content">
              <div className="main-container">

                <div className="wrapper">


                  <div className="container">
                    <div className="title">Book an appointment to {barbershopName}</div>
                    <div className="content">
                      <form onSubmit={handleBookAppointment}>
                        <div className="user-details">
                          <div className="input-box">
                            <span className="details">First Name</span>
                            <input ref={nameInput} type="text" placeholder="Enter your first name" required />
                          </div>
                          <div className="input-box">
                            <span className="details">Last name</span>
                            <input ref={lastNameInput} type="text" placeholder="Enter your last name" required />
                          </div>
                          <div className="input-box">
                            <span className="details">Email</span>
                            <input ref={emailInput} type="text" placeholder="Enter your email" required />
                          </div>
                          <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input ref={phoneInput} type="text" placeholder="Enter your number" required />
                          </div>
                          <div className="input-box">
                            <p>Date</p>
                            <input ref={dateInput} type="date" />
                          </div>
                          <div className="input-box">
                            <p>Time</p>
                            <input ref={timeInput} type="time"/>
                          </div>
                        </div>
                        <div className="button">
                          <input type="submit" value="Confirm" />
                        </div>
                      </form>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}