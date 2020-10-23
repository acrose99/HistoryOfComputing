import React from "react";
import "./Navbar.css";


export default function Navbar() {
    var windowSize = window.matchMedia("(max-width:700px)");
    if (windowSize.matches) {
        return (
            // if window is smaller
            <div>
                <p>booh</p>
            </div>
        )
    }
    else {

        return (
            // if window is bigger
            <div id="Nav-container">
                <div id="top-container">
                    <h2 class="title">The History Of Computing</h2>
                    <img className="Nav-icon" src={require("../images/artificial-intelligence.png")} alt="" />

                </div>
                <div id="bottom-container">
                    <button class="menuItem">The Timeline</button>
                    <button class="menuItem">The Book</button>
                    <button class="menuItem">About Us</button>
                    <button class="menuItem">SSL</button>
                    <button class="menuItem"><img class="menuImg" src={require("../images/github.svg")} /></button>

                </div>
            </div>
        )
    }//end if

}