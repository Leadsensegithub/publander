import React, { useState, useContext } from 'react'
import ContentHeader from '../../components/contentHeader/ContentHeader'
import { Line } from 'react-chartjs-2';
import './Alreport.css'
import LineChart from '../../components/lineChart/LineChart';
import { useQuery } from "react-query";
import moment from "moment/moment";
import axios from '../../axios/axios';
import AppContext from '../../Context/AppContext';
import { Chart as ChartJS, ArcElement, Legend } from "chart.js/auto";
const Alreport = () => {
    const [loader, setLoader] = useState(true);
    const { user, setSuccess, msg, setMsg, commonfilter, setCommonfilter } = useContext(AppContext);
    const date = new Date();
    var _date = new Date();
    _date.setDate(_date.getDate() - 9);
    const frmdate = _date.getMonth() + 1 + "/" + _date.getDate() + "/" + date.getFullYear();
    const todate = date?.getMonth() + 1 + "/" + date?.getDate() + "/" + date.getFullYear();
    const initialValues = {
        StartDate: moment(new Date(frmdate)).format("YYYY/MM/DD"),
        EndDate: moment(new Date(todate)).format("YYYY/MM/DD")
    };
    const [values, setValues] = useState(initialValues)
    console.log('filtervalue', values)
    const [ALdata, setALdata] = useState()
    const {
        isLoading,
        data: AL_report,
        isError,
        error,
        refetch: ALreportRefetch,

    } = useQuery(
        "ALreport",
        () => {


            return axios({
                method: "post",
                url: "https://erp.proconnect.in/Unifiedportal/api/v1/pklinecount?typ=pack",
                headers: {
                    Authorization: `Bearer ${user?.logginInfo?.token}`,
                },
                data: {

                    fromdate: values?.StartDate,
                    todate: values?.EndDate,

                },
            })
                .then((res) => {
                    // console.log('ALreport', res?.data)
                    setALdata(res?.data)
                    setLoader(false)
                })
                .catch((err) => {

                });
        },
        {
            cacheTime: 300000,
        },
        {
            enabled:

                values?.StartDate == moment(new Date(frmdate)).format("YYYY/MM/DD") ||
                values?.EndDate == moment(new Date(todate)).format("YYYY/MM/DD")

        }
    );
    console.log(ALdata?.json[0]?.map((d) => d?.target))
    const label = ALdata?.json[0]?.map((d) => moment(d?.date).format("DD/MM/YYYY"))

    const data = {
        labels: label,
        datasets: [
            {
                label: {
                    display: false
                },
                data: ALdata?.json[0]?.map((d) => d?.target),
                borderColor: 'rgba(255, 163, 97, 1)',
                backgroundColor: 'transparent',
                borderWidth: 2

            },
            {
                label: 'Line 2',
                data: ALdata?.json[0]?.map((d) => d?.cnt),
                borderColor: 'rgba(151, 101, 255, 1)',
                backgroundColor: 'transparent',
                borderWidth: 2
            },

        ],
    };
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: false // Hide legend
        },

    }

    const filterData = () => {
        ALreportRefetch();
    };
    const Resetfilter = () => {
        setTimeout(() => {
            filterData();
        }, 1000);
    };

    return (
        <div className='alchart'>
            <div>
                <ContentHeader
                    Title={"Al Report"}
                    Arrow={false}
                    FilterSLA={true}
                    page={"ALreport"}
                    Period={false}
                    Filter={true}
                    Download={true}
                    InfoIcon={false}
                    clearallBtn={true}
                    setValues={setValues}
                    values={values}
                    filterData={filterData}
                    resetFilter={Resetfilter}

                ></ContentHeader>
            </div>
            <div className='al-line-chart'>
                <div>
                    <LineChart lineData={data} lineOptions={options} loader={loader} />
                </div>
            </div>
        </div>
    )
}

export default Alreport
