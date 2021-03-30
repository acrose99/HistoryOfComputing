import './Teammate.css';
import React from 'react';
// import './EventFocus';
// import {ThemeStyles} from '../themeStyles'
//Todo Change by theme?
function Teammate(props) {

    return (
        <div id = "teamDiv">

            <div className = "info">
                {/* for the header which includes picture, name, title */}
                <div className="headerBio">
                    <img src = {props.image} alt ="George" className="teamImg"/>
                     <h2>{props.name}</h2>
                    <h3>{props.role}</h3>
                </div>
                {/* the bio which includes biography paragraph and the links to websites */}
                <div className="infoBio">
                    <p className="eventBody-text">{props.bio}</p>
                    <div className="bioList">
                        <p className="bioList">Links:</p>
                                <img src = {require("../images/buttons/world-1.png")} alt="" className="bioList"/>
                                <a className= "bioList" href = {props.links[0][1]}>{props.links[0][0]}</a>
                                <img src = {require("../images/buttons/world-1.png")} alt = " " className="bioList"/>
                                <a className="bioList" href={props.links[1][1]}>{props.links[1][0]}</a>
                    </div>
                </div>
            </div>

        </div>
      );


}

export default Teammate;
