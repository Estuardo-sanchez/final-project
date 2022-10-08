import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="form-container">
        <div className="login-title">Login!</div>
        <div className="content">
          <form >
            <div className="user-details">
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email here" required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password here" required />
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
}

export default Login;