import React from "react";
import "./warehouseorderwisegraph.css";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js/auto";
import { OBLDoughnutChart } from "../OBLDoughnutChart/OBLDoughnutChart";
import BarChart from "../barChart/BarChart";


const Warehouseorderwisegraph = (props) => {
  const { inboundSLAwarehouseorderwise } = props;
  // console.log(inboundSLAwarehouseorderwise?.[0])
  const RoundedOptions = {
    type: "doughnut",
    events: ["mousemove"],

    plugins: {
      legend: {
        display: false,
        itemSpacing: 80,
        position: "bottom", // Aligns the legend at the bottom
        align: "center", // Centers the legend horizontally
        padding: 80,
        fontSize: "20px",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        usePointStyle: true,
        pointStyle: "circle",
        backgroundColor: "#10181E",
        xAlign: "center",
        yAlign: "top",
      },
      datalabels: {
        color: "white",
        font: {
          weight: "bold",
        },
        padding: "10px",
      },
      hover: {
        intersect: false,
      },
    },
  };
  const RoundedDataOne = {
    labels: ["Order Received", "Order Processed", "Order Pending"],
    datasets: [
      {
        label: ["Percentage"],
        data: [
          inboundSLAwarehouseorderwise?.[0]?.received_orders !== "0"
            ? inboundSLAwarehouseorderwise?.[0]?.received_orders
            : "", ,
          inboundSLAwarehouseorderwise?.[0]?.processed_orders !== "0"
            ? inboundSLAwarehouseorderwise?.[0]?.processed_orders
            : "", ,
          inboundSLAwarehouseorderwise?.[0]?.Pending_Orders !== "0"
            ? inboundSLAwarehouseorderwise?.[0]?.Pending_Orders
            : "", ,
        ],
        backgroundColor: ["#53BF9D", "#FFC54D", "#F94C66"],
        borderWidth: 0,
      },
    ],
  };

  const dataone = {
    acheived: "55",
    premium: "27",
    remarks: "14",
    breach: "136",
  };

  const RoundedDatatwo = {
    labels: ["Acheived", "Premium", "Remarks", "Breach "], //Em space(blank space has been entered to give space  )
    datasets: [
      {
        label: ["Percentage"],
        data: [
          inboundSLAwarehouseorderwise?.[0]?.Acheived_Orders !== "0"
            ? inboundSLAwarehouseorderwise?.[0]?.Acheived_Orders
            : "",

          inboundSLAwarehouseorderwise?.[0]?.Premiun_Orders !== "0"
            ? inboundSLAwarehouseorderwise?.[0]?.Premiun_Orders
            : "",
          inboundSLAwarehouseorderwise?.[0]?.Remarks_Orders !== "0"
            ? inboundSLAwarehouseorderwise?.[0]?.Remarks_Orders
            : "",
          inboundSLAwarehouseorderwise?.[0]?.Breach_Orders !== "0"
            ? inboundSLAwarehouseorderwise?.[0]?.Breach_Orders
            : "",
        ],
        backgroundColor: ["#83BC67", "#184014", "#FF7D7D", "#D92F2F"],
        borderWidth: 0,
      },
    ],
  };








  return (
    <div className="inboundSLA-performance">
      <div className="inboundSLA-performance-chart row my-3 mx-0 mb-lg-4 mb-sm-3 mb-md-3">
        <div className="Overall_OBL_chart col-lg-6 col-sm-12 col-md-12 ">
          <div className="card inboundSLA-chart-card py-3 h-100">
            <h5 className="text-left pb-3">
              Order Status
            </h5>
            <OBLDoughnutChart
              RoundedData={RoundedDataOne}
              RoundedOptions={RoundedOptions}
              text_total={"Total"}
              percentage={
                Number(inboundSLAwarehouseorderwise?.[0]?.received_orders) +
                Number(inboundSLAwarehouseorderwise?.[0]?.processed_orders) +
                Number(inboundSLAwarehouseorderwise?.[0]?.Pending_Orders)
              }
              plugins={
                !Object.values(dataone ?? {}).every((o) => o == 0) && [
                  ChartDataLabels,
                ]
              }
              overall={false}
              // loader={loader}
              // isLoading={graphLoading}
              // setLoader={setLoader}
              persymbol={false}
              chartname={"inboundSLA"}
            />
          </div>
        </div>
        <div className="Pending_OBL_chart col-lg-6 col-sm-12 col-md-12">
          <div className="card inboundSLA-chart-card py-3 h-100">
            <h5 className="text-left pb-3">Processed Status</h5>
            <OBLDoughnutChart
              RoundedData={RoundedDatatwo}
              RoundedOptions={RoundedOptions}
              text_total={"Total"}
              percentage={
                Number(inboundSLAwarehouseorderwise?.[0]?.Acheived_Orders) +
                Number(inboundSLAwarehouseorderwise?.[0]?.Premiun_Orders) +
                Number(inboundSLAwarehouseorderwise?.[0]?.Remarks_Orders) +
                Number(inboundSLAwarehouseorderwise?.[0]?.Breach_Orders)
              }
              plugins={
                !Object.values(dataone ?? {}).every((o) => o == 0) && [
                  ChartDataLabels,
                ]
              }
              overall={true}
              // loader={loader}
              // isLoading={pendinggraphLoading}
              // setLoader={setLoader}
              persymbol={false}
              chartname={"inboundSLA"}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Warehouseorderwisegraph;
