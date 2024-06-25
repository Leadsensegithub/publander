import React, { useEffect, useRef, useState, forwardRef, } from 'react';
import "./Report.css"
import DataTable from 'react-data-table-component';
import { NavLink } from "react-router-dom";
import calender from "../../assets/calendar.svg";
import Chart from 'chart.js/auto';
import LineChart from '../../components/lineChart/LineChart';
import Onlylinechart from '../../components/OnlyLinechart/Onlylinechart';

import DatePicker from "react-datepicker";
import ContentHeader from '../../components/contentHeader/ContentHeader';
const Report = () => {
    const [loader, setLoader] = useState(false);


    const date = new Date();
    var _date = new Date();
    _date.setDate(_date.getDate() - 6);
    const frmdate =
        _date.getMonth() + 1 + "/" + _date.getDate() + "/" + date.getFullYear();
    const todate =
        date?.getMonth() + 1 + "/" + date?.getDate() + "/" + date.getFullYear();

    const [startDate, setStartDate] = useState(new Date(frmdate));
    const [endDate, setEndDate] = useState(new Date(todate));
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="custom-input w-100" onClick={onClick} ref={ref}>
            {value ? value : "From to Date"}
            <img src={calender} alt="calender" className="custom-input-calender" />
        </button>
    ));
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end)
    };
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
    function createGradient(color1, color2) {
        const ctx = document.createElement('canvas').getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, color1); // Start color
        gradient.addColorStop(1, color2); // End color
        return gradient;
    }
    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June',],
        datasets: [{
            label: "clicks",
            fill: true,
            backgroundColor: '#b0c4ff52',
            borderColor: 'royalblue',
            data: [26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8, 76, 110.8, 142.6],
            borderJoinStyle: 'round', // Ensures smooth joins for the line segments
            pointStyle: 'circle', // Set the point style
            pointRadius: 5,
        }]
    };
    const Imp = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June',],
        datasets: [{
            label: "Impressions",
            fill: true,
            backgroundColor: '#fdd48869',
            borderColor: 'orange',
            data: [26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8, 76, 110.8, 142.6],
            borderJoinStyle: 'round', // Ensures smooth joins for the line segments
            pointStyle: 'circle', // Set the point style
            pointRadius: 5,
        }]
    };
    const Conv = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June',],
        datasets: [{
            label: "clicks",
            fill: true,
            backgroundColor: '#fdfd9582',
            borderColor: '#fdfd00',
            data: [26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8, 76, 110.8, 142.6],
            borderJoinStyle: 'round', // Ensures smooth joins for the line segments
            pointStyle: 'circle', // Set the point style
            pointRadius: 5,
        }]
    };

    const lineOptions = {

        layout: {
            padding: 10,
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                usePointStyle: true,
                pointStyle: "circle",
                yAlign: "right",
            },
        },
    };
    const handleclose = () => {

    }
    return (
        <div className='Report'>
            <ContentHeader

                title={"Report"}

            />


            <div className='row'>
               
                <div className='col-lg-12'>
                    <div className='report-header'>

                        <div className='row'>

                            <div className='col-lg-4'>
                                <div className='chart-lebal'>
                                    <label>Impressions (MTD)</label>
                                    <Onlylinechart lineOptions={lineOptions}
                                        lineData={lineData}
                                        loader={loader}
                                    />
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='chart-lebal' >
                                    <label>Clicks (MTD)</label>
                                    <Onlylinechart
                                        lineOptions={lineOptions}
                                        lineData={Imp}
                                        loader={loader}
                                    />
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='chart-lebal'>
                                    <label>Conversions (MTD)</label>
                                    <Onlylinechart
                                        lineOptions={lineOptions}
                                        lineData={Conv}
                                        loader={loader}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='c_table'>
                        <DataTable
                            columns={columns}
                            data={data}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;