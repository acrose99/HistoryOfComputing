import React, {Component} from "react";
import TimelineComponent from "../components/timelineComponent";
import Filterer from "../components/Filterer/Filterer";
import styles from "../components/TimelineContainer.module.css"
import Navbar from "../components/Navbar";
import {ThemeStyles} from "../context/themeStyles";
import ShowAll from "../components/Filterer/ShowAll";
import Head from "next/head";
class Timeline extends Component{
    constructor(props) {
        super(props);
        this.state = {
            timelineFilter: ''
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.showAll = this.showAll.bind(this);
        this.handleFilterChangeYear = this.handleFilterChangeYear.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
    }
    showAll() {
        this.setState({timelineFilter: ''});
        this.props.toggleTheme('Vaporwave');
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
        if (this.state.timelineFilter !== '') {
            return (
                <div style={{backgroundImage: theme.backgroundImage}} id="TimelineContainer">
                    <Navbar/>
                    <Filterer toggleTheme={this.toggleTheme} timelineFilter={this.state.timelineFilter} handleFilterChange={this.handleFilterChange} handleFilterChangeYear={this.handleFilterChangeYear}/>
                    <ShowAll onClickFiltererType={this.showAll}/>
                    <TimelineComponent filter={this.state.timelineFilter}/>
                </div>
            )
        }
        else return (
            <div>
                <div style={{backgroundImage: theme.backgroundImage}} id="TimelineContainer">
                    <Navbar/>
                    <Filterer toggleTheme={this.toggleTheme} timelineFilter={this.state.timelineFilter} handleFilterChange={this.handleFilterChange} handleFilterChangeYear={this.handleFilterChangeYear}/>
                    <TimelineComponent filter={this.state.timelineFilter}/>
                </div>
            </div>

        )
    }
}
Timeline.contextType = ThemeStyles;

export default Timeline
