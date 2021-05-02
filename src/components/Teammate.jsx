import './Teammate.css';
import React from 'react';
// import './EventFocus';
// import {ThemeStyles} from '../themeStyles'
function Teammate(props) {

    return (
            <div className="teammate">
                <div className="teammate-content">
                    <img src={props.image} alt="Team" className="teamImg"/>
                    {/* for the header which includes picture, name, title */}
                    <h2 className="teammate-name">{props.name}</h2>
                    <p className="teammate-role">{props.role}</p>
                    {/* the bio which includes biography paragraph and the links to websites */}
                    <p className="eventBody-text">{props.bio}</p>
                    <p className="bioList">Links:
                        <img src = {require("../images/buttons/world-1.png").default} alt="" className="bioList"/>
                        <a className="bioList" href={props.links[0][1]}>{props.links[0][0]}</a>
                        <img src={require("../images/buttons/world-1.png").default} alt=" " className="bioList"/>
                        <a className="bioList" href={props.links[1][1]}>{props.links[1][0]}</a>
                    </p>
                </div>
            </div>
      );


}

export default Teammate;
