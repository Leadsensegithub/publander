import React, { useContext, useEffect, useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import WorldMap from "react-svg-worldmap";
import "./Dashboard.css";
import Doughnuts from "../../components/doughnuts/Doughnuts";
import parcel from "../../assets/parcel.svg";

import LineChart from "../../components/lineChart/LineChart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AppContext from "../../Context/AppContext";
import Loader from "../../components/Loader/loader";

import moment from "moment";

const Dashboard = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June',],
    datasets: [
      {
        label: "Clicks",
        data: [54, 6, 90, 50, 76, 4],
        backgroundColor: "#ffd3b454",
        borderColor: "#FFA361",
        tension: 0.1,
        fill: true,
        shadowOffsetX: 0,
        shadowOffsetY: 4,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowBlur: 5,
      },
      {
        label: "Impressions",
        data: [4, 67, 34, 4, 89, 78],
        backgroundColor: "#cacfff54",
        borderColor: "#7381FF",
        tension: 0.1,
        fill: true,
        shadowOffsetX: 0,
        shadowOffsetY: 67,
        shadowColor: 'red',
        shadowBlur: 5,
      },
    ],
  };
  const lineOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        usePointStyle: true,
        pointStyle: "circle",
        yAlign: "right",
      },
    },
  };
  const pending_inbound = {
    labels: ['text campaign 1', 'text campaign 2', 'text campaign 3', 'text campaign 4', 'text campaign 5',],
    // labels: ['0-2', '3-4 ', '5-6', '>6'],
    datasets: [
      {
        data: [45, 977, 675, 5443, 67],
        backgroundColor: [
          "#FFC100",
          "#FF7400",
          "#FF2400",
          "#C21807",
          "#A9C275",
        ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        // ],
        borderWidth: 0,
        //borderRadius:30
      },
    ],
  };
  const options = {
    type: "doughnut",
    plugins: {
      legend: {
        display: false,
        // position:'bottom',
        // labels: {
        //  usePointStyle:true,
        // pointStyle:'circle',
        // }
      },
      tooltip: {
        // titleAlign:'center',
        // bodyAlign:'center',
        // footerAlign:'center',
        usePointStyle: true,
        pointStyle: "circle",
        backgroundColor: "#10181E",
        yAlign: "right",
      },
      datalabels: {
        // formatter:(value,context)=>{
        //   console.log(context)
        // }
        color: "white",
        font: {
          weight: "bold",
        },
      },
    },
  };
  return (
    <>
      <div className="dashboard">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-top">
              <h1>Dashboard</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-4">
            <div className="cards">
              <p>Click</p>
              <h1>234</h1>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <div className="cards">
              <p>Impressions</p>
              <h1>234</h1>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <div className="cards">
              <p>Conversions</p>
              <h1>234</h1>
            </div>
          </div>
        </div>
        <div className="row">

          <div className="col-lg-8">
            <div className="line-chart">
              <LineChart
                lineOptions={lineOptions}
                lineData={lineData}
                loader={loader}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="Doughnuts">
              <Doughnuts

                third_donut={pending_inbound}
                options={options}
                plugins={[ChartDataLabels]}

                loader={loader}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-start">

              <div className="word-map" style={{ backgroundColor: "#FFF", borderRadius: "20px", marginBottom: "70px" }}>
                <WorldMap
                  color="#4f3683"
                  title="Click"
                  value-suffix="people"
                  size="xl"
                  data={data}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex justify-content-start">

              <div className="word-map" style={{ backgroundColor: "#FFF", borderRadius: "20px", marginBottom: "70px" }}>
                <WorldMap
                  color="#4f3683"
                  title="Impressions"
                  value-suffix="people"
                  size="xl"
                  data={data}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
