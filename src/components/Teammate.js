import './Teammate.css';
import React from "react";
// import './EventFocus';

function Teammate(props) {

    return (
        <div id = "teamDiv">
            <div class = "vaporwaveBar">

            </div>
            <div class = "info">
                <img src = {props.image} alt ="George" class="teamImg"/>
                <div class="infoBio">
                    <p class = "eventBody-text">{props.bio}</p>
                    <ul class = "bioList">
                        <p class = "bioList">Links:</p>
                        <li class = "bioList">
                            <img src = {require("../images/world-1.png")} alt="" class ="bioList"/>
                            <a class = "bioList" href = {props.links[0][1]}>{props.links[0][0]}</a></li>
                        <li class="bioList">
                            <img src = {require("../images/world-1.png")} alt = " " class ="bioList"/>
                            <a class ="bioList" href={props.links[1][1]}>{props.links[1][0]}</a>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    );


}

export default Teammate;
