import React, { useState, useEffect, useContext, useRef } from "react";
import "./Login.css";

import loginLogo from "../../assets/Redington.svg";
import loginlogo from "../../assets/pro_connect_logo 1.svg";
import { Link, useNavigate } from "react-router-dom";
import userLoginLogo from "../../assets/user_login.svg";
import lock from "../../assets/lock.svg";
import AppContext from "../../Context/AppContext";
import axios from "axios";
import Img1 from '../../images/changing_bg_1.webp'
import Google from '../../assets/google-icon.png'
import { NavLink } from "react-router-dom";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login h-100">
      <div className="row">
        <div className="col-lg-6">
          <div className="login-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="google">
                  <button className="btn btn-primary w-100"><img src={Google} style={{ width: "35px", marginRight: "30px" }}></img>Sign in with Google</button>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="title">
                  <h1>Advertiser Login</h1>
                  <NavLink
                    to={"/Account"}
                    className="links-drop mr-2 ml-2"
                    activeclassName="active"
                  >Login as a Publisher</NavLink>
                </div>
              </div>
              <div className="col-lg-12">
                <div className='input-lg'>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                </div>
                <div className="input-group input-lg">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <button

                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <i class="fa fa-eye"></i> : <i class="fa fa-eye-slash"></i>}
                    </button>
                  </div>
                </div>
              </div>
              <div className="login-button">
                <button className="btn btn-primary w-100">Login</button>
              </div>
              <div className="col-lg-6">
                <div className="ForgotPassword">
                  <NavLink
                    to={"/Account"}
                    className="links-drop mr-2 ml-2"
                    activeclassName="active"
                  >Forgot Password</NavLink>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="DA">
                  <NavLink
                    to={"/Register"}
                    className="links-drop mr-2 ml-2"
                    activeclassName="active"
                  >Don't have an Account ?</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={Img1}></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
