import React, {Component} from "react";
import "./TimelineContainer.css"
import Timeline from "../components/Timeline";
import Filterer from "../components/Filterer";

class TimelineContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            timelineFilter: ''
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }
    handleFilterChange(filter) {
        this.setState({timelineFilter: filter});
    }

    render() {
        return (
            <div id="TimelineContainer">
                <Filterer timelineFilter={this.state.timelineFilter} handleFilterChange={this.handleFilterChange} filtererType="Closed"/>
                <Timeline filter={this.state.timelineFilter}/>
            </div>

        )
    }
}
export default TimelineContainer
