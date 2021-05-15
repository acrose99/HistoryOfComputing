import React from "react";

export default function ShowAll(props) {
    if (props.timelineFilter === '') {
        return null
    }
    else {
        return (
            <div onClick={props.onClickFiltererType} className="filtererShowAll">
                    <h4 className="filtererShowAllHeader">Show All Events</h4>
            </div>
        )
    }
}
