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
          images={[props.images[1], props.images[2]]}
          body={props.body}
          citations={[props.citations[0], props.citations[1]]}
        />
      ) : null}
      <div className="Event-Container">
        <a href={props.href} id={props.id} className="Event-container-link">
          <figure className="Event-figure">
            <img className="Event-image" src={props.images[0]} alt="Error" />
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
