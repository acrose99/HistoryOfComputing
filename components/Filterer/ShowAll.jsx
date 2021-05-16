import React, {useContext} from "react";
import {ThemeStyles} from "../../context/themeStyles";
import styles from './Filterer.module.css';

export default function ShowAll(props) {
    const theme = useContext(ThemeStyles);
    if (props.timelineFilter === '') {
        return null
    }
    else {
        return (
            <div style={{background: theme.navbarBackground}} onClick={props.onClickFiltererType} className={styles.filtererShowAll}>
                <h4 className={styles.filtererShowAllHeader}>Show All Events</h4>
            </div>
        )
    }
}
