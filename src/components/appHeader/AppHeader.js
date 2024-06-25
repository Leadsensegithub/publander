import React, { useContext, useState } from "react";
import { Row } from "react-bootstrap";
import "./AppHeader.css";
import Bar from "../../assets/menu.svg";
import AssetLogo from "../../assets/logo-video-white.gif";
import Notification from '../../assets/icons8-notification-50.png'
import Connectone from "../../assets/ConnectOne.svg";
import User from "../../assets/defult.png";
import AppContext from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const AppHeader = ({ setMenuToggle }) => {


  return (
    <div className="app-header">
      <Row className="mx-0 app-header-row">
        <div className="app-header-left-content p-0">

          <div className="brand_pro">
            <img src={AssetLogo} className="redington" style={{ width: "100px" }}
              onClick={() => setMenuToggle((tg) => !tg)}
              alt="Brand" />
          </div>
        </div>

        <div className="app-header-right-content">
          <div className="found">
            <h3>$1000</h3>
          </div>
          <div className="notification">
            <img src={Notification}></img>
          </div>
          <div className="nav-item dropdown ml-3">
            <a
              className="nav-link dropdown-toggle user-info"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="profile_icon">
                R
              </div>
              <div className="user_name">
                <h5 className="m-0 name">
                  Ram Kumar
                </h5>
                {/* <p className="m-0 user-location">Chennai</p> */}
              </div>
            </a>
            <div className="dropdown-menu text-center">
              <button
                className="dropdown-item"

              >
                Logout
              </button>
              {/* <NavLink className="dropdown-item" to="/">Another action</NavLink>
                            <NavLink className="dropdown-item" to="/">Something</NavLink> */}
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default AppHeader;
