import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Loader from "../Loader/loader";
import Srceen from "../../assets/srceen.svg";
import "./BarChart.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const BarChart = ({
  barOptions,
  barData,
  loader,
  page,
  isLoading,
  isFetching,
  IBD_OBD,
  pluginInboundwarehouse,
  filterLocation,
  filterCustomer,
  values,
  setValues,
  filterData
}) => {

  const locationfetch = (e) => {
    setValues((d) => ({
      ...d,
      location: e.label,
      location: e.value,
    }));

  }

  const filterCustomer2 = [
    {
      value: "Ascending",
      label: "Ascending"
    },
    {
      value: "Descending",
      label: "Descending"
    },
  ]
  const [ass, setAss] = useState([])
  useEffect(() => {
    setAss(filterCustomer2)
  }, [])
  const locationfetch2 = (e) => {
    setValues((d) => ({
      ...d,
      ar: e.label,
      dr: e.value,
    }));


  }
  const defaultValue = {
    value: values?.client_code,
    label: values?.Customer,
  };


  console.log(values)
  console.log('defaultvalue', values);
  console.log('values', values)
  const [isFullscreen, setIsFullscreen] = useState(false);
  console.log('aaaaaaaaaaaaaaaaaaa', filterCustomer)
  const toggleFullscreen = () => {
    setIsFullscreen(true);
  };
  const Closebutton = () => {
    setIsFullscreen(false);
  };
  console.log('oopopopopopo', barData?.datasets[0]?.data?.length)
  return (
    <div className="bar-card card">
      <div className="card-body px-lg-5 pt-lg-2 pb-lg-5">
        {barData == "" ? (
          <>No Data Found</>
        ) : (
          <>
            {isLoading ? (
              <Loader />
            ) : page === "obd" ? (
              <>
                <div className="custom-bar-chart">
                  <div className="bar-chart-title-and-identifier d-flex justify-content-between align-items-center my-lg-3">
                    <h4 className="bar-chart-title mb-0">OBD Trend</h4>
                    <div className="bar-chart-identifier d-flex gap-4">
                      <div className="IBD-identifier d-flex align-items-center">
                        <span className="btn btn-default btn-circle" />
                        <p className="mb-0 ms-lg-2">OBD</p>
                      </div>
                      <div className="Done-identifier d-flex align-items-center">
                        <span className="btn btn-default btn-circle" />
                        <p className="mb-0 ms-lg-2">Done</p>
                      </div>
                    </div>
                  </div>

                  <Bar options={barOptions} data={barData} />
                </div>
              </>
            ) : page === "ibd" ? (
              <>
                <div className="custom-bar-chart">
                  <div className="bar-chart-title-and-identifier-ibd-obd d-flex justify-content-between align-items-center my-lg-3">
                    <h4 className="bar-chart-title mb-0">IBD Trend</h4>
                    <div className="bar-chart-identifier d-flex gap-4">
                      <div className="IBD-identifier d-flex align-items-center">
                        <span className="btn btn-default btn-circle" />
                        <p className="mb-0 ms-lg-2">IBD</p>
                      </div>
                      <div className="Done-identifier d-flex align-items-center">
                        <span className="btn btn-default btn-circle" />
                        <p className="mb-0 ms-lg-2">Done</p>
                      </div>
                    </div>
                  </div>
                  <Bar options={barOptions} data={barData} />
                </div>
              </>
            ) : page === "InboundSLAcustomersummarytype" ? (
              <>
                <div className="custom-bar-chart-InboundSLA">
                  <div className="bar-chart-title-and-identifier d-flex justify-content-between align-items-center my-lg-3">
                    <h4 className="bar-chart-title mb-0">Order Type</h4>
                  </div>
                  <div>

                    {barData?.datasets[0]?.data?.length != '0' ? <Bar options={barOptions} data={barData} plugins={pluginInboundwarehouse} /> : <div className="nodata">
                      <p>There is no data</p>
                    </div>}
                  </div>
                </div>
              </>
            ) : page === "InboundSLAwarehouse" ? (
              <>
                <div className="custom-bar-chart-InboundSLA">
                  <div className="bar-chart-title-and-identifier d-flex justify-content-between align-items-center my-lg-3">
                    <div className="d-flex">
                      <div className="mt-4">
                        <h4 className="bar-chart-title mb-0">
                          Warehouse wise order status
                        </h4>
                      </div>
                      <div className="ms-5 ">
                        <label className="lable-bar-char">
                          Select Warehouse
                        </label>

                        <Select
                          value={defaultValue}
                          className="filter-location"
                          closeMenuOnSelect={true}
                          components={makeAnimated()}
                          options={filterCustomer}
                          onChange={(e) => locationfetch(e)}
                        />
                      </div>
                      <div className="ms-5">
                        <label className="lable-bar-char">Sort by</label>
                        <Select
                          value={{
                            value: values?.location,
                            label: values?.location,
                          }}
                          className="filter-location"
                          closeMenuOnSelect={true}
                          components={makeAnimated()}
                          options={filterLocation}
                          onChange={(e) => locationfetch(e)}
                        />
                      </div>
                      <div className="ms-5">
                        <label className="lable-bar-char">Order by</label>
                        <Select
                          placeholder={"Order by"}
                          className="filter-location"
                          closeMenuOnSelect={true}
                          components={makeAnimated()}
                          options={ass}
                          onChange={(e) => locationfetch2(e)}
                        />
                      </div>
                    </div>
                    <div className="bar-chart-fullscreen-btn">
                      <button onClick={toggleFullscreen}>
                        <img src={Srceen}></img>
                      </button>
                    </div>
                  </div>
                  <div
                   className={`${isFullscreen ? "fullscreen" : ""}`}
                   style={{
                     height: "calc(100% - 30px)",
                     overflowY: "scroll"
                   }}
                  >
                    {isFullscreen ? (
                      <>
                        <div style={{ display: "flex", justifyContent: "end", paddingTop: "30px" }}>
                          <button className="multiplay" onClick={Closebutton} >
                            ×
                          </button>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    {barData?.datasets[0]?.data?.length != '0' ? <Bar
                      options={barOptions}
                      data={barData}
                      plugins={pluginInboundwarehouse}

                    /> : <div className="nodata">
                      <p>There is no data</p>
                    </div>}
                  </div>
                </div>
              </>
            ) : page === "OutboundSLA" ? (
              <>
                <div className="custom-bar-chart-InboundSLA">
                  <div className="bar-chart-title-and-identifier d-flex justify-content-between align-items-center my-lg-3">
                    <h4 className="bar-chart-title mb-0">
                      Warehouse - Redington Order Type
                    </h4>
                  </div>
                  <div>
                    <Bar options={barOptions} data={barData} plugins={pluginInboundwarehouse} />
                  </div>
                </div>
              </>
            ) : page === "OutboundSLADelivery" ? (
              <>
                <div className="custom-bar-chart-InboundSLA">
                  <div className="bar-chart-title-and-identifier d-flex justify-content-between align-items-center my-lg-3">
                    <h4 className="bar-chart-title mb-0">
                      Warehouse - Delivery status
                    </h4>
                  </div>
                  <div>
                    <Bar options={barOptions} data={barData} plugins={pluginInboundwarehouse} />
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BarChart;
