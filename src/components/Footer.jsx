import React from "react";
import Button from "./Button";
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Sign up for BOOK'D newsletter for deals around Your
          local barbershops
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe any time.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Your email" className="footer-input" />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
          </div>
        </div>
      </div>
    </div>
  )
}