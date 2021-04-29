import React, {useContext} from "react";
import "./Footer.css";
import {ThemeStyles} from '../themeStyles'
import IconButton from "@material-ui/core/IconButton";
import { Icon } from '@iconify/react';
import emailIcon from '@iconify/icons-carbon/email';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import { Link } from "react-router-dom";


export default function Footer() {
    const theme = useContext(ThemeStyles);
    return (
        <div id="Footer-container">
            <div style={{backgroundColor: theme.background}} className="footer-04">
                <div className="container">
                    <div className="footer-flex-wrap">
                        <div className="footer-block-left">
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}

                            <Link style={{textDecorationColor: theme.headerColor}} to="/home">
                                <h2 style={{color: theme.headerColor, fontStyle: "italic"}} id="title">The History Of Computing </h2>
                            </Link>
                            <p style={{color: theme.headerColor}}  id='slogan'>
                                We make History fun.
                            </p>
                        </div>
                        <div className="line-break" />
                        <div className="footer-block-right">
                            <div className="w-layout-grid grid">
                                <div className="footer-column">
                                    <div style={{color: theme.textFooterColor}} className="footer-title">About</div>
                                    <Link style={{color: theme.textFooterColor}} to="/team" className="footer-link-dark">Our Team</Link>
                                    <a style={{color: theme.textFooterColor}} href="https://github.com/acrose99/HistoryOfComputingDocs" className="footer-link-dark">Documentation</a>
                                    <a style={{color: theme.textFooterColor}} href="https://ecommons.luc.edu/history_facpubs/42/" className="footer-link-dark">The Book</a>
                                    <a style={{color: theme.textFooterColor}} href="https://ssl.cs.luc.edu/team.html" className="footer-link-dark">SSL</a>
                                </div>
                                <div className="footer-column">
                                    <div style={{color: theme.textColor}} className="footer-title">Contribute</div>
                                    <IconButton className="Footer-menuButton" href="https://github.com/acrose99/HistoryOfComputing" edge={"start"}>
                                        <Icon className="Footer-menuButton-icon" icon={githubFilled} style={{ color: theme.textFooterColor }} />
                                    </IconButton>
                                    <IconButton className="Footer-menuButton" href="mailto:arose5@luc.edu" edge={"start"}>
                                        <Icon className="Footer-menuButton-icon" style={{ color: theme.textFooterColor }} icon={emailIcon} />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-full">
                        <div className="footer-wrapper">
                            <div style={{color: theme.textFooterColor}} className="text-rights">
                                © Copyright 2012-Present, Software and Systems Laboratory
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
