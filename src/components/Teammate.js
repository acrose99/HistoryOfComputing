import './Teammate.css';
import React from 'react';
// import './EventFocus';

function Teammate(props) {

    return (
        <div id = "teamDiv">
           
            <div class = "info">
                {/* for the header which includes picture, name, title */}
                <div class = "headerBio">
                    <img src = {props.image} alt ="George" class="teamImg"/>
                     <h2>{props.name}</h2>
                    <h3>{props.role}</h3>
                </div> 
                {/* the bio which includes biography paragraph and the links to websites */}
                <div class="infoBio">
                    <p class = "eventBody-text">{props.bio}</p>
                    <div class = "bioList">
                        <p class = "bioList">Links:</p>
                                <img src = {require("../images/world-1.png")} alt="" class ="bioList"/>
                                <a class = "bioList" href = {props.links[0][1]}>{props.links[0][0]}</a>
                                <img src = {require("../images/world-1.png")} alt = " " class ="bioList"/>
                                <a class ="bioList" href={props.links[1][1]}>{props.links[1][0]}</a>
                    </div>
                </div>
            </div>

        </div>
      );


}

export default Teammate;
