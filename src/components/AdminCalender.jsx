import '../styles/AdminCalender.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


export function AdminCalender() {
  const [appointments, setAppointments] = useState([]);
  const barbershopId = 1;

  useEffect(() => {
    axios.get(`http://localhost:8000/api/appointments?barbershop_id=${barbershopId}`)
      .then((res) => {
        setAppointments(res.data.appointments);
      })
  }, [])

  return (
    appointments.map(appointment => (
    <div className="calendar dark">
      <div className="calendar_header">
        <h1 className="header_title">Appointments</h1>
        <p className="header_copy"> Calendar Plan</p>
      </div>
      <div className="calendar_plan">
        <div className="cl_plan">
          <div className="cl_title">Today</div>
          <div className="cl_copy">22nd  April  2018</div>
        </div>
      </div>
      <div className="calendar_events">
        <p className="ce_title">Upcoming appointments</p>
        {appointments.map((appointment, index) => (
          <div key={index} className="event_item">
            <div className="ei_Dot dot_active"></div>
            <ul className="ei_Title">
              <li>
                {appointment.start_time}
              </li>
            </ul>
            <div className="ei_Copy">{appointment.name} {appointment.last_name}</div>
          </div>
        ))}
      </div>
    </div>
  )
};
