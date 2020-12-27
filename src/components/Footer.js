import React from "react";
import  "./Footer.css";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from '@iconify/react';
import emailIcon from '@iconify/icons-carbon/email';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import {Link} from "react-router-dom";


//TODO: WIP WIP WIP WIP


export default function Footer() {
    return (
        <div id="Footer-container">
            <div className="footer-04">
                <div className="container">
                    <div className="footer-flex-wrap">
                        <div className="footer-block-left">
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                            <a href="">
                                <Link to="/homeNormal"/>
                                <img
                                    src={require("../images/FlatLogo.svg")}
                                    alt="" className="logo-flat" />
                            </a>
                            <p id='slogan'>
                                We make History fun.
                            </p>
                        </div>
                        <div className="line-break" />
                        <div className="footer-block-right">
                            <div className="w-layout-grid grid">
                                <div className="footer-column">
                                    <div className="footer-title">About</div>
                                    <Link to="/team" className="footer-link-dark">Our Team</Link>
                                    <a href="https://github.com/acrose99/HistoryOfComputingDocs" className="footer-link-dark">Documentation</a>
                                    <a href="https://ecommons.luc.edu/history_facpubs/42/" className="footer-link-dark">The Book</a>
                                    <a href="https://ssl.cs.luc.edu/team.html" className="footer-link-dark">SSL</a>
                                </div>
                                <div className="footer-column">
                                    <div className="footer-title">Contribute</div>
                                    <IconButton className="Footer-menuButton" href="https://github.com/acrose99/HistoryOfComputing" edge={"start"}>
                                        <Icon className="Footer-menuButton-icon" icon={githubFilled} style={{ color: '#0029FF' }} />
                                    </IconButton>
                                    <IconButton className="Footer-menuButton" href="mailto:arose5@luc.edu" edge={"start"}>
                                        <Icon className="Footer-menuButton-icon" style={{ color: '#0029FF' }} icon={emailIcon} />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*TODO add Privacy Policy and terms of conditions (usual open source BS)*/}
                    <div className="footer-bottom-full">
                        <div className="footer-wrapper">
                            <div className="text-rights">
                                © Copyright 2012-Present, Software and Systems Laboratory
                            </div>
                        </div>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <div className="footer-wrapper">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="secondary-link-dark">Terms &amp; Conditions</a><a
                                href="#" className="secondary-link-dark">Privacy Policy</a></div>
                    </div>
                </div>
            </div >
        </div >
    )
}
