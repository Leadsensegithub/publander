import React from "react";
import "./customersummarygraph.css";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js/auto";
import { OBLDoughnutChart } from "../OBLDoughnutChart/OBLDoughnutChart";
import BarChart from "../barChart/BarChart";

const Customersummarygraph = (props) => {
  const { inboundSLACustomer, inboundSLACustomertype } = props; //props

  //doughnut chart css
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

  //Doughnut chart data
  const data = {
    order_received: "136",
    order_processed: "55",
    order_pending: "27",
  };

  const RoundedDataOne = {
    labels: ["Order Received", "Order Processed", "Order Pending"],
    datasets: [
      {
        label: ["Percentage"],
        data: [
          inboundSLACustomer?.received_orders !== "0"
            ? inboundSLACustomer?.received_orders
            : "",
          inboundSLACustomer?.processed_orders !== "0"
            ? inboundSLACustomer?.processed_orders
            : "",
          inboundSLACustomer?.Pending_Orders !== "0"
            ? inboundSLACustomer?.Pending_Orders
            : "",
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
          inboundSLACustomer?.Acheived_Orders !== "0"
            ? inboundSLACustomer?.Acheived_Orders
            : "",
          inboundSLACustomer?.Premiun_Orders !== "0"
            ? inboundSLACustomer?.Premiun_Orders
            : "",
          inboundSLACustomer?.Remarks_Orders !== "0"
            ? inboundSLACustomer?.Remarks_Orders
            : "",
          inboundSLACustomer?.Breach_Orders !== "0"
            ? inboundSLACustomer?.Breach_Orders
            : "",
        ],
        backgroundColor: ["#83BC67", "#184014", "#FF7D7D", "#D92F2F"],
        borderWidth: 0,
      },
    ],
  };

  const typewise_customer = [
    { type: "Import", val: "100" },
    { type: "Return", val: "240" },
    { type: "STO", val: "120" },
    { type: "Receipt", val: "125" },
  ];



  const bardata = {
    labels: inboundSLACustomertype?.map((o) => o?.asn_type),
    datasets: [
      {
        label: "Processed",
        data: inboundSLACustomertype?.map((o) => o?.processed_orders),
        backgroundColor: "#53BF9D",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: "Received",
        data: inboundSLACustomertype?.map((o) => o?.received_orders),
        backgroundColor: "#FFC54D",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: "Pending",
        data: inboundSLACustomertype?.map((o) => o?.Pending_Orders),
        backgroundColor: "#F94C66",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.0,
      },
      {
        label: "Acheived",
        data: inboundSLACustomertype?.map((o) => o?.Acheived_Orders),
        backgroundColor: "#83BC67",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: "Premium",
        data: inboundSLACustomertype?.map((o) => o?.Premiun_Orders),
        backgroundColor: "#184014",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: "Remarks",
        data: inboundSLACustomertype?.map((o) => o?.Remarks_Orders),
        backgroundColor: "#FF7D7D",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: "Breach",
        data: inboundSLACustomertype?.map((o) => o?.Breach_Orders),
        backgroundColor: "#D92F2F",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
    ],
  };

  const barOptions = {
    indexAxis: "y",
    plugins: {
      legend: {
        display: true,
        labels: {
          pointStyleWidth: 18,
          boxWidth: 40,
          useBorderRadius: true,
          borderRadius: 5,
        },
      },
      datalabels: {
        color: "#fff",
        formatter: function (value, context) {
          return value !== "0" ? value : "";
        },
      },
      tooltip: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 10,
        bodyFont: {
          size: 10,
        },
        yAlign: "right",
        backgroundColor: "#10181E",
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12.5,
          },
        },
        stacked: true,
      
      },
      y: {

        ticks: {
          font: {
            size: 12,
          },
        },
        stacked: true,
     

      },
    },
  };
  // console.log('data', inboundSLACustomertype)
  return (
    <div className="inboundSLA-performance">
      <div className="inboundSLA-performance-chart row my-3 mx-0 mb-lg-4 mb-sm-3 mb-md-3">
        <div className="Overall_OBL_chart col-lg-6 col-sm-12 col-md-12 ">
          <div className="card inboundSLA-chart-card py-3  h-100">
            <h5 className="text-left">Order Status</h5>
            <OBLDoughnutChart
              RoundedData={RoundedDataOne}
              RoundedOptions={RoundedOptions}
              text_total={"Total"}
              percentage={Number(inboundSLACustomer?.received_orders)}
              plugins={
                !Object.values(data ?? {}).every((o) => o == 0) && [
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
            <h5 className="text-left">Processed Status</h5>
            <OBLDoughnutChart
              RoundedData={RoundedDatatwo}
              RoundedOptions={RoundedOptions}
              text_total={"Total"}
              percentage={
                Number(inboundSLACustomer?.Acheived_Orders) +
                Number(inboundSLACustomer?.Premiun_Orders) +
                Number(inboundSLACustomer?.Remarks_Orders) +
                Number(inboundSLACustomer?.Breach_Orders)
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
      <div className="bar-trend row mx-0 mb-lg-4 mb-sm-3 mb-md-3">
        <div className="col-lg-12 col-sm-12 col-md-12">
          <div className="w-100">
            <BarChart
              barOptions={barOptions}
              barData={bardata}
              pluginInboundwarehouse={[ChartDataLabels]}
              // loader={loader}
              // isLoading={isLoadingtrendIBD}
              // isFetching={isFetchingtrendIBD}
              page={"InboundSLAcustomersummarytype"}
            /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customersummarygraph;
