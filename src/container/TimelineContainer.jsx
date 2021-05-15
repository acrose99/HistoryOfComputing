import React, {Component} from "react";
import "./TimelineContainer.css"
import Timeline from "../components/Timeline";
import Filterer from "../components/Filterer";
import Navbar from "../components/Navbar";
import {ThemeStyles} from "../themeStyles";
import Home from "./Home";
class TimelineContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            timelineFilter: ''
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleFilterChangeYear = this.handleFilterChangeYear.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
    }
    handleFilterChange(filter) {
        this.setState({timelineFilter: filter});
    }
    handleFilterChangeYear(filterMin, filterMax) {
        //TODO internal logic depending on years selected, I.E ancient vs modern
        this.props.toggleTheme('Vaporwave');
        this.setState({timelineFilter: [filterMin, filterMax]});
    }
    toggleTheme(theme) {
        this.props.toggleTheme(theme);
    }

    render() {
        let theme = this.context;
        return (
            <div style={{backgroundImage: theme.backgroundImage}} id="TimelineContainer">
                <Navbar/>
                <Filterer toggleTheme={this.toggleTheme} timelineFilter={this.state.timelineFilter} handleFilterChange={this.handleFilterChange} handleFilterChangeYear={this.handleFilterChangeYear}/>
                <Timeline filter={this.state.timelineFilter}/>
            </div>

        )
    }
}
TimelineContainer.contextType = ThemeStyles;

export default TimelineContainer
