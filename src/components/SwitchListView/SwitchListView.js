import React from 'react'
import "./SwitchListView.css"

const SwitchListView=({ isOn, handleToggle, onColor})=> {
  return (
    <label style={{ background: isOn && onColor}} className="react-switch">
    <input
      checked={isOn}
      onChange={handleToggle}
      className="react-switch-checkbox"
      type="checkbox"
    />
    <div className="react-switch-button" />
    <div className="react-switch-labels">
  
      <span style={ isOn?{  color:"#0F2851"} : { color: "#FFFFFF" }}>Customer</span>
      <span style={ isOn?{  color:"#FFFFFF"} : { color: "#0F2851" }}>Warehouse</span>
   
      
    </div>
  </label>
  )
}

export default SwitchListView