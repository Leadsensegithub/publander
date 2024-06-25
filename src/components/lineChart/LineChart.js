import React from "react";
import { Line } from "react-chartjs-2";
import Loader from "../Loader/loader";
import "./LineChart.css";

const LineChart = (props) => {
  const { lineOptions, lineData, loader, selectedType, page, response } = props;
  console.log("ffffffff", response?.statuscode);
  return (
    <div className="line-card card h-90">
      <div className="card-body px-lg-5 pt-lg-2 pb-lg-5">
        {loader ? (
          <Loader />
        ) : (
          <>
            <div className="custom-line-chart">
              <div className="line-chart-title-and-identifier d-flex justify-content-between align-items-center my-lg-3">
                <h4 className="line-chart-title mb-0">Report</h4>
                <div className="line-chart-identifier d-flex gap-4 pe-lg-4">
                  <div className="IBD-identifier d-flex align-items-center">
                    <span className="btn btn-default btn-circle" />
                    <p className="mb-0 ms-lg-2">click</p>
                  </div>
                  <div className="Done-identifier d-flex align-items-center">
                    <span className="btn btn-default btn-circle" />
                    <p className="mb-0 ms-lg-2">Impressions</p>
                  </div>
                </div>
              </div>

              <Line options={lineOptions} data={lineData} />
            </div>
            {page == "1" && response?.length !== 0 ? (
              <p
                style={{
                  textAlign: "center",
                  color: "#dc3545",
                  fontSize: "20px",
                  marginTop: "25px",
                }}
              >
                Selected Type :{" "}
                {selectedType?.type?.charAt(0).toUpperCase() +
                  selectedType?.type?.slice(1)}
              </p>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LineChart;
