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
                    <p>Links:</p>
                    <li class = "bioList">{props.links} </li>
                </ul>
                <img src={require("../images/button-right.svg")}/>{props.links}
                
                </div>
            </div>

        </div>
      );


}

export default Teammate;
