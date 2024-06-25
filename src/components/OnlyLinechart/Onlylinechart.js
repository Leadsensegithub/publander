import React from "react";
import { Line } from "react-chartjs-2";
import Loader from "../Loader/loader";
import "./Onlylinechart.css";

const Onlylinechart = (props) => {
  const { lineOptions, lineData, loader, selectedType, page, response } = props;
  console.log("ffffffff", response?.statuscode);
  return (
    <div className="OnlyLine">
      <div>
        {loader ? (
          <Loader />
        ) : (
          <>
            <div>
              

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

export default Onlylinechart;
