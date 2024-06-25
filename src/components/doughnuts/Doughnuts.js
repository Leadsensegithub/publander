import React, { memo } from "react";
import { Doughnut } from "react-chartjs-2";
import Loader from "../Loader/loader";
import "./Doughnuts.css";

const Doughnuts = ({

  third_donut,
  options,
  plugins,
  onElementsClick,

  isLoading,

}) => {




  return (
    <div className="donut-card card h-100">
      <div className="card-body p-lg-4">
        {isLoading ? (
          <Loader />
        ) : !third_donut.labels ? (
          <>No Data found</>
        ) : (
          <>
            <div className="donuts d-flex justify-content-around flex-wrap mb-lg-3">
              <div className="donut-pending-inbound d-flex flex-column justify-content-center align-items-center">
                <p className="mb-3">Pending-Inbound</p>
                <div className="inbound">
                 
                  <Doughnut
                    data={third_donut}
                    options={options}
                    plugins={plugins}
                    onClick={() => onElementsClick({ type: "inbound" })}
                  />
                </div>
              </div>


            </div>
            <div className="donut-identifier d-flex justify-content-around align-items-center flex-wrap">
              {third_donut?.labels?.map((d, i) => (
                <div className="d-flex align-items-center identifier" key={i}>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(Doughnuts);
