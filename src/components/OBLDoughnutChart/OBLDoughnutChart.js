import React, { memo } from "react";
import { Doughnut } from "react-chartjs-2";
import Loader from "../Loader/loader";
import "./OBLDoughnutChart.css";

export const OBLDoughnutChart = (props) => {
  const {
    RoundedData,
    RoundedOptions,
    percentage,
    text_total,
    plugins,
    loader,
    isLoading,
    isFetching,
    persymbol,
    overall,
    chartname,
    pluginsIBDSLAwarehuseorderwise
  } = props;
  const Data = RoundedData?.labels;
  return (
    <>
      {chartname === "outboundchart" ? (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <div
              className={`OBL-doughnut${overall ? "_overall" : ""}`}
              style={{ position: "relative" }}
            >
              <div className="OBL-doughnut-percentage">
                <p
                  style={{
                    color: `${RoundedData?.datasets?.[0]?.backgroundColor?.find(
                      (color, i) =>
                        i ==
                        RoundedData?.datasets?.[0]?.data?.indexOf(
                          Math.max(...RoundedData?.datasets?.[0]?.data)
                        )
                    )}`,
                    fontSize: "16px",
                    // whiteSpace: "pre-wrap",
                    // marginTop: "-6px",
                    color: "green",
                  }}
                >
                  <span style={{ color: "black" }}>{text_total}</span>
                  <br />
                  {`${percentage}${persymbol ? "%" : ""}`}
                </p>
              </div>
              <Doughnut
                data={RoundedData}
                options={RoundedOptions}
                plugins={plugins}
              />
              <div className="legend-container">
                {Data?.map((label, index) => (
                  <div key={index} className="legend-item">
                    <span
                      className="legend-color"
                      style={{
                        backgroundColor:
                          RoundedData.datasets[0].backgroundColor[index],
                      }}
                    ></span>
                    <span className="legend-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : chartname === "inboundSLA" ? (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="InboundSLA">
              <div className="chart row col-lg-12 col-sm-12 col-md-12">
                <div className="chart_body col-lg-6 col-sm-12 col-md-6">
                  <div
                    className={`InboundSLA_percentage${
                      overall ? "_overall" : ""
                    }`}
                  >
                    <p
                      style={{
                        color: `${RoundedData?.datasets?.[0]?.backgroundColor?.find(
                          (color, i) =>
                            i ==
                            RoundedData?.datasets?.[0]?.data?.indexOf(
                              Math.max(...RoundedData?.datasets?.[0]?.data)
                            )
                        )}`,
                        fontSize: "16px",
                        // whiteSpace: "pre-wrap",
                        // marginTop: "-6px",
                        color: "green",
                      }}
                    >
                      <span style={{ color: "black" }}>{text_total}</span>
                      <br />
                      {`${percentage}${persymbol ? "%" : ""}`}
                    </p>
                  </div>
                  <Doughnut
                    data={RoundedData}
                    options={RoundedOptions}
                    plugins={plugins}
                  />
                </div>

                <div
                  className={`legend-container${
                    overall ? "_overall" : ""
                  } col-lg-6 col-sm-12 col-md-6`}
                >
                  {Data?.map((label, index) => (
                    <div key={index} className="legend-item mb-4">
                      
                      <span
                        className="legend-color"
                        style={{
                          backgroundColor:
                            RoundedData.datasets[0].backgroundColor[index],
                        }}
                      ></span>
                      <span className="legend-label">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      ) : chartname === "OutboundSLA" ? (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="OutboundSLA" style={{ position: "relative" }}>
              <div
                className="chart row col-lg-12 col-sm-12 col-md-12"
                style={{ justifyContent: "center" }}
              >
                <div className="chart_body col-lg-12 col-sm-12 col-md-12">
                  <div className={"InboundSLA_percentage_overall"}>
                    <p
                      style={{
                        color: `${RoundedData?.datasets?.[0]?.backgroundColor?.find(
                          (color, i) =>
                            i ==
                            RoundedData?.datasets?.[0]?.data?.indexOf(
                              Math.max(...RoundedData?.datasets?.[0]?.data)
                            )
                        )}`,
                        fontSize: "16px",
                        // whiteSpace: "pre-wrap",
                        // marginTop: "-6px",
                        color: "green",
                      }}
                    >
                      <span style={{ color: "black" }}>{text_total}</span>
                      <br />
                      {`${percentage}${persymbol ? "%" : ""}`}
                    </p>
                  </div>
                  <Doughnut
                    data={RoundedData}
                    options={RoundedOptions}
                    plugins={plugins}
                  />
                </div>

                <div
                  className={`legend-container_overall col-lg-10 col-sm-12 col-md-6`}
                >
                  {Data?.map((label, index) => (
                    <div key={index} className="legend-item mb-4">
                      <span
                        className="legend-color"
                        style={{
                          backgroundColor:
                            RoundedData.datasets[0].backgroundColor[index],
                        }}
                      ></span>
                      <span className="legend-label">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};
