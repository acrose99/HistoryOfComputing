import './Teammate.css';
import React from "react";

export default function Teammate(props) {
    return (
        <div id="Team-teammate">
            <picture id="Team-media">
                <img src={props.image} alt=""/>
            </picture>
            <div id="Team-body">
                <h3 id="Team-name">
                    {props.name}
                </h3>
                <h4 id="Team-role">
                    {props.role}
                </h4>
                <p id="Team-bio">
                    {props.bio}
                </p>
                <h4 id="Team-fav">Favorite piece of tech history:
                    <br/>
                    <br/>
                    <span id="Team-fav-prop">
                        {props.fav}
                    </span>
                </h4>
            </div>
            <div id="Team-links">
                {/*Buttons wil turn into div */}
                <div className="Team-linkContainer">
                    <a className="Team-link" href={props.links[0][1]}>{props.links[0][0]}</a>
                </div>
                <div className="Team-linkContainer" >
                    <a className="Team-link" href={props.links[1][1]}>{props.links[1][0]}</a>
                </div>
            </div>
        </div>
    )
}

