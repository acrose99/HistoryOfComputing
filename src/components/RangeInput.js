import React from 'react';
import InputRange from 'react-input-range';
import './RangeInput.css';

class RangeInput extends React.Component {
    constructor(props) {
        const styles = {
            width: 200,
            color: 'purple'
        }
        super(props);

        this.state = {
            value: 2000
        };
    }

    render() {
        return (
            <InputRange
                maxValue={2020}
                minValue={1956}
                value={this.state.value}
                onChange={value => this.setState({value})}/>
        );
    }
}

export default RangeInput
