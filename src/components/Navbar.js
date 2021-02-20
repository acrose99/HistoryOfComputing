import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    // big = over 700px width. mini = less than 700 width
    constructor(props) {

        super(props);
        this.state = {
            windowBig: true,
            menuOn: false,
        }
        this.miniMenuFunction = this.miniMenuFunction.bind(this);
    }


    updateMenuStyle() {
        // if the width is less than 800px, it goes into small menu
        if (window.innerWidth <= 800) {
            this.setState({ windowBig: false, });
        }
        else {
            this.setState({ windowBig: true, });
        }
    }

    componentDidMount() {
        this.updateMenuStyle();
        window.addEventListener("resize", this.updateMenuStyle.bind(this));
    }
    componentWillUnmount() {
        // tutorial said i should unmount the event listener so here it is
        window.removeEventListener("resize", this.updateMenuStyle.bind(this));
    }

    miniMenuFunction() {

        let miniMenu = document.getElementById("toggleContainer");
        if (this.state.menuOn === false) {
            miniMenu.style.display = "block";
            this.setState({ menuOn: true, });
        }
        else {
            miniMenu.style.display = "none";
            this.setState({ menuOn: false, });
        }
    }

    render() {
        return (
            <div>
                {
                    // this is a good old fashioned JS ternary expression. if window big is true it returns one div. if it is not big than it will return another div
                    this.state.windowBig === true ?

                        <div id="bigMenu">

                            <div id="top-container">
                                <h2 id="title">The History Of Computing
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <Link to="/homeNormal" >
                                        <img className="Nav-icon" src={require("../images/artificial-intelligence.png")} alt="" />
                                    </Link>
                                </h2>
                            </div>
                            <div id="bottom-container">
                                <button className="hvr-sweep-to-right"><Link className="menuItemLink" to="/timeline">The Timeline</Link></button>
                                <button className="hvr-sweep-to-right"><a className="menuItemLink" href="https://github.com/acrose99/HistoryOfComputingDocs">Documentation</a></button>
                                <button className="hvr-sweep-to-right"><Link className="menuItemLink" to="/team">About US</Link></button>
                                <button className="hvr-sweep-to-right"><a className="menuItemLink" href="/https://ecommons.luc.edu/history_facpubs/42/">The Book</a></button>
                                <button className="hvr-sweep-to-right"><a className="menuItemLink" href="https://ssl.cs.luc.edu/">SSL</a></button>
                                <button className="gitItem" >
                                    <a href="https://github.com/acrose99/HistoryOfComputing">
                                        <img className="menuImg" src={require("../images/github.svg")} role="link" aria-label="Github Link" alt="Github" />
                                    </a>
                                </button>
                                {/* put back in prev line: style={{ marginLeft: "45%" }} */}
                            </div>
                        </div>

                        :
                        // if it is false
                        <div id="smallMenu">
                            <div id="mini-top-container">

                                <h2 className="title">The History Of Computing</h2>
                                {/* <img className="Nav-icon" src={require("../images/artificial-intelligence.png")} alt="" /> */}
                                {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                                <a className="hamLink">
                                    <Link to="/homeNormal" />
                                    <img id="hamIcon" src={require("../images/menu.svg")} alt="X" onClick={this.miniMenuFunction} />
                                </a>

                            </div>
                            <div id="toggleContainer">
                                <div className="miniMenuItemDiv">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                                    <a className="miniMenuItem">The Timeline
                                        < Link to="/timeline" />
                                    </a>
                                </div>
                                <div className="miniMenuItemDiv">

                                    <a href="/https://ecommons.luc.edu/history_facpubs/42/" className="miniMenuItem">The Book</a></div>
                                <div className="miniMenuItemDiv">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                                    <a className="miniMenuItem">About Us
                                       < Link to="/team" />
                                    </a>
                                </div>
                                <div className="miniMenuItemDiv">

                                    <a href="https://ssl.cs.luc.edu/" className="miniMenuItem">SSL</a></div>
                                <div className="miniMenuItemDiv">

                                    <a href="https://github.com/acrose99/HistoryOfComputing" className="miniMenuItem">Github</a>
                                </div>
                            </div>

                        </div>
                }
            </div>
        );
    }
}
