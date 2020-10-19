import React from "react";
import "./EventFocus.css";

/* For RetroApple focused Events (I.E MAC 1984) */
const RetroAppleStyleDiv = {
    background: "#7f7f7f",
    border: "2px solid #ffffff",
};
const RetroAppleStyleText = {
    fontFamily: "ChicagoFLF",
    color: "#131313",
    marginLeft: 5,
    fontSize: "1rem",
};

const RetroAppleStyleBar = {
    color: "131313",
    backgroundColor: "#ffffff",
};

/* For CP/M focused Events (I.E Altair 8800) */

const CPMStyleDiv = {
    background: "#000055",
    border: "2px solid #292929",
};
const CPMStyleText = {
    fontFamily: "Px437_IBM_BIOS",
    color: "#00aaaa",
    fontSize: "1rem",
};
const CPMStyleBar = {
    color: "00aaaa",
    backgroundColor: "#292929",
};

function EventFocus(props) {
    function renderCitations() {
        if (props.citations[0] == null || props.citations[0]=== "") {
            return (
                <div>
                    <p id="event-citation-text">
                        No citations.
                    </p>
                </div>
            )
        }
        else {
            return (
                <div style={{display: "flex"}}>
                    <p id="event-citation-text">
                        Citations:
                    </p>
                    <p id="event-citation-text">
                        {props.citations[0]}
                    </p>
                    <p style={{marginLeft: "5px"}} id="event-citation-text">
                        {props.citations[1]}
                    </p>
                </div>
            )
        }
    }
    function renderBody() {
        if (props.EventFocusImages[0] === undefined) {

            return (
                <div>
                    <p className="eventBody-text">
                        {props.body}
                    </p>
                </div>
            )
        }
        else  {
            return (
                <div>
                    <img
                        className="eventBody-image"
                        id="eventBody-image1"
                        src={props.EventFocusImages[0]}
                        alt={""}
                    />
                    <p style={RetroAppleStyleText} className="eventBody-text">
                        <img
                            className="eventBody-image"
                            id="eventBody-image2"
                            src={props.EventFocusImages[1]}
                            alt=""
                        />
                        {props.body}

                    </p>
                </div>
            )
        }
    }

    if (props.type === "RetroApple") {
        return (
            <div className="showEventWrapper">
                <div className="showEvent">
                    <div style={RetroAppleStyleBar} className="vaporwaveBar">
                        <div className="vbar-buttons">
                            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/media_player_stream_no.png")}
                                    alt="alt"
                                />
                            </button>
                            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/button-left-v.svg")}
                                    alt="Error"
                                    className="leftRight"
                                />
                            </button>
                            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/button-right-v.svg")}
                                    alt="burr"
                                />
                            </button>
                        </div>
                    </div>
                    <div style={RetroAppleStyleDiv} id="header" className="eventHeader">
                        <h2 id="eventHeader-text" style={RetroAppleStyleText}>
                            {props.Title}
                        </h2>
                        <div id="locationTimeWrapper"/>
                    </div>
                    <div style={RetroAppleStyleDiv} className="eventBody">
                        {renderBody()}
                    </div>
                    <div style={RetroAppleStyleDiv} className="event-citation">
                        {renderCitations()}
                    </div>
                </div>
            </div>
        );
    } else if (props.type === "CPM") {
        return (
            <div className="showEventWrapper">
                <div className="showEvent">
                    <div style={CPMStyleBar} className="vaporwaveBar">
                        <div className="vbar-buttons">
                            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/media_player_stream_no.png")}
                                    alt="alt"
                                />
                            </button>
                            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/button-left-v.svg")}
                                    alt="Error"
                                    className="leftRight"
                                />
                            </button>
                            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/button-right-v.svg")}
                                    alt="burr"
                                />
                            </button>
                        </div>
                    </div>
                    <div style={CPMStyleDiv} id="header" className="eventHeader">
                        <h2 id="eventHeader-text" style={CPMStyleText}>
                            {props.header}
                        </h2>
                        <div id="locationTimeWrapper"/>
                    </div>
                    <div style={CPMStyleDiv} className="eventBody">
                        {renderBody()}
                    </div>
                    <div style={CPMStyleDiv} className="event-citation">
                        {renderCitations()}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="showEventWrapper">
            <div className="showEvent">
                {/* vaporwave themed navigation bar  */}
                <div className="vaporwaveBar">
                    <div className="vbar-buttons">
                        <button
                            onClick={props.onClick}
                            className="vaporwaveBarContents"
                        >
                            <img
                                src={require("../images/media_player_stream_no.png")}
                                alt="alt"
                            />
                        </button>
                        <button className="vaporwaveBarContents">
                            <img
                                src={require("../images/button-left-v.svg")}
                                alt="Error"
                                className="leftRight"
                            />
                        </button>
                        <button className="vaporwaveBarContents">
                            <img
                                src={require("../images/button-right-v.svg")}
                                alt="burr"
                            />
                        </button>
                    </div>
                </div>

                {/* header for the event  */}
                <div id="header" className="eventHeader">
                    <h2 id="eventHeader-text">{props.header}</h2>
                    <div id="locationTimeWrapper"/>
                </div>

                {/* event body  */}
                <div className="eventBody">
                    {renderBody()}
                </div>
                <div className="event-citation">
                    {renderCitations()}
                </div>
            </div>
        </div>
    );
}

export default EventFocus;
//trying to figure out if i want to use a function stateless component or a stateful component
//researching what the freaking difference is
/**
 * making it a component so i can use state for going to another page like from event page 1 to event page 2
 */
