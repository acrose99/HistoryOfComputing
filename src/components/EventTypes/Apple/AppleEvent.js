import React from "react";
// import EventFocus from "../EventFocus";
import "./AppleEvent.css";
function AppleEvent(props) {
    return (
        <div className="Apple-Event">
            <div className="Apple-Event-Container Event-Container">
                <a href={props.href} id={props.id} className="Apple-Event-container-link Event-container-link">
                    <figure className="Apple-Event-figure Event-figure">
                        <img className="Apple-Event-image Event-image" src={props.image} alt="Error" />
                    </figure>
                    <div className="Apple-Event-body">
                        <span className="Apple-Event-date Event-date">{props.date}</span>
                        <span className="Apple-Event-location Event-location">{props.location}.</span>
                        <h3 className="Apple-Event-title Event-title">{props.title}</h3>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default AppleEvent;
