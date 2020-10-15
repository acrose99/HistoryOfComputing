import React from "react";
// import EventFocus from "../EventFocus";
import "./AppleEvent.css";
import EventFocus from "../../EventFocus";

function AppleEvent(props) {
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
            <div className="Apple-Event">
                <div className="Apple-Event-Container Event-Container">
                    <a href={props.href} id={props.id} className="Apple-Event-container-link Event-container-link">
                        <figure className="Apple-Event-figure Event-figure">
                            <img className="Apple-Event-image Event-image" src={props.images[0]} alt="Error"/>
                        </figure>
                        <div className="Apple-Event-body">
                            <span className="Apple-Event-date Event-date">{props.date}</span>
                            <span className="Apple-Event-location Event-location">{props.location}.</span>
                            <h3 className="Apple-Event-title Event-title">{props.title}</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AppleEvent;
