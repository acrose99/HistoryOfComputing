import React from "react";
import "./Navbar.css";


export default function Navbar() {

    return (
        <div id="Nav-container">
                <div  id="Nav-navbar">
                    <button className="iconButton">
                        <img  className="Nav-icon" src={require("../images/artificial-intelligence.png")} alt="Ruh roh scoob"/>
                    </button>
                    <div className="Nav-linkButton">
                        <a className="Nav-anchor" href="/home">Home</a>
                    </div>

                    <div className="Nav-linkButton">
                        <a className="Nav-anchor"  href="/timeline">The Timeline</a>
                    </div>
                    <div className="Nav-linkButton">
                        <a  className="Nav-anchor"  href="https://ecommons.luc.edu/history_facpubs/42/">The Book (WIP)</a>
                    </div>
                    <div className="Nav-linkButton">
                        <a className="Nav-anchor" href="https://ssl.cs.luc.edu/team.html">SSL</a>
                    </div>
                    <div className="iconButton">
                        <a className="Nav-anchor" href="https://github.com/acrose99/HistoryOfComputing">
                            <img className="Nav-icon" src={require("../images/github.png")} alt="Github"/>
                        </a>
                    </div>
                    <div className="Nav-linkButton">
                        <a className="Nav-anchor" href="/team">
                            About Us
                        </a>
                    </div>
                </div>
        </div>
        )
}