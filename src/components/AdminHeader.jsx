import React from 'react';
import '../styles/AdminPage.css';

export default function AdminHeader(props) {
  return (
    <div className='admin-header-container'>
      <image src='https://user-images.githubusercontent.com/93356900/194410137-1b5f4807-7c12-4892-bb1c-1050fda45c8a.jpeg' />
      <h1>Barbershop name</h1>
      <p>Barbershop info</p>
      <div className='admin-header-btns'>
      </div>
    </div>
  );
}