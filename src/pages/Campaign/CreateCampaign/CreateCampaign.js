import React, {
    forwardRef,
    useContext,
    useEffect,
    useState,
    memo,
} from "react";
import "./CreateCampaign.css"
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import Select from 'react-select'
import calender from "../../../assets/calendar.svg";
import AWARENESS from '../../../assets/icons8-announcement-50.png'
import Sale from '../../../assets/icons8-sale-tag-50.png'
import Person from '../../../assets/icons8-add-male-user-50.png'
import Search from '../../../assets/icons8-search-in-browser-50.png'
import WorldMap from "react-svg-worldmap";


const CreateCampaign = () => {

    const data = [
        { country: "cn", value: 1389618778 }, // china
        { country: "in", value: 1311559204 }, // india
        { country: "us", value: 331883986 }, // united states
        { country: "id", value: 264935824 }, // indonesia
        { country: "pk", value: 210797836 }, // pakistan
        { country: "br", value: 210301591 }, // brazil
        { country: "ng", value: 208679114 }, // nigeria
        { country: "bd", value: 161062905 }, // bangladesh
        { country: "ru", value: 141944641 }, // russia
        { country: "mx", value: 127318112 }, // mexico
    ];
    const [step1, setStep1] = useState(false)
    const [step2, setStep2] = useState(false)
    const [step3, setStep3] = useState(false)
    const [step4, setStep4] = useState(false)
    const [step5, setStep5] = useState(false)

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

    const [campaignModel, setCampaignModel] = useState([
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ])
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end)
    };
    const Time = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
    return (
        <div className='CreateCampaign'>
            <div className='row'>

                <div className='col-lg-12'>
                    <div className='createCampaign-title'>
                        <h3>New Campaign</h3>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <div className='cards'>
                        <div className='header-cc'>
                            <h4>Campaign Status</h4>
                        </div>
                        <div className='body-cc'>
                            <div className='body-inner-cc'>
                                <div className='input-cc'>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Campaign Name" />
                                </div>
                                <div className='slect-cc'>
                                    <Select
                                        options={campaignModel}
                                        placeholder='Campaign Model'
                                    />
                                </div>
                                <div className='objective'>
                                    <button
                                        onClick={() => handleButtonClick("Button 1")}
                                        className={activeButton == "Button 1" ? "active" : ""}
                                    >
                                        <div>
                                            <img src={AWARENESS}></img>
                                        </div>
                                        AWARENESS
                                    </button>
                                    <button
                                        onClick={() => handleButtonClick("Button 2")}
                                        className={activeButton === "Button 2" ? "active" : ""}
                                    >
                                        <div>
                                            <img src={Search} />
                                        </div>
                                        VISIT
                                    </button>
                                    <button
                                        onClick={() => handleButtonClick("Button 3")}
                                        className={activeButton === "Button 3" ? "active" : ""}
                                    >
                                        <div>
                                            <img src={Person} />
                                        </div>
                                        LEAD GENERATE
                                    </button>
                                    <button
                                        onClick={() => handleButtonClick("Button 4")}
                                        className={activeButton === "Button 4" ? "active" : ""}
                                    >
                                        <div>
                                            <img src={Sale} />
                                        </div>
                                        SALE
                                    </button>
                                </div>

                                <div className='slect-cc'>
                                    <Select
                                        options={campaignModel}
                                        placeholder='Format'
                                    />
                                </div>
                                <div className='slect-cc'>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <Select
                                                options={campaignModel}
                                                placeholder='Country'
                                            />
                                        </div>
                                        <div className='col-lg-4'>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Campaign Name" />
                                        </div>
                                        <div className='col-lg-4'>
                                            <button className='btn w-100 btn-primary add'>Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='cards'>
                        <div className='header-cc'>
                            <h4>Schedule</h4>
                        </div>
                        <div className='body-cc'>
                            <div className='body-inner-cc'>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <label>Date</label>
                                        <DatePicker
                                            dateFormat="dd/MM/yyyy"
                                            selected={startDate}
                                            onChange={onChange}
                                            startDate={startDate}
                                            endDate={endDate}
                                            className="form-control"
                                            selectsRange
                                            customInput={<CustomInput />}
                                        />
                                    </div>
                                    <div className="col-lg-8">
                                        <label>Frequency Cap</label>
                                        <div className="fqr">
                                            <label>A single user will receive the same ad 5 times per 24hours</label>
                                            <input type="checkbox"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="time-range">
                                            <label>Time Range</label>
                                            <div>
                                                <div class="time-selection">

                                                    <button id="selectall0" className="btn btn-primary" style={{ margin: "10px" }} >Select All</button>
                                                    <button id="weekdays" className="btn btn-primary" style={{ margin: "10px" }} >Weekdays</button>
                                                    <button id="weekend" className="btn btn-primary" style={{ margin: "10px" }} >Weekends</button>
                                                    <table>
                                                        <tr>
                                                            <td></td>
                                                            {Time.map((d) => (<td>{d}</td>))}

                                                        </tr>
                                                        <tr>
                                                            <td>Mon </td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tue</td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wed</td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Thu</td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fri</td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekdays" name="" /><label for=""></label></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sat</td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sun</td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                            <td><input type="checkbox" class="checkbox weekend" name="" /><label for=""></label></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='cards'>
                        <div className='header-cc'>
                            <h4>Campaign Targeting</h4>
                        </div>
                        <div>
                            <div className='body-cc'>
                                <div className='body-inner-cc'>
                                    <div className='slect-cc'>
                                        <Select
                                            options={campaignModel}
                                            placeholder='Behavior Targeting'
                                        />
                                    </div>
                                    <div className='slect-cc'>
                                        <Select
                                            options={campaignModel}
                                            placeholder='Device'
                                        />
                                    </div>
                                    <div className='slect-cc'>
                                        <Select
                                            options={campaignModel}
                                            placeholder='OS'
                                        />
                                    </div>
                                    <div className='slect-cc'>
                                        <Select
                                            options={campaignModel}
                                            placeholder='Browsers'
                                        />
                                    </div>
                                    <div className='slect-cc'>
                                        <Select
                                            options={campaignModel}
                                            placeholder='Connection'
                                        />
                                    </div>
                                    <div className='slect-cc'>
                                        <Select
                                            options={campaignModel}
                                            placeholder='Carrier'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='cards'>
                        <div className='header-cc'>
                            <h4>Ad Creation</h4>
                        </div>
                        <div>
                            <div className='body-cc'>
                                <div className='body-inner-cc'>
                                    <div className='input-ccc'>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Url" />
                                    </div>
                                    <div className='input-ccc'>
                                        <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Campaign Name" />
                                    </div>
                                    <div className='input-ccc'>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" />
                                    </div>
                                    <div className='input-ccc'>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cards last'>
                        <div className='header-cc'>
                            <h4>Campaign Budget</h4>
                        </div>
                        <div>
                            <div className='body-cc'>
                                <div className='body-inner-cc'>
                                    <div className='input-ccc'>
                                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Campagin budget" />
                                    </div>
                                    <div className='input-ccc'>
                                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Daily budge" />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div>
                        <div className="word-map" style={{ backgroundColor: "#FFF", borderRadius: "20px",boxShadow:"2px 2px 11px rgb(215 215 215)",marginTop:"12px",position:"fixed" }}>
                            <WorldMap
                                color="#4f3683"
                                title=""
                                value-suffix="people"
                                size="lg"
                                data={data}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCampaign;