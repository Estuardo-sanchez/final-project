import React from "react";
import "../styles/Login.css";


export default function Login() {
  return (
    <div className="form-container">
      <div className="login-title">Login!</div>
      <div className="content">
        <form>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Email</span>
              <input type="email" placeholder="Enter your email here" required />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type="password" placeholder="Enter your password here" required />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}
