import React, {
  forwardRef,
  useContext,
  useEffect,
  useState,
  memo,
} from "react";
import "./ContentHeader.css";
import navig from "../../assets/chevron-down.svg";
import filter from "../../assets/filter.svg";
import download from "../../assets/download.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import DatePicker from "react-datepicker";
import calender from "../../assets/calendar.svg";
import { useNavigate } from "react-router-dom";
import AppContext from "../../Context/AppContext";
import axios from "../../axios/axios";
import moment from "moment/moment";
import { CSVLink } from "react-csv";
import info from "../../assets/info.svg";
import { Modal, ModalBody, Button } from "react-bootstrap";
import SwitchListViewtickets from "../SwitchListView/SwitchListViewtickets";
import { useRef } from "react";
const ContentHeader = ({


  values,
  setValues,

  filterData,

  setLoader,

}) => {
  const [show, setShow] = useState(false);


  const [campaignModel, setCampaignModel] = useState([
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ])
  const handleClose = () => setShow(false);
  const offcanvasRef = useRef(null);
  const handleShow = () => {
    setShow(!show);
  };
  const date = new Date();
  var _date = new Date();
  _date.setDate(_date.getDate() - 6);
  const frmdate =
    _date.getMonth() + 1 + "/" + _date.getDate() + "/" + date.getFullYear();
  const todate =
    date?.getMonth() + 1 + "/" + date?.getDate() + "/" + date.getFullYear();

  const [startDate, setStartDate] = useState(new Date(frmdate));
  const [endDate, setEndDate] = useState(new Date(todate));
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end)
  };
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input w-100" onClick={onClick} ref={ref}>
      {value ? value : "From to Date"}
      <img src={calender} alt="calender" className="custom-input-calender" />
    </button>
  ));
  return (
    <>
      <div className="row">
        <div className='col-lg-12'>
          <div className='r_title'>
            <div className='title'>
              <h3>Report</h3>
            </div>
            
            <div className='button'>

              <button className='btn btn-primary' type="button"
                onClick={handleShow}>Filter</button>

            </div>
          </div>
        </div>
      </div>
      <div ref={offcanvasRef}>
        <div
          style={{ display: show ? 'block' : 'none' }}
          onHide={handleClose}
          className="filter-op"
        >
          <div className="row">
            <div className="col-lg-4">
              <div className="filter-offcanvas-body">
                <label>Location</label>
                <Select
                  className="filter-location"
                  closeMenuOnSelect={true}
                  options={campaignModel}
                />

              </div>
            </div>
            <div className="col-lg-4 d">
              <div className="filter-offcanvas-body">
                <label>Date Range</label>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  className="form-control"
                  selectsRange
                  customInput={<CustomInput />}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="filter-offcanvas-body">
                <label>Format</label>
                <Select
                  className="filter-location"
                  closeMenuOnSelect={true}
                  options={campaignModel}
                />

              </div>
            </div>
            <div className="col-lg-4">
              <div className="filter-offcanvas-body">
                <label>Campaigns</label>
                <Select
                  className="filter-location"
                  closeMenuOnSelect={true}
                  options={campaignModel}
                />

              </div>
            </div>
            <div className="col-lg-4">
              <div className="filter-offcanvas-body">
                <label>Type</label>
                <Select
                  className="filter-location"
                  closeMenuOnSelect={true}
                  options={campaignModel}
                />

              </div>
            </div>
            <div className="col-lg-12">
              <div className="filter-offcanvas-body">
                <div className="submit">
                  <button onClick={handleClose}className="btn btn-success">submit</button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};
export default memo(ContentHeader);
