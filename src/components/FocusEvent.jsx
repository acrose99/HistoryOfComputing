import React from "react";
import './EventFocus.css';

export default function FocusEvent(){
    return(
        <div className="showEventWrapper">
            <div className="eventHeader">
            <div className="vbar-buttons">
            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/buttons/media_player_stream_no.png")}
                                    alt="alt"
                                />
            </button>
            </div>
            <div>
                <p id="eventHeader-text">Header Name</p>

            </div>
            </div>
            <div className="eventBody"></div>
        </div>
    );
}
