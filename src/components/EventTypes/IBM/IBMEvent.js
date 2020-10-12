import React from "react";
// import EventFocus from "../EventFocus";
import "./IBMEvent.css";
function IBMEvent(props) {
    return (
        <div className="IBM-Event">
            <div className="IBM-Event-Container">
                <a href={props.href} id={props.id} className="Apple-Event-container-link">
                    <figure className="IBM-Event-figure">
                        <img className="IBM-Event-image" src={props.image} alt="Error" />
                    </figure>
                    <div className="IBM-Event-body">
                        <span className="IBM-Event-date">{props.date}</span>
                        <span className="IBM-Event-location">{props.location}.</span>
                        <h3 className="IBM-Event-title">{props.title}</h3>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default IBMEvent;
