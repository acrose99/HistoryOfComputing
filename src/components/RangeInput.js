import React from 'react';
import InputRange from 'react-input-range';
import './RangeInput.css';

class RangeInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.year
        };
    }

    render() {
        return (
            <InputRange
                maxValue={2020}
                minValue={1944}
                value={this.props.year}
                onChange={value => this.props.handleYear(value)}/>
        );
    }
}

export default RangeInput
