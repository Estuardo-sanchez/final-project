import '../styles/AdminCalender.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


export function AdminCalender() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/appointments')
    .then((res) => {
      setAppointments(res.data.appointments);
    })
  }, [])
  
  return (
    appointments.map(appointment => (
    <div className="calendar dark">
    <div className="calendar_header">
      <h1 className = "header_title">Welcome Back</h1>
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
      <div className="event_item">
        <div className="ei_Dot dot_active"></div>
        <div className="ei_Title">{appointment.start_time}</div>
        <div className="ei_Copy">Monday briefing with the team</div>
      </div>
    </div>
  </div>
    ))
  )
};
