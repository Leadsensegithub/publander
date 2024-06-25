import React, { useState, useContext } from "react";
import ContentHeader from "../../../components/contentHeader/ContentHeader";
import { Line } from "react-chartjs-2";
import "../Alreport.css";
import LineChart from "../../../components/lineChart/LineChart";
import { useQuery } from "react-query";
import moment from "moment/moment";
import axios from "axios";
import AppContext from "../../../Context/AppContext";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js/auto";
import Rightarrow from "../../../assets/Polygon.svg";

const Hourly = () => {
  const [loader, setLoader] = useState(true);

  const { user, setSuccess, msg, setMsg, commonfilter, setCommonfilter } =
    useContext(AppContext);
  const date = new Date();
  var _date = new Date();
  _date.setDate(_date.getDate() - 9);
  const frmdate =
    _date.getMonth() + 1 + "/" + _date.getDate() + "/" + date.getFullYear();
  const todate =
    date?.getMonth() + 1 + "/" + date?.getDate() + "/" + date.getFullYear();
  const initialValues = {
    ALDate: moment(new Date()).format("YYYY/MM/DD"),
    type: "pick",
  };
  const [values, setValues] = useState(initialValues);
  const [startDateAL, setStartDateAL] = useState(new Date());
  console.log("filtervalue", values);
  const [ALdata, setALdata] = useState();

  const {
    data: HourlyReport,
    isLoading: isLoadinginboundSLACustomer,
    isFetching: isFetchinginboundSLACustomer,
    refetch: HourlyReportRefetch,
  } = useQuery(
    "HourlyReport",
    () => {
      setLoader(true);

      return axios({
        method: "post",
        url: `https://erp.proconnect.in/Unifiedportal/api/v1/hrlypickpack?typ=${values?.type}`,
        headers: {
          Authorization: `Bearer ${user?.logginInfo?.token}`,
        },
        data: {
          fromdate: values?.ALDate,
          todate: values?.ALDate,
        },
      })
        .then((res) => {
          setALdata(res?.data);

          if (res?.data?.statuscode == 202) {
            // setInboundChart(res?.data?.json?.[0]?.[0]);
            setLoader(false);
            // setSuccess(true);
            // setMsg("Successfully fetched!");
            return res?.data?.json?.[0];
          } else if (res?.data?.statuscode == 500) {
            setSuccess(true);
            setMsg("Error when fetching service");
            // setOutboundgraph_err(res?.data?.statuscode);
          }
          setLoader(false);
        })
        .catch((err) => {
          // console.log(err);
        });
    },
    {
      cacheTime: 300000,
    },
    {
      enabled:
        values?.StartDate == moment(new Date(todate)).format("YYYY/MM/DD") ||
        values?.EndDate == moment(new Date(todate)).format("YYYY/MM/DD") ||
        values?.type == "pick",
    }
  );

  const data = {
    labels:
      values?.type == "pick"
        ? HourlyReport?.map((d) => d?.pickworktime)
        : HourlyReport?.map((d) => d?.packworktime),
    datasets: [
      {
        label: {
          display: false,
        },
        data: HourlyReport?.map((d) => d?.target),
        borderColor: "rgba(255, 163, 97, 1)",
        backgroundColor: "transparent",
        borderWidth: 2,
      },
      {
        label: {
          display: false,
        },
        data: HourlyReport?.map((d) => d?.cnt),
        borderColor: "rgba(151, 101, 255, 1)",
        backgroundColor: "transparent",
        borderWidth: 2,
      },
    ],
  };
  //   console.log("AL_data", ALdata);
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: false, // Hide legend
    },
  };

  const filterData = () => {
    HourlyReportRefetch();
  };
  const Resetfilter = () => {
    // setValues({
    //     ...initialValues,
    //     type: "pick"
    // });
    setTimeout(() => {
      filterData();
    }, 1000);
  };

  return (
    <div className="alchart">
      <div>
        <ContentHeader
          Title={"Al report"}
          Submenu_arrow={
            <img
              src={Rightarrow}
              style={{ width: "10px", marginLeft: "8px", marginRight: "8px" }}
            ></img>
          }
          Subtitle={"Hourly Pick and Pack"}
          Arrow={false}
          FilterSLA={true}
          page={"ALreport"}
          Period={false}
          // Filter={true}
          Download={false}
          InfoIcon={false}
          clearallBtn={true}
          setValues={setValues}
          values={values}
          filterData={filterData}
          resetFilter={Resetfilter}
          startDateAL={startDateAL}
          setStartDateAL={setStartDateAL}
        />
      </div>
      <div className="al-line-chart">
        <div>
          <LineChart
            lineData={data}
            lineOptions={options}
            loader={loader}
            selectedType={values}
            page={"1"}
            response={HourlyReport}
          />
        </div>
      </div>
    </div>
  );
};

export default Hourly;
