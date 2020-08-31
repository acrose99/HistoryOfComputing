import React, {useEffect, useState} from "react";
import "./Footer.css";
import Routes from "../Routes";
import IconButton from "@material-ui/core/IconButton";
import { Icon, InlineIcon } from '@iconify/react';
import arrowRightShort from '@iconify/icons-bi/arrow-right-short';
import emailIcon from '@iconify/icons-carbon/email';

//TODO: WIP WIP WIP WIP


export default function Footer() {
    return (
        <div id="Footer-container">
            <div id="Footer-container-top">
                <div id="Footer-container-link-list1">
                    <li className="Footer-link-list-item">
                        <a href="/team" className="Footer-link-list-anchor">
                             <Icon className="Footer-arrow" icon={arrowRightShort} style={{fontSize: '45px'}} />
                             <span className="Footer-link-label">Contact</span>
                        </a>
                    </li>
                    <li className="Footer-link-list-item">
                        <a href="/" className="Footer-link-list-anchor">
                            <Icon className="Footer-arrow" icon={arrowRightShort} style={{fontSize: '45px'}} />
                            <span className="Footer-link-label">Homepage</span>
                        </a>
                    </li>
                    <li className="Footer-link-list-item">
                        <a href="/team" className="Footer-link-list-anchor">
                            <Icon className="Footer-arrow" icon={arrowRightShort} style={{fontSize: '45px'}} />
                            <span className="Footer-link-label">About us</span>
                        </a>
                    </li>
                </div>
                <div id="Footer-container-link-list2">
                    <li className="Footer-link-list-item">
                        <a href="/team" className="Footer-link-list-anchor">
                            <Icon className="Footer-arrow" icon={arrowRightShort} style={{fontSize: '45px'}} />
                            <span className="Footer-link-label">Software Systems Laboratory</span>
                        </a>
                    </li>
                    <li className="Footer-link-list-item">
                        <a href="/team" className="Footer-link-list-anchor">
                            <Icon className="Footer-arrow" icon={arrowRightShort} style={{fontSize: '45px'}} />
                            <span className="Footer-link-label">The Book</span>
                        </a>
                    </li>
                </div>
                <div id="Footer-container-link-icons">
                    <IconButton  className="Footer-menuButton" href="https://github.com/acrose99/HistoryOfComputing" edge={"start"}>
                        <img className="Footer-menuButton-icon" src={require("../images/github.png")} alt="Github"/>
                    </IconButton>
                    <IconButton className="Footer-menuButton" href="mailto:arose5@luc.edu" edge={"start"}>
                        <img className="Footer-menuButton-icon" src={require("../images/MailTo.png")} alt="Mail"/>
                    </IconButton>
                </div>
            </div>
            <div id="Footer-container-bottom">
                <h1 id="Footer-container-bottom-title">The History of Computing
                    <span>
                        <img  className="Footer-icon" src={require("../images/artificial-intelligence.png")} alt="Ruh roh scoob"/>
                    </span>
                </h1>
            </div>
        </div>
    )
}