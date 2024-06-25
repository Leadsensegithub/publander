import React, { useState } from 'react';
import "./Account.css"



const Account = () => {

    return (
        <div className='Account'>
            <div className='Account-body'>
                <div className='title'>
                    <h3>Account Details</h3>
                </div>
                <div className='body-main'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='input-ac'>
                                <label>Account Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='input-ac'>
                                <label>Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='input-ac'>
                                <label>Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='input-ac'>
                                <label>Company Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company Name" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='input-ac'>
                                <label>Skype</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Skype" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='input-ac'>
                                <label>Country</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Country" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='input-ac'>
                                <label>State</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="State" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='input-ac'>
                                <label>City</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='input-ac'>
                                <label>Password</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='input-ac'>
                                <label>Zip Code</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zip Code" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Account;