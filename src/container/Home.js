import React from "react";
import "./Home.css";


//Material-UI imports is placeholder until we create our own, probably in a few days.
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {

    return (
        <div>
            <div className="Home-container">
                <Navbar/>
                <div className="Home-media">
                </div>
                <h1  className="Home-content">
                    The History of Computing!
                </h1>
                <div className="Home-buttoncontainer">
                    <button className="Home-Home98link">
                        <a id="Home-Home98-anchor" href="/">
                            Click here for the Windows 98 themed homepage.
                        </a>
                    </button>
                </div>
            </div>
            {/*<Routes/>*/}
            <Footer/>
        </div>
    )
}
