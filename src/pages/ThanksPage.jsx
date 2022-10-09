import '../styles/ThanksPage.css';

import React from 'react'

export const ThanksPage = () => {

  onclick={}

  return (
    <div className="content">
      <div className="wrapper-1">
        <div className="wrapper-2">
          <h1 className='thanks-title'>Thank you !</h1>
          <p>Thank you for booking through us.  </p>
          <p>you should receive a confirmation email soon  </p>
          <form action='/'>
          <button className="go-home" type='submit'>
            go home
          </button>
          </form>
        </div>
      </div>
    </div>
  )
}
