import React from "react";
import "./EventFocus.css";

class EventFocus extends React.Component {
  state = {
    className: "showEvent",
  };
  render() {
    return (
      <div className="showEvent">
        <p>Example txt</p>
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
