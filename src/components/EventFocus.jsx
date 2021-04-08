import React, {Component} from "react";
import "./EventFocus.css";
// import {ThemeStyles} from '../themeStyles';

//TODO change based on context?

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

class EventFocus extends Component  {
    constructor(props) {
        super(props);
        this.ref = this.props.ref;
    }
     renderCitations() {
        let styleText;
        if (this.props.type === "CPM") {
            styleText = {
                fontFamily: "Px437_IBM_BIOS",
                color: "#00aaaa",
                fontSize: "1rem",
            }
        }
        else if (this.props.type === "RetroApple") {
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
        if (this.props.citations[0] == null || this.props.citations[0]=== "") {
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
                        {this.props.citations[0]}
                    </p>
                    <p style={styleText}  id="event-citation-text-right">
                        {this.props.citations[1]}
                    </p>
                </div>
            )
        }
    }
    renderBodyText() {
        if (this.props.type === "CPM") {
            return (
                <p style={CPMStyleText} className="eventBody-text">
                    {this.props.body}
                </p>
            )
        }
        else if (this.props.type === "RetroApple") {
            return (
                <p style={RetroAppleStyleText} className="eventBody-text">
                    {this.props.body}
                </p>
            )
        }
        else {
            return (
                <p style={RetroAppleStyleText} className="eventBody-text">
                    {this.props.body}
                </p>
            )
        }
    }
    renderBody() {
        if (this.props.EventFocusImages[0] === undefined) {

            return (
                <div>
                    {this.renderBodyText()}
                </div>
            )
        }
        else  {
            return (
                <div>
                    <img
                        className="eventBody-image"
                        id="eventBody-image1"
                        src={this.props.EventFocusImages[0]}
                        alt={""}
                    />
                    {this.renderBodyText()}
                </div>
            )
        }
    }
    render() {
        if (this.props.type === "RetroApple") {
            return (
                <div className="showEventWrapper">
                    <div className="showEvent">
                        <div className="vaporwaveBar">
                            <div style={RetroAppleStyleBar}  className="vbar-buttons">
                                <button onClick={this.props.hideEventInFocus} className="vaporwaveBarContents">
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
                                {this.props.header}
                            </h2>
                            <div id="locationTimeWrapper"/>
                        </div>
                        <div style={RetroAppleStyleDiv} className="eventBody">
                            {this.renderBody()}
                        </div>
                        <div style={RetroAppleStyleDiv} className="event-citation">
                            {this.renderCitations()}
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.type === "CPM") {
            return (
                <div className="showEventWrapper">
                    <div className="showEvent">
                        <div className="vaporwaveBar">
                            <div style={CPMStyleBar}  className="vbar-buttons">
                                <button onClick={this.props.hideEventInFocus} className="vaporwaveBarContents">
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
                                {this.props.header}
                            </h2>
                            <div id="locationTimeWrapper"/>
                        </div>
                        <div style={CPMStyleDiv} className="eventBody">
                            {this.renderBody()}
                        </div>
                        <div style={CPMStyleDiv} className="event-citation">
                            {this.renderCitations()}
                        </div>
                    </div>
                </div>
            );
        }
        else return (
            <div className="showEventWrapper">
                <div className="showEvent">
                    {/* vaporwave themed navigation bar  */}
                    <div className="vaporwaveBar">
                        <div style={{backgroundColor: "#9d41ff"}} className="vbar-buttons">
                            <button
                                onClick={this.props.hideEventInFocus}
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
                        <h2 id="eventHeader-text">{this.props.header}</h2>
                        <div id="locationTimeWrapper"/>
                    </div>

                    {/* event body  */}
                    <div className="eventBody">
                        {this.renderBody()}
                    </div>
                    <div className="event-citation">
                        {this.renderCitations()}
                    </div>
                </div>
            </div>
        );
    }
}

export default EventFocus;
//trying to figure out if i want to use a function stateless component or a stateful component
//researching what the freaking difference is
/**
 * making it a component so i can use state for going to another page like from event page 1 to event page 2
 */
