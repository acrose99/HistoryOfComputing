import React, {Component} from "react";
import "./TimelineContainer.css"
import Timeline from "../components/Timeline";
import Filterer from "../components/Filterer";
// import FiltererMobile from "../components/FiltererMobile/FiltererMobile";
class TimelineContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            timelineFilter: ''
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
    }
    handleFilterChange(filter) {
        this.setState({timelineFilter: filter});
    }
    toggleTheme(theme) {
        this.props.toggleTheme(theme);
    }

    render() {
        return (
            <div id="TimelineContainer">
                {/*<FiltererMobile/>*/}
                <Filterer toggleTheme={this.toggleTheme} timelineFilter={this.state.timelineFilter} handleFilterChange={this.handleFilterChange} filtererType="Closed"/>
                <Timeline  timelineFilter={this.state.timelineFilter}  filter={this.state.timelineFilter}/>
            </div>

        )
    }
}
export default TimelineContainer
