import React, { useState, useEffect, useContext, useRef } from "react";
import "./Pregister.css";
import Select from 'react-select'
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


const Pregister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [cshowPassword, setCShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleCPasswordVisibility = () => {
        setCShowPassword(!cshowPassword);
    };
    const [campaignModel, setCampaignModel] = useState([
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ])
    return (
        <div className="Pregister h-100">
            <div className="row">

                <div className="col-lg-6">

                    <div className="Pregister-body">
                        <div className="row">

                            <div className="col-lg-12">
                                <div className="title">
                                    <h1>Publisher</h1>
                                    <NavLink
                                        to={"/Register"}
                                        className="links-drop mr-2 ml-2"
                                        activeclassName="active"
                                    >Advertiser Signup</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='input-lg'>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='input-lg'>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='input-lg'>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='input-lg'>
                                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='input-lg'>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company Name" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className='input-lg'>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Website" />
                                </div>
                            </div>

                            <div className="col-lg-6">
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
                            <div className="col-lg-6">
                                <div className="input-group input-lg">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control"
                                        placeholder="Confirm Password"
                                    />
                                    <div className="input-group-append">
                                        <button

                                            onClick={toggleCPasswordVisibility}
                                        >
                                            {cshowPassword ? <i class="fa fa-eye"></i> : <i class="fa fa-eye-slash"></i>}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="tc">
                                    <input type="checkbox"></input>
                                    <label> Terms and Conditions by PubLander Media</label>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="tc">
                                    <input type="checkbox"></input>
                                    <label> I would like to receive news letter</label>
                                </div>
                            </div>


                            <div className="Pregister-button">
                                <button className="btn btn-primary w-100">Register</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={Img1} style={{ width: "100%", height: "100vh" }}></img>
                </div>
            </div>
        </div>
    );
};

export default Pregister;
