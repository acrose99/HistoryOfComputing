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
          <div id="header" className="eventHeader">
            <h2 style={{ textAlign: "center" }}>frick</h2>
          </div>
          <div id="locationTimeWrapper"></div>

          <div className="eventBody">
            <p>
              Example txt "Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum."
            </p>
          </div>
          <div className="citation">
            <p>citation citation </p>
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
