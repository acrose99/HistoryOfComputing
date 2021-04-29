import React, { Component } from "react";
import "./Navbar.css";
import {ThemeStyles} from '../themeStyles'

import IconButton from "@material-ui/core/IconButton";
import { Icon } from '@iconify/react';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import menuOutlined from '@iconify/icons-ant-design/menu-outlined';


class BigNavbar extends Component{
    render() {
        return (
            <div style={{backgroundColor: this.props.theme.navbarBackground}} id="bigMenu">

                <div id="top-container">
                    <h2 style={{color: this.props.theme.headerColor, fontStyle: "italic"}} id="title">The History Of Computing</h2>
                </div>
                <div  id="bottom-container">
                    <button className="menuItem"><a style={{color: this.props.textNavbarColor}} className="menuItemLink" href="timeline">The Timeline</a></button>
                    <button className="menuItem"><a style={{color: this.props.textNavbarColor}} className="menuItemLink" href="https://github.com/acrose99/HistoryOfComputingDocs">Documentation</a></button>
                    <button className="menuItem"><a style={{color: this.props.textNavbarColor}} className="menuItemLink" href="/team">About US</a></button>
                    <button className="menuItem"><a style={{color: this.props.textNavbarColor}} className="menuItemLink" href="https://ecommons.luc.edu/history_facpubs/42/">The Book</a></button>
                    <button className="menuItem"><a style={{color: this.props.textNavbarColor}} className="menuItemLink" href="https://ssl.cs.luc.edu/">SSL</a></button>
                    <IconButton className="Footer-menuButton" href="https://github.com/acrose99/HistoryOfComputing" edge={"end"}>
                        <Icon className="Footer-menuButton-icon" icon={githubFilled} style={{ color: this.props.theme.textNavbarColor }} />
                    </IconButton>
                </div>
            </div>
        )
    }
}
class MiniNavbar extends Component{
    constructor(props) {
        super(props);
        this.miniMenuFunction = this.miniMenuFunction.bind(this);
        this.state = {
            menuOn: false,
        }
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
            <div id="smallMenu">
                <div id="mini-top-container">

                    <h2 style={{color: this.props.theme.headerColor, fontStyle: "italic"}} id="title">The History Of Computing</h2>
                    <div className="hamLink">
                        <IconButton onClick={this.miniMenuFunction} className="Footer-menuButton" edge={"end"}>
                            <Icon className="Footer-menuButton-icon" icon={menuOutlined} style={{ color: this.props.theme.textNavbarColor }} />
                        </IconButton>
                    </div>

                </div>
                <div id="toggleContainer">
                    <div className="miniMenuItemDiv">
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                        <a href="/timeline" style={{color: this.props.theme.headerColor, background: this.props.theme.background}}  className="miniMenuItem">The Timeline</a>
                    </div>
                    <div className="miniMenuItemDiv">

                        <a  href="/https://ecommons.luc.edu/history_facpubs/42/"  style={{color: this.props.theme.headerColor, background: this.props.theme.background}} className="miniMenuItem">The Book</a></div>
                    <div className="miniMenuItemDiv">
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                        <a href="about" style={{color: this.props.theme.headerColor, background: this.props.theme.background}} className="miniMenuItem">About Us
                        </a>
                    </div>
                    <div className="miniMenuItemDiv">

                        <a href="https://ssl.cs.luc.edu/"  style={{color: this.props.theme.headerColor, background: this.props.theme.background}}className="miniMenuItem">SSL</a></div>
                    <div className="miniMenuItemDiv">

                        <a href="https://github.com/acrose99/HistoryOfComputing" style={{color: this.props.theme.headerColor, background: this.props.theme.background}} className="miniMenuItem">Github</a>
                    </div>
                </div>

            </div>
        )
    }
}
class Navbar extends Component {
    // big = over 700px width. mini = less than 700 width
    constructor(props) {

        super(props);
        this.state = {
            windowBig: true,
        }
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


    render() {
        let theme = this.context;
        return (
            <div>
                {
                    // this is a good old fashioned JS ternary expression. if window big is true it returns one div. if it is not big than it will return another div
                    this.state.windowBig === true ? <BigNavbar theme={theme}/> : <MiniNavbar theme={theme}/>
                }
            </div>
        );
    }
}

Navbar.contextType = ThemeStyles;

export default Navbar;
