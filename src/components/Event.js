import React from "react";
import "./Event.css";

function Event(props) {
    return (
        <div className="Event">
            <div className="Event-Container">
                <a href={props.href} id={props.id}   className="Event-container-link">
                    <figure className="Event-figure">
                        <img className="Event-image" src={props.image} alt="Error"/>
                    </figure>
                    <div className="Event-body">
                        <span className="Event-date">{props.date}</span>
                        <span className="Event-location">{props.location}.</span>
                        <h3 className="Event-title">{props.title}</h3>
                    </div>
                </a>
            </div>
        </div>
    )
}
export default Event