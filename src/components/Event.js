import React, {useEffect, useState} from "react";
import "./Event.css";

function Event(props) {
    function onHover() {
        // var svg = <svg width="600" height="92" viewBox="0 0 600 92" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M0 91H300L0 0V91Z" fill="#5C8BAD" fill-opacity="0.8"/>
        //     <path d="M300 0H0L300 91V0Z" fill="#BA91FB" fill-opacity="0.8"/>
        //     <path d="M300 92H600L300 1V92Z" fill="#BA91FB" fill-opacity="0.8"/>
        //     <path d="M600 1H300L600 92V1Z" fill="#5C8BAD" fill-opacity="0.8"/>
        // </svg>
        // document.getElementById(props.id).style.background = svg
        /*    background: url("../images/Backdrop.svg");*/
    }
    // function onHoverOut() {
    //     document.getElementById(props.id).style.backgroundColor ='transparent'
    //     /*    background: url("../images/Backdrop.svg");*/
    // }
    return (
        <div className="Event">
            <div className="Event-Container">
                <a id={props.id}   className="Event-container-link" href="">
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