import React from "react";
import "./ProgressBar.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProgressBars = ({ color, now }) => {
  return (
    <div className="progress-bars">
      <ProgressBar variant={color} now={now} />
    </div>
  );
};

export default ProgressBars;
