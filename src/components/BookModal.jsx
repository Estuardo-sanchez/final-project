
import { useState, useEffect } from 'react';
import '../styles/BookModal.css';
import React from "react";
import axios from "axios";

export default function BookModal({ open, onClose }) {

  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/barbershops')
      .then((res) => {
        setShops(res.data.barbershops);

      })
  }, [])

  if (!open) {
    return null
  }
  return (
    shops.map(shop => (

      <div className="overlay">
        <div className="modal-container">

          <div className="modal-right">
            <p onClick={onClose} className="close-modal-btn">X</p>
            <div className="modal-content">
              <div className="main-container">

                <div className="wrapper">


                  <div className="container">
                    <div className="title">Registration</div>
                    <div className="content">
                      <form action="#">
                        <div className="user-details">
                          <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" placeholder="Enter your first name" required />
                          </div>
                          <div className="input-box">
                            <span className="details">Last name</span>
                            <input type="text" placeholder="Enter your last name" required />
                          </div>
                          <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" placeholder="Enter your email" required />
                          </div>
                          <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input type="text" placeholder="Enter your number" required />
                          </div>
                          <div class="input-box">
                            <p>Date</p>
                            <input type="date" />
                          </div>
                          <div class="input-box">
                            <p>Time</p>
                            <input type="time"/>
                          </div>
                        </div>
                        <div className="button">
                          <input type="submit" value="Register" />
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

    ))
  )
}