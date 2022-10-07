import React from 'react';
import ScrollButton from './ScrollButton';
import '../styles/Header.css';

export default function Header(props) {
  return (
    <div className='header-container'>
      <image src='https://cdn.discordapp.com/attachments/966805019309506690/1026623401290383411/barbershop_clip.gif' />
      <h1>NEED A BARBER?</h1>
      <p>Find one at the click of a button</p>
      <div className='header-btns'>
        <ScrollButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </ScrollButton>
      </div>
    </div>
  );
}