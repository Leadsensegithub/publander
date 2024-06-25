import React from "react";
import "./outboundcustomersummarygraph.css";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js/auto";
import { OBLDoughnutChart } from "../OBLDoughnutChart/OBLDoughnutChart";
import BarChart from "../barChart/BarChart";

const OutboundCustomersummarygraph = (props) => {
  const { OutboundSLAcustomerSummaryDonut, OutboundSLAcustomerSummaryBar } = props;
  // console.log('OutboundSLAcustomerSummaryDonut', OutboundSLAcustomerSummaryBar)

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
  const data = {
    order_received: "136",
    order_processed: "55",
    order_pending: "27",
  };

  const RoundedDataOne = {
    labels: ["Order Received", "Order Qualified", "Order Process", "Pending"],
    datasets: [
      {
        label: ["Percentage"],
        data: [
          OutboundSLAcustomerSummaryDonut?.received_orders !== "0"
          ? OutboundSLAcustomerSummaryDonut?.received_orders
          : "",
          OutboundSLAcustomerSummaryDonut?.Processed_Orders !== "0"
          ? OutboundSLAcustomerSummaryDonut?.Processed_Orders
          : "",
          OutboundSLAcustomerSummaryDonut?.Pending_Orders !== "0"
          ? OutboundSLAcustomerSummaryDonut?.Pending_Orders
          : "",
        ],
        backgroundColor: ["rgba(83, 191, 92, 1)", "rgba(255, 197, 77, 1)", "rgba(83, 191, 157, 1)", "rgba(249, 76, 102, 1)"],
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
    labels: ["Archieved", "Premium", "Remarks", "Breach"], //Em space(blank space has been entered to give space  )
    datasets: [
      {
        label: ["Percentage"],
        data: [
          OutboundSLAcustomerSummaryDonut?.Acheived_Orders!== "0"
          ? OutboundSLAcustomerSummaryDonut?.Acheived_Orders
          : "",
          OutboundSLAcustomerSummaryDonut?.premium !== "0"
          ? OutboundSLAcustomerSummaryDonut?.premium
          : "",
          OutboundSLAcustomerSummaryDonut?.remarks !== "0"
          ? OutboundSLAcustomerSummaryDonut?.remarks
          : "",
          OutboundSLAcustomerSummaryDonut?.Breach_Orders !== "0"
          ? OutboundSLAcustomerSummaryDonut?.Breach_Orders
          : "",
        ],
        backgroundColor: ["rgba(83, 191, 157, 1)", "rgba(255, 197, 77, 1)", "rgba(249, 76, 102, 1)", "rgba(249, 76, 102, 1)"],
        borderWidth: 0,
      },
    ],
  };
  const RoundedDatathree = {
    labels: ["Archieved", "Breach", "Intransit", "Undelivered"], //Em space(blank space has been entered to give space  )
    datasets: [
      {
        label: ["Percentage"],
        data: [
          OutboundSLAcustomerSummaryDonut?.Del_Acheived_Orders !== "0"
          ? OutboundSLAcustomerSummaryDonut?.Del_Acheived_Orders
          : "",
          OutboundSLAcustomerSummaryDonut?.premium !== "0"
          ? OutboundSLAcustomerSummaryDonut?.premium
          : "",
          OutboundSLAcustomerSummaryDonut?.Del_InTransit_Orders !== "0"
          ? OutboundSLAcustomerSummaryDonut?.Del_InTransit_Orders
          : "",
          OutboundSLAcustomerSummaryDonut?.Del_Breach_Orders !== "0"
          ? OutboundSLAcustomerSummaryDonut?.Del_Breach_Orders
          : "",
        ],
        backgroundColor: ["rgba(255, 197, 77, 1)", "rgba(252, 137, 90, 1)", "rgba(249, 76, 102, 1)", "rgba(83, 191, 157, 1)"],
        borderWidth: 0,
      },
    ],
  };

  const typewise_customer = [
    { type: "PTL", val: "100" },
    { type: "DD", val: "240" },
    { type: "STO", val: "120" },
    // { type: "Receipt", val: "125" },
  ];
  const typewise_customertwo = [
    { type: "UPCOUNTRY", val: "100" },
    { type: "DO", val: "240" },
    { type: "STO", val: "120" },
  ];

  const labels = typewise_customer?.map((o) => o?.type);
  const bardataone = {
    // labels: OutboundSLAcustomerSummaryBar?.map((o) => o?.servicetype),
    labels: labels,
    datasets: [
      {
        label: "Received",
        data: OutboundSLAcustomerSummaryBar?.map((data, index) => data?.received_orders),
        backgroundColor: "rgba(83, 191, 92, 1)",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: "Qualified",
        data: OutboundSLAcustomerSummaryBar?.map((data, index) => data?.Qualified_Orders),
        backgroundColor: "rgba(255, 197, 77, 1)",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: "Processed",
        data: OutboundSLAcustomerSummaryBar?.map((data, index) => data?.Processed_Orders),
        backgroundColor: "rgba(83, 191, 157, 1)",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: "Pending",
        data: OutboundSLAcustomerSummaryBar?.map((data, index) => data?.Pending_Orders),
        backgroundColor: "rgba(249, 76, 102, 1)",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: "Archieved",
        data: OutboundSLAcustomerSummaryBar?.map((data, index) => data?.Acheived_Orders),
        backgroundColor: "rgba(255, 163, 97, 1)",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
    
      {
        label: "Breach",
        data: OutboundSLAcustomerSummaryBar?.map((data, index) => data?.Breach_Orders),
        backgroundColor: "rgba(151, 101, 255, 1)",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
    ],
  };
  const labelstwo = typewise_customer?.map((o) => o?.type);
  const bardatatwo = {
    labels: labelstwo,
    datasets: [
      {
        label: "Archieved",
        data: OutboundSLAcustomerSummaryBar?.map((data, index) => data?.Del_Acheived_Orders),
        backgroundColor: "rgba(255, 163, 97, 1)",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: "Breach",
        data: OutboundSLAcustomerSummaryBar?.map((data, index) => data?.Del_Breach_Orders),
        backgroundColor: "rgba(115, 129, 255, 1)",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: "Intransit",
        data: OutboundSLAcustomerSummaryBar?.map((data, index) => data?.Del_InTransit_Orders),
        backgroundColor: "rgba(255, 119, 119, 1)",
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
    ],
  };


  //   plugins: {
  //     legend: {
  //       display: true,
  //       labels: {
  //         pointStyleWidth: 18,
  //         boxWidth: 40,
  //         useBorderRadius: true,
  //         borderRadius: 5,
  //       },
  //     },
  //     responsive: true,
  //     maintainAspectRatio: false,
  //     barPercentage: 0.1,
  //     tooltip: {
  //       backgroundColor: "white",
  //       bodyColor: "black",
  //       borderWidth: 5,
  //       // usePointStyle: true,
  //       // pointStyle: "circle",
  //       // padding: 10,
  //       // boxPadding: 10,
  //       // bodyFont: {
  //       //   size: 10,
  //       // },
  //       // yAlign: "right",
  //       callbacks: {
  //         label: function (context) {
  //           const label = context.dataset.label || "";
  //           const value = context.formattedValue || "";

  //           return `${label}: ${value}`;

  //           // return console.log("actual", `${label}`);
  //         },
  //       },
  //       enabled: true,
  //       mode: "index",
  //       intersect: false,
  //     },
  //   },
  //   scales: {
  //     x: {
  //       ticks: {
  //         font: {
  //           size: 12.5,
  //         },
  //       },
  //     },
  //     y: {
  //       ticks: {
  //         font: {
  //           size: 12,
  //         },
  //       },
  //     },
  //   },
  // };
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
          console.log('information', value)
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
  return (
    <div className="outboundSLA-performance">
      <div className="outboundSLA-performance-chart row my-3 mx-0 mb-lg-4 mb-sm-3 mb-md-3">
        <div className="Overall_OBL_chart col-lg-4 col-sm-12 col-md-12 ">
          <div className="card outboundSLA-chart-card py-3 h-100">
            <h5 className="text-left pb-3">
              Warehouse -  Redington Order Processed
            </h5>
            <OBLDoughnutChart
              RoundedData={RoundedDataOne}
              RoundedOptions={RoundedOptions}
              text_total={"Total"}
              percentage={
                Number(OutboundSLAcustomerSummaryDonut?.received_orders) +
                Number(OutboundSLAcustomerSummaryDonut?.Processed_Orders) +
                Number(OutboundSLAcustomerSummaryDonut?.Pending_Orders)
              }
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
              chartname={"OutboundSLA"}
            />
          </div>
        </div>
        <div className="Pending_OBL_chart col-lg-4 col-sm-12 col-md-12">
          <div className="card outboundSLA-chart-card py-3 h-100">
            <h5 className="text-left pb-3">Warehouse -  Redington Order Type</h5>
            <OBLDoughnutChart
              RoundedData={RoundedDatatwo}
              RoundedOptions={RoundedOptions}
              text_total={"Total"}
              percentage={
                Number(OutboundSLAcustomerSummaryDonut?.Acheived_Orders) +
                Number(OutboundSLAcustomerSummaryDonut?.premium) +
                Number(OutboundSLAcustomerSummaryDonut?.remarks) +
                Number(OutboundSLAcustomerSummaryDonut?.Breach_Orders)
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
              persymbol={true}
              chartname={"OutboundSLA"}
            />
          </div>
        </div>
        <div className="Pending_OBL_chart col-lg-4 col-sm-12 col-md-12">
          <div className="card outboundSLA-chart-card py-3 h-100">
            <h5 className="text-left pb-3">Warehouse -  Redington Delivery</h5>
            <OBLDoughnutChart
              RoundedData={RoundedDatathree}
              RoundedOptions={RoundedOptions}
              text_total={"Total"}
              percentage={
                Number(OutboundSLAcustomerSummaryDonut?.Del_Acheived_Orders) +
                Number(OutboundSLAcustomerSummaryDonut?.premium) +
                Number(OutboundSLAcustomerSummaryDonut?.Del_InTransit_Orders) +
                Number(OutboundSLAcustomerSummaryDonut?.Del_Breach_Orders)
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
              persymbol={true}
              chartname={"OutboundSLA"}
            />
          </div>
        </div>
      </div>
      <div className="bar-trend row mx-0 mb-lg-4 mb-sm-3 mb-md-3">
        <div className="col-lg-12 col-sm-12 col-md-12">
          <div className="w-100">
            <BarChart
              barOptions={barOptions}
              barData={bardataone}
              pluginInboundwarehouse={[ChartDataLabels]}
              // loader={loader}
              // isLoading={isLoadingtrendIBD}
              // isFetching={isFetchingtrendIBD}
              page={"OutboundSLA"}
            />
          </div>
        </div>
      </div>
      <div className="bar-trend row mx-0 mb-lg-4 mb-sm-3 mb-md-3">
        <div className="col-lg-12 col-sm-12 col-md-12">
          <div className="w-100">
            <BarChart
              barOptions={barOptions}
              barData={bardatatwo}
              pluginInboundwarehouse={[ChartDataLabels]}
              // loader={loader}
              // isLoading={isLoadingtrendIBD}
              // isFetching={isFetchingtrendIBD}
              page={"OutboundSLADelivery"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutboundCustomersummarygraph;
