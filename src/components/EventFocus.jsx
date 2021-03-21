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
};

function EventFocus(props) {
    function renderCitations() {
        let styleText;
        if (props.type === "CPM") {
            styleText = {
                fontFamily: "Px437_IBM_BIOS",
                color: "#00aaaa",
                fontSize: "1rem",
            }
        }
        else if (props.type === "RetroApple") {
            styleText = {
                fontFamily: "ChicagoFLF",
                color: "#131313",
                marginLeft: 5,
                fontSize: "1rem",
            }
        }
        else {
            styleText = {
                fontFamily: "ChicagoFLF",
                color: "#131313",
                marginLeft: 5,
                fontSize: "1rem",
            }
        }
        if (props.citations[0] == null || props.citations[0]=== "") {
            return (
                <div>
                    <p style={styleText} id="event-citation-text">
                        No citations.
                    </p>
                </div>
            )
        }
        else {
            return (
                <div style={{display: "flex"}}>
                    <p style={styleText} id="event-citation-text">
                        Citations:
                    </p>
                    <p style={styleText} id="event-citation-text">
                        {props.citations[0]}
                    </p>
                    <p style={styleText}  id="event-citation-text-right">
                        {props.citations[1]}
                    </p>
                </div>
            )
        }
    }
    function renderBodyText() {
        if (props.type === "CPM") {
            return (
                <p style={CPMStyleText} className="eventBody-text">
                    {props.body}
                </p>
            )
        }
        else if (props.type === "RetroApple") {
            return (
                <p style={RetroAppleStyleText} className="eventBody-text">
                    {props.body}
                </p>
            )
        }
        else {
            return (
                <p style={RetroAppleStyleText} className="eventBody-text">
                    {props.body}
                </p>
            )
        }
    }
    function renderBody() {
        if (props.EventFocusImages[0] === undefined) {

            return (
                <div>
                    {renderBodyText()}
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
                    {renderBodyText()}
                </div>
            )
        }
    }

    if (props.type === "RetroApple") {
        return (
            <div className="showEventWrapper">
                <div className="showEvent">
                    <div style={RetroAppleStyleBar} className="vaporwaveBar">
                        <div style={{backgroundColor: "#7f7f7f"}} className="vbar-buttons">
                            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/buttons/media_player_stream_no.png")}
                                    alt="alt"
                                />
                            </button>
                            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/buttons/button-left-v.svg")}
                                    alt="Error"
                                    className="leftRight"
                                />
                            </button>
                            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/buttons/button-right-v.svg")}
                                    alt="burr"
                                />
                            </button>
                        </div>
                    </div>
                    <div style={RetroAppleStyleDiv} id="header" className="eventHeader">
                        <h2 id="eventHeader-text" style={RetroAppleStyleText}>
                            {props.header}
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
                        <div style={{backgroundColor: "#000055"}} className="vbar-buttons">
                            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/buttons/media_player_stream_no.png")}
                                    alt="alt"
                                />
                            </button>
                            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/buttons/button-left-v.svg")}
                                    alt="Error"
                                    className="leftRight"
                                />
                            </button>
                            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/buttons/button-right-v.svg")}
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
                    <div style={{backgroundColor: "#9d41ff"}} className="vbar-buttons">
                        <button
                            onClick={props.onClick}
                            className="vaporwaveBarContents"
                        >
                            <img
                                src={require("../images/buttons/media_player_stream_no.png")}
                                alt="alt"
                            />
                        </button>
                        <button className="vaporwaveBarContents">
                            <img
                                src={require("../images/buttons/button-left-v.svg")}
                                alt="Error"
                                className="leftRight"
                            />
                        </button>
                        <button className="vaporwaveBarContents">
                            <img
                                src={require("../images/buttons/button-right-v.svg")}
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
