import React from "react";
import './EventFocus.css';

export default function FocusEvent(){
    return(
        <div className="showEventWrapper">
            <div className="eventHeader">
                <p id="eventHeader-text">Header Name</p>
            </div>
            <div className="eventBody"></div>
        </div>
    );
}
