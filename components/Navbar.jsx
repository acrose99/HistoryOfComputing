import React, { Component } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import {ThemeStyles} from '../context/themeStyles'
import IconButton from "@material-ui/core/IconButton";
import { Icon } from '@iconify/react';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import menuOutlined from '@iconify/icons-ant-design/menu-outlined';


class BigNavbar extends Component{
    render() {
        return (
            <div style={{backgroundColor: this.props.theme.navbarBackground}} className={styles.bigMenu}>

                <div className={styles.topContainer}>
                    <h2 style={{color: this.props.theme.headerColor}} className={styles.title}>The History Of Computing</h2>
                </div>
                <div  className={styles.bottomContainer}>
                    <Link className={styles.menuItem} href="/Timeline/all">
                     <a style={{color: this.props.textNavbarColor}} className={styles.menuItemLink}>The Timeline</a>
                    </Link>
                    <Link className={styles.menuItem} href="/Team">
                        <a style={{color: this.props.textNavbarColor}} className={styles.menuItemLink}>About Us</a>
                    </Link>
                    <IconButton className={styles.menuItem} href="https://github.com/acrose99/HistoryOfComputing" edge={"end"}>
                        <Icon className={styles.NavbarMenuButtonIcon} icon={githubFilled} style={{ color: this.props.theme.textNavbarColor }} />
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
            <div className={styles.smallMenu}>
                <div className={styles.miniTopContainer}>
                    <h2 style={{color: this.props.theme.headerColor}} className={styles.title}>The History Of Computing</h2>
                    <div className={styles.hamLink}>
                        <IconButton onClick={this.miniMenuFunction} edge={"end"}>
                            <Icon className={styles.NavbarMenuButtonIcon} icon={menuOutlined} style={{ color: this.props.theme.textNavbarColor }} />
                        </IconButton>
                    </div>

                </div>
                <div id="toggleContainer" className={styles.toggleContainer}>
                    <div className={styles.miniMenuItemDiv}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                        <Link href="/Timeline">
                            <a style={{color: this.props.theme.headerColor, background: this.props.theme.background}}  className={styles.miniMenuItem}>The Timeline</a>
                        </Link>
                    </div>
                    <div className={styles.miniMenuItemDiv}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                        <Link href="/Team">
                            <a href="about" style={{color: this.props.theme.headerColor, background: this.props.theme.background}} className={styles.miniMenuItem}>About Us</a>
                        </Link>
                    </div>
                    <div className={styles.miniMenuItemDiv}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                            <a href="https://github.com/acrose99/HistoryOfComputing" style={{color: this.props.theme.headerColor, background: this.props.theme.background}} className={styles.miniMenuItem}>Github/Contribute</a>
                    </div>
                </div>

            </div>
        )
    }
}
class Navbar extends Component {
    constructor(props) {

        super(props);
        this.state = {
            windowBig: true,
        }
    }


    updateMenuStyle() {
        // if the width is less than 768px, it goes into small menu
        if (window.innerWidth < 768) {
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
