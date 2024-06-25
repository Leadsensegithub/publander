import React from 'react';
import "./CampaignTable.css"
import DataTable from 'react-data-table-component';
import { NavLink } from "react-router-dom";

const CampaignTable = () => {



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
    return (
        <div className='CampaignTable'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='c_title'>
                        <div className='title'>
                            <h3>My Campaign</h3>
                        </div>
                        <div class="d-flex">
                            <div class="form">
                                <i class="fa fa-search"></i>
                                <input type="text" class="form-control form-input" placeholder="Search anything..." />

                            </div>
                        </div>
                        <div className='button'>
                            <NavLink
                                to={"/CreateCampaign"}
                                className="links-drop mr-2 ml-2"
                                activeclassName="active"
                            >
                                <button className='btn btn-primary'>Create Campaign</button>
                            </NavLink>
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

export default CampaignTable;