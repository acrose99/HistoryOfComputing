import React from "react";
import "./EventFocus.css";

/* For RetroApple focused Events (I.E MAC 1984) */
      const RetroAppleStyleDiv = {
        background: '#7f7f7f',
        border: '2px solid #ffffff'
      }
      const RetroAppleStyleText = {
        fontFamily: "ChicagoFLF",
        color: '#131313',
        marginLeft: 5,
        fontSize: '1rem',
      }

      const RetroAppleStyleBar = {
        color: '131313',
        backgroundColor: '#ffffff',
      }


/* For CP/M focused Events (I.E Altair 8800) */

const CPMStyleDiv = {
  background: '#000055',
  border: '2px solid #292929'
}
const CPMStyleText = {
  fontFamily: "Px437_IBM_BIOS",
  color: '#00aaaa',
  fontSize: '1rem',
}
const CPMStyleBar = {
  color: '00aaaa',
  backgroundColor: '#292929',
}

class EventFocus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEventInFocus: true, showEvent: false };
  }

  render() {
      if (this.props.style === "Default") {
        return (
            <div className="showEventWrapper">
              <div className="showEvent">
                <div className="vaporwaveBar">
                  <div className="vbar-buttons">
                    <button onClick={this.props.onClick}  className="vaporwaveBarContents">
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
                      <img src={require("../images/button-right-v.svg")} alt="burr" />
                    </button>
                  </div>
                </div>
                <div id="header" className="eventHeader">
                  <h2 id="eventHeader-text">
                    {this.props.header}
                  </h2>
                  <div id="locationTimeWrapper"/>
                </div>
                <div className="eventBody">
                  <img
                      className="eventBody-image"
                      id="eventBody-image1"
                      src={this.props.images[0]}
                      alt={""}
                  />
                  <p  className="eventBody-text">
                    <img
                        className="eventBody-image"
                        id="eventBody-image2"
                        src={this.props.images[1]}
                        alt=""
                    />
                    {this.props.body}
                  </p>
                </div>
                <div className="event-citation">
                  <p id="event-citation-text">{this.props.citation[0]}</p>

                  <p id="event-citation-text">,</p>

                  <p id="event-citation-text" style={{ marginLeft: 5 }}>
                    {this.props.citation[1]}
                  </p>
                </div>
              </div>
            </div>
        );
      }
      else if (this.props.style === "RetroApple") {
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
                      <img src={require("../images/button-right-v.svg")} alt="burr"/>
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
                  <img
                      className="eventBody-image"
                      id="eventBody-image1"
                      src={this.props.images[0]}
                      alt={""}
                  />
                  <p style={RetroAppleStyleText} className="eventBody-text">
                    <img
                        className="eventBody-image"
                        id="eventBody-image2"
                        src={this.props.images[1]}
                        alt=""
                    />
                    {this.props.body}
                  </p>
                </div>
                <div style={RetroAppleStyleDiv} className="event-citation">
                  <p style={RetroAppleStyleText} id="event-citation-text">{this.props.citation[0]},</p>
                  <p style={RetroAppleStyleText} id="event-citation-text">
                    {this.props.citation[1]}
                  </p>
                </div>
              </div>
            </div>
        )
      }
      else if (this.props.style === "CPM") {
        return (
            <div  className="showEventWrapper">
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
                      <img src={require("../images/button-right-v.svg")} alt="burr"/>
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
                  <img
                      className="eventBody-image"
                      id="eventBody-image1"
                      src={this.props.images[0]}
                      alt={""}
                  />
                  <p style={CPMStyleText} className="eventBody-text">
                    <img
                        className="eventBody-image"
                        id="eventBody-image2"
                        src={this.props.images[1]}
                        alt=""
                    />
                    {this.props.body}
                  </p>
                </div>
                <div style={CPMStyleDiv} className="event-citation">
                  <p style={CPMStyleText} id="event-citation-text">{this.props.citation[0]},</p>
                  <p style={CPMStyleText} id="event-citation-text">
                    {this.props.citation[1]}
                  </p>
                </div>
              </div>
            </div>
        )
      }
    }
}
export default EventFocus;
//trying to figure out if i want to use a function stateless component or a stateful component
//researching what the freaking difference is
/**
 * making it a component so i can use state for going to another page like from event page 1 to event page 2
 */
