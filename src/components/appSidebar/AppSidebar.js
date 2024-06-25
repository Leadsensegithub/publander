import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./AppSidebar.css";
import axios from "../../axios/axios";
import dashboard from "../../assets/icons8-dashboard.png";
import Account from "../../assets/icons8-account-50.png"
import Payment from "../../assets/icons8-payment-50.png";
import dashboardhover from "../../assets/icons8-dashboard-active.png";
import outbound from "../../assets/diagram-white.svg";
import outboundhover from "../../assets/Outbound-ledger-red.svg";
import Report from "../../assets/icons8-combo-chart-50.png";
import pending_despatch_hover from "../../assets/Pending-Despatch-red.svg";
import Campaign from "../../assets/icons8-announcement-50.png";
import Campaign_active from "../../assets/icons8-announcement-50 (1).png";
import delivery from "../../assets/Pending-delivery-white.svg";
import delivery_hover from "../../assets/Pending-delivery-red.svg";
import pod_ from "../../assets/Pending-POD-white.svg";
import pod_hover from "../../assets/Pending-POD-red.svg";
import pending_inbound from "../../assets/Pending-inbound-white.svg";
import pending_inbound_hover from "../../assets/Pending-inbound-red.svg";
import summary from "../../assets/Pending-summary-white.svg";
import summary_hover from "../../assets/Pending-summary-red.svg";
import inboundSLA from "../../assets/inboundSLA.svg";
import inboundSLA_hover from "../../assets/inboundSLA_active.svg";
import Alreport from "../../assets/al-report.svg";
import Alreport_active from "../../assets/al-report-active.svg";
import AppContext from "../../Context/AppContext";
import moment from "moment";
import Tooltip from "../Tooltip/Tooltip";

const AppSidebar = ({ menuToggle, setMenuToggle }) => {

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [iconToggle, seticonToggle] = useState(true);

  const date = new Date();



  const [open, setOpen] = useState();


  const sideMenu = (index) => {
    console.log("You have", index);

    setDropdownMenu(open != index ? true : !dropdownMenu);
    setOpen(index);
  };


  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <img className="nhv" src={dashboard} alt="Dashboard" />,
      iconhover: <img className="hv" src={dashboardhover} alt="Dashboard" />,
    },
    {
      path: "/CampaignTable",
      name: "My Campaign",
      icon: <img className="nhv" src={Campaign} alt="inbound-ledger" />,
      iconhover: (
        <img className="hv" src={Campaign_active} alt="inbound-ledger" />
      ),
    },
    {
      path: "/tracking",
      name: "Tracking",
      icon: <img className="nhv" src={pending_inbound} alt="pending-inbound" />,
      iconhover: (
        <img className="hv" src={pending_inbound_hover} alt="pending-inbound" />
      ),
    },
    {
      path: "/resport",
      name: "Report",
      icon: <img className="nhv" src={outbound} alt="outbound-ledger" />,
      iconhover: (
        <img className="hv" src={outboundhover} alt="outbound-ledger" />
      ),
    },

    {
      path: "/billing",
      name: "Billing",
      icon: (
        <img className="nhv" alt="pending-despatch" />
      ),
      iconhover: (
        <img
          className="hv"
          src={pending_despatch_hover}
          alt="pending-despatch"
        />
      ),
    },
    {
      path: "/blog",
      name: "Blog",
      icon: <img className="nhv" src={delivery} alt="pending-delivery" />,
      iconhover: (
        <img className="hv" src={delivery_hover} alt="pending-delivery" />
      ),
    },
    {
      path: "/admin-Dashboard",
      name: "Admin Dashboard",
      icon: <img className="nhv" src={pod_} alt="pending-POD" />,
      iconhover: <img className="hv" src={pod_hover} alt="pending-POD" />,
    },

    {
      path: "/campaign-list",
      name: "Campaign List",
      icon: <img className="nhv" src={summary} alt="pending-summary" />,
      iconhover: (
        <img className="hv" src={summary_hover} alt="pending-summary" />
      ),
    },
    {

      path: "/advertiser",
      name: "Advertiser",
      icon: <img className="nhv" src={summary} alt="pending-summary" />,
      iconhover: (
        <img className="hv" src={summary_hover} alt="pending-summary" />
      ),
    },
    {
      path: "/publisher",
      name: "Publisher",
      icon: <img className="nhv" src={summary} alt="pending-summary" />,
      iconhover: (
        <img className="hv" src={summary_hover} alt="pending-summary" />
      ),
    },
    {
      path: "/rtb",
      name: "RTB",
      icon: <img className="nhv" src={summary} alt="pending-summary" />,
      iconhover: (
        <img className="hv" src={summary_hover} alt="pending-summary" />
      ),
    },

  ];
  return (
    <>
      <div className="appsidebar"
        onMouseOut={() => seticonToggle(true)}
        onMouseOver={() => seticonToggle(false)}
      >
        <div className="app-toggle"

          onClick={() => seticonToggle(true)}

        >
          <div className="app-img">
            <NavLink
              to={"/dashboard"}
              className="links-drop mr-2 ml-2"
              activeclassName="active"
            >
              <img src={dashboardhover}></img>
            </NavLink>
          </div>
        </div>
        <div style={{ display: iconToggle ? "none" : "block" }}
          onClick={() => seticonToggle(true)}
        >
          <div className="app-toggle2">
            <div className="app-img">
              <NavLink
                to={"/CampaignTable"}
                className="links-drop mr-2 ml-2"
                activeclassName="active"
              >
                <img src={Campaign}></img>
              </NavLink>
            </div>
          </div>
          <div className="app-toggle2">
            <div className="app-img">
              <NavLink
                to={"/report"}
                className="links-drop mr-2 ml-2"
                activeclassName="active"
              >
                <img src={Report} style={{ width: "45px" }}></img>
              </NavLink>
            </div>
          </div>
          <div className="app-toggle2">
            <div className="app-img">
              <NavLink
                to={"/payment"}
                className="links-drop mr-2 ml-2"
                activeclassName="active"
              >
                <img src={Payment}></img>
              </NavLink>
            </div>
          </div>
          <div className="app-toggle2">
            <div className="app-img">
              <Tooltip text="Hello Tooltip!">


                <NavLink
                  to={"/Account"}
                  className="links-drop mr-2 ml-2"
                  activeclassName="active"
                >
                  <img src={Account}></img>
                </NavLink>
              </Tooltip>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AppSidebar;
