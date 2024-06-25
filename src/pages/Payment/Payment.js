import React, { useState } from 'react';
import "./Payment.css"
import DataTable from 'react-data-table-component';
import { NavLink } from "react-router-dom";
import LineChart from '../../components/lineChart/LineChart';
import Plus from '../../assets/icons8-plus-50.png'


const Payment = () => {
    const [loader, setLoader] = useState(false);
    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June',],
        datasets: [
            {
                label: "Clicks",
                data: [54, 6, 90, 50, 76, 4],
                backgroundColor: "#FFA361",
                borderColor: "#FFA361",
                tension: 0.1,
                fill: false,
                shadowOffsetX: 0,
                shadowOffsetY: 4,
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 5,
            },
            {
                label: "Impressions",
                data: [4, 67, 34, 4, 89, 78],
                backgroundColor: "#7381FF",
                borderColor: "#7381FF",
                tension: 0.1,
                fill: false,
                shadowOffsetX: 0,
                shadowOffsetY: 67,
                shadowColor: 'red',
                shadowBlur: 5,
            },
        ],
    };
    const lineOptions = {
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
    const customStyles = {
        rows: {
            style: {
                marginBottom: '10px', // Adjust spacing between rows
                cursor: 'default', // Disable hover effect
            },
        },
    };
    return (
        <div className='payment'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='c_title'>
                        <div className='title'>
                            <h3>Payment</h3>
                        </div>


                    </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="cards">
                        <p>Currect Balance</p>
                        <h1>$234</h1>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="cards2">
                        <p>Add Balances</p>
                        <img src={Plus}></img>
                    </div>
                </div>


                <div className='col-lg-12'>

                    <div className='p_table'>
                        <div>
                            <p>Payment Transaction</p>
                        </div>
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

export default Payment;