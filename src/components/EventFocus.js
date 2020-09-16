import React from "react";
import "./EventFocus.css";

class EventFocus extends React.Component {
  state = {
    className: "showEvent",
  };
  render() {
    return (
      <div className="showEventWrapper">
        <div className="showEvent">
          <div id="vaporwaveBar" className="vaporwaveBar">
            {/* these are just mock ups for buttons i'll add later */}
            <p className="vaporwaveBarContents">X</p>
            <p className="vaporwaveBarContents"> &#60; &#60;  </p>
            <p className="vaporwaveBarContents"> >> </p>
          </div>
          <div id="header" className="eventHeader">
            <h2 id="eventHeader-text" style={{ textAlign: "center" }}>Apple Macintosh is released</h2>
            <div id="locationTimeWrapper"></div>
          </div>
          <div className="eventBody">
            <img className="eventBody-image1" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmacgateway.com%2Fwp-content%2Fuploads%2F2011%2F02%2FOriginal-1984-Apple-Macintosh.jpg&f=1&nofb=1" alt=""/>
            <p className="eventBody-text">
              The Macintosh 128K, originally released as the Apple Macintosh, is the original Apple Macintosh personal computer.
            </p>
            <p className="eventBody-text">
              Its beige case consisted of a 9 in (23 cm) CRT monitor and came with a keyboard and mouse.
              A handle built into the top of the case made it easier for the computer to be lifted and carried.
              It had an initial selling price of $2,495 (equivalent to $6,140 in 2019).
              <img className="eventBody-image2" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcompidiaries.files.wordpress.com%2F2014%2F01%2Fmac1984.jpg&f=1&nofb=1" alt=""/>
            </p>
            <p className="eventBody-text">
              The Macintosh was introduced by the now-famous $370,000 (equivalent to $910,541 in 2019) television commercial directed by Ridley Scott, "1984", that aired on CBS during the third quarter of Super Bowl XVIII on January 22, 1984.
              Sales of the Macintosh were strong from its initial release on January 24, 1984, and reached 70,000 units on May 3, 1984. Upon the release of its successor, the Macintosh 512K, it was rebranded as the Macintosh 128K. The computer is Model M0001.
            </p>
          </div>
          <div className="event-citation">
            <p id="event-citation-text">Tim Apple (2020)</p>

            <p id="event-citation-text">,</p>
            {/*because we will need to use props, eventually*/}

            <p id="event-citation-text" style={{ marginLeft: 5 }}>Michael Fassbender (1984)</p>

          </div>
        </div>
        {/* ent event div */}
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
