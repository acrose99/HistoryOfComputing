import React from "react";
// import EventFocus from "../EventFocus";
import "./IBMEvent.css";
import EventFocus from "../../EventFocus";

function IBMEvent(props) {
    const [showEventInFocus, setShowEventFocus] = React.useState(false);
    // const [showEvent, setShowEvent] = React.useState(true);

    function updateEventInFocusTrue() {
        setShowEventFocus(true);
    }

    // const updateEventTrue = () => setShowEvent(false);

    function updateEventInFocusFalse() {
        setShowEventFocus(false);
    }
    //
    // const updateEventFalse = () => setShowEvent(true);
    //
    // let i = 0;

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
                    citations={[props.citations[0], props.citations[1]]}
                />
            ) : null}

            <div className="IBM-Event">
                <div className="IBM-Event-Container">
                    <a href={props.href} id={props.id} className="Apple-Event-container-link">
                        <figure className="IBM-Event-figure">
                            <img className="IBM-Event-image" src={props.TimelineImage} alt="Error"/>
                        </figure>
                        <div className="IBM-Event-body">
                            <span className="IBM-Event-date">{props.date}</span>
                            <span className="IBM-Event-location">{props.location}.</span>
                            <h3 className="IBM-Event-title">{props.title}</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default IBMEvent;
