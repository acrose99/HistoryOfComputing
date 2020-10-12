import React from "react";
import EventFocus from "./EventFocus.js";
import "./Event.css";

function Event(props) {
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
          style="CPM"
          header="Apple Macintosh is released."
          images={[
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmacgateway.com%2Fwp-content%2Fuploads%2F2011%2F02%2FOriginal-1984-Apple-Macintosh.jpg&f=1&nofb=1",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcompidiaries.files.wordpress.com%2F2014%2F01%2Fmac1984.jpg&f=1&nofb=1",
          ]}
          body="The Macintosh 128K, originally released as the Apple Macintosh, is the original Apple Macintosh personal computer.

                            Its beige case consisted of a 9 in (23 cm) CRT monitor and came with a keyboard and mouse.
                            A handle built into the top of the case made it easier for the computer to be lifted and carried.

                            It had an initial selling price of $2,495 (equivalent to $6,140 in 2019).
                                  The Macintosh was introduced by the now-famous $370,000 (equivalent to $910,541 in 2019) television commercial directed by Ridley Scott, '1984', that aired on CBS during the third quarter of Super Bowl XVIII on January 22, 1984.

                            Sales of the Macintosh were strong from its initial release on January 24, 1984, and reached 70,000 units on May 3, 1984. Upon the release of its successor, the Macintosh 512K, it was rebranded as the Macintosh 128K. The computer is Model M0001."
          citation={["Tim Apple", "Michael Fassbender"]}
        />
      ) : null}
      <div className="Event-Container">
        <a href={props.href} id={props.id} className="Event-container-link">
          <figure className="Event-figure">
            <img className="Event-image" src={props.image} alt="Error" />
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
