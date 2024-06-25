import React from "react";
import "./Landingpage.css";
import Video from '../../assets/banner-video1.mp4';

const Landingpage = () => {
    return (
        <div className="LandingPage">
            <div className="content-container">
                <video className="video" loop muted autoplay playsinline >
                    <source src={Video} type="video/mp4" />
                </video>
                <div className="text-overlay">

                    <div className="top-hereader">
                        <div>helo</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landingpage;
