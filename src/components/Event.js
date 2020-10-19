import React from "react";
import EventFocus from "./EventFocus.js";
import "./Event.css";

function Event(props) {

// state = {class}
  const [showEventInFocus, setShowEventFocus] = React.useState(false);
  const [showEvent, setShowEvent] = React.useState(true);

  function updateEventInFocusTrue() {
    setShowEventFocus(true);
  }
  const updateEventTrue = () => setShowEvent(false);

  function updateEventInFocusFalse() {
    setShowEventFocus(false);
  }
  const updateEventFalse = () => setShowEvent(true);

  let i = 0;
  function onClick() {
    // console.log(showEventInFocus);
    if (showEventInFocus === true) {
      updateEventInFocusFalse();
    } else {
      updateEventInFocusTrue();
    }
  }

  return (
    <div onClick={onClick} className="Event">
      {showEventInFocus ? (
        <EventFocus
          style={props.Type}
          header={props.title}
          EventFocusImages={[props.EventFocusImages[0], props.EventFocusImages[1]]}
          body={props.body}
          type={props.type}
          citations={[props.citations[0], props.citations[1]]}
        />
      ) : null}
      <div className="Event-Container">
        <a href={props.href} id={props.id} className="Event-container-link">
          <figure className="Event-figure">
            <img className="Event-image" src={props.TimelineImage} alt="Error" />
          </figure>
          <div className="Event-body">
            <span className="Event-date">{props.date}</span>
            <span className="Event-location">{props.location}.</span>
            <h3 className="Event-title">{props.title}</h3>
          </div>
        </a>
      </div>
    </div>
  );
}
export default Event;
