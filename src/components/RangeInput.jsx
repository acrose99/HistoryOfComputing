import React, {useEffect, useState} from 'react';
import InputRange from 'react-input-range';
import './RangeInput.css';

/* TODO ALLOW A RANGE OF YEARS */
function RangeInput(props) {
    const [minYear, setMinYear] = useState(props.minYear);
    const [maxYear, setMaxYear] = useState(props.maxYear);

    function handleMinYearChange(e) {
        setMinYear(Number(e.target.value))
    }
    function handleMaxYearChange(e) {
        setMaxYear(Number(e.target.value))
    }
     return (
            <div>
                <div className="min-max-container">
                    <div>
                        <label className="yearLabel" htmlFor="minYear"> Minimum Year
                            <input min="-3300" max="2021" id="minYear" value={minYear}
                                   onChange={handleMinYearChange} type="number"/>
                        </label>
                    </div>
                    <div>
                        <label className="yearLabel" htmlFor="maxYear"> Maximum Year
                            <input min="-3500" max="2021" id="maxYear" value={maxYear}
                                   onChange={handleMaxYearChange} type="number"/>
                        </label>
                    </div>
                </div>
                <button id="yearSubmit"
                        onClick={() => props.changeTimelineFilterYear(minYear, maxYear)}>Set Year
                </button>
            </div>
            // <InputRange
            //     maxValue={2020}
            //     minValue={1944}
            //     value={this.props.year}
            //     onChange={value => this.props.handleYear(value)}/>
        );
}

export default RangeInput
