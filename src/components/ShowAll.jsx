import React, {useContext} from "react";
import {ThemeStyles} from "../themeStyles";

export default function ShowAll(props) {
    const theme = useContext(ThemeStyles);
    if (props.timelineFilter === '') {
        return null
    }
    else {
        return (
            <div style={{background: theme.navbarBackground}} onClick={props.onClickFiltererType} className="filtererShowAll">
                    <h4 className="filtererShowAllHeader">Show All Events</h4>
            </div>
        )
    }
}
