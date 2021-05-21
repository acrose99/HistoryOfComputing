import React, {useEffect, useState} from 'react';
import styles from './Filterer.module.css';

/* TODO ALLOW A RANGE OF YEARS */
function RangeInput(props) {
    const [minYear, setMinYear] = useState(props.minYear);
    const [maxYear, setMaxYear] = useState(props.maxYear);
    return (
        <div style={{display: "flex", marginTop: "2vh"}}>
            <div className={styles.minMaxContainer}>
                <div className={styles.minMaxInput}>
                    <label className={styles.yearLabel} htmlFor="minYear"> Minimum Year:
                        <input min="-3300" max="2021" id="minYear" value={minYear}
                               onChange={e => setMinYear(e.target.value)} type="number"/>
                    </label>
                </div>
                <div className={styles.minMaxInput}>
                    <label className={styles.yearLabel} htmlFor="maxYear"> Maximum Year:
                        <input min="-3500" max="2021" id="maxYear" value={maxYear}
                               onChange={e => setMaxYear(e.target.value)} type="number"/>
                    </label>
                </div>
            </div>
            <button className={styles.yearSubmit}
                    onClick={() => props.changeTimelineFilterYear(minYear, maxYear)}>Set Year
            </button>
        </div>
    );
}

export default React.memo(RangeInput);
