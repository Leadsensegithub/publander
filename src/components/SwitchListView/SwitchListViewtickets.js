import React from "react";
import "./SwitchListViewtickets.css";
import graph_normal from "../../assets/graph_normal.svg";
import graph_click from "../../assets/graph_click.svg";
import table_normal from "../../assets/table_normal.svg";
import table_click from "../../assets/table_click.svg";

const SwitchListViewtickets = ({ Ison, HandleToggle, OnColor }) => {
  return (
    <div className="ticketswitch">
      <label style={{ background: Ison && OnColor }} className="react-switch">
        <input
          checked={Ison}
          onChange={HandleToggle}
          className="react-switch-checkbox"
          type="checkbox"
        />
        <div className="react-switch-button" />
        <div className="react-switch-labels">
          <span style={Ison ? { color: "#599BDC" } : { color: "#FDFDFD" }}>
            <img src={Ison ? graph_normal : graph_click} alt="Grid" />
          </span>
          <span style={Ison ? { color: "#FDFDFD" } : { color: "#599BDC" }}>
            <img src={Ison ? table_click : table_normal} alt="Table" />
          </span>
        </div>
      </label>
    </div>
  );
};

export default SwitchListViewtickets;
