import React from 'react';
import '../App.css';
import Button from './Button';
import './header.css';

export default function Header(props) {
  return (
    <div className='header-container'>
      <image src='../images/barbershop outside.jpg' />
      <h1>NEED A BARBER?</h1>
      <p>Find one at the click of a button</p>
      <div className='header-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}