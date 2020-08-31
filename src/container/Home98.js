import React from "react";
import ReactDOM from "react-dom";
import "../98.css/style.css"
import "./Home98.css"

/* Credit for the majority of the CSS goes to Jordan Scales!!!!
        https://jdan.github.io/98.css/?ref=blogduwebdesign.com
        It is distributed under the MIT Licence
        I did some more work, slightly for browser compatibility, and so that the scrollbars are kept to the default.
        That work was on import "../98.css/style.css".
        If you wanna see exactly what I did just compare the changes from the OG file to my own.
 */


export default function Home98() {
    return (
            <div className="Home98-Container">
                {/*the window class is unique to 98.css*/}
                <div className="window">
                    <div className="title-bar">
                        <div className="title-bar-text">Welcome to the History of Computing website!</div>
                        <div className="title-bar-controls">
                        </div>
                    </div>
                    <div className="window-body">
                        <p className="Home98-content">Don't worry, the site wont always look this. But it's a good way to see
                            how far technology has come. This was how Windows 98 looked! </p>
                        <ul className="tree-view">
                            <li className="Home98-TableofContents">Table of Contents:</li>
                            {/*the button class is unique to 98.css*/}
                            <a href="/timeline"><button className="Home98-timelineLink button">The Timeline (CLICK HERE)</button></a>
                            <li>
                                <details open>
                                    <summary>Other things</summary>
                                    <ul>
                                        {/*the window class is unique to 98.css*/}
                                        <a href="/team"> <li/><button className="Home98-link button">Credits </button></a>
                                        <a href="https://ecommons.luc.edu/history_facpubs/42/"><li/><button className="Home98-link button" >Book</button></a>
                                        <a href="https://ssl.cs.luc.edu/team.html"> <li/> <button className="Home98-link button" >Software Systems Laboratory</button></a>
                                        <a href="/home"> <li/> <button className="Home98-link button" >Click here for a normal homepage</button></a>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}