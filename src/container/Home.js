import React from "react";
import "./Home.css";


//Material-UI imports is placeholder until we create our own, probably in a few days.
import Navbar from "../components/Navbar";

export default function Home() {

    return (
        <div>
            <Navbar/>
            <div className="Home-container">
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
        </div>
    )
}