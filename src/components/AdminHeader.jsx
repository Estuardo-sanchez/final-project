import React from 'react';
import '../styles/AdminPage.css';

export default function AdminHeader(props) {
  
  return (
    <div className='admin-header-container'>
      <image src='https://user-images.githubusercontent.com/93356900/194968610-2673edb3-0e88-43dd-b434-2b645ba44188.jpeg' />
      <h1>Ace Barbershop</h1>
      <p>Hamilton</p>
      <div className='admin-header-btns'>
      </div>
    </div>
  );
}