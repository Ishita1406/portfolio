import React from "react";
import boyImage from "./assets/image.gif";
import data from "./assets/Data_Analysis.svg";
import numpy from "./assets/numpy-ar21.svg";
import pandas from "./assets/kindpng_5747046.png";
import './Home.css';

const Home = () => {
    return (
        <>
        <div className="home">
            <div>
                <h1 className="hello">Hello All!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
                <img className="boyimage" src={boyImage} alt="Boy"/>
            </div>           
        </div>

        <div className="about">
            <h1 id="h1">What I Do?</h1>
            <div className="about1">
                <div>
                    <img className="data" src={data} alt="#"/>
                </div>
                <div className="text">
                    <h1>Data Analytics & ML</h1>
                    <div>
                        <img className="numpy" src={numpy} alt="#"></img>
                        <img className="pandas" src={pandas} alt="#"></img>
                    </div>
                    <p>💥 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <p>💥 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;