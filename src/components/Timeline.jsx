import React, {Component, useContext} from "react";
import "./Timeline.css"
import Navbar from "./Navbar";
import Event from "./Event";
import Footer from "./Footer";
import {events} from "../events"
import {ThemeStyles} from '../themeStyles'

function Timeline(props) {
    const theme = useContext(ThemeStyles);
    let newdata;
    if (props.filter === '') {
        newdata = events.map(function (data) {
            return (

            <Event theme={props.timelineFilter} filter={data["Filter"]} key={data["id"]} listId={data["id"]} date={data["Date"]} location={data["Location"]} title={data["Title"]}
                   TimelineImage={data["TimelineImage"]} EventFocusImages={data["EventFocusImages"]}
                   body={data["Body"]}
                   citations={[data["Citations"][0], data["Citations"][1]]}
                   type={data['Type']}
            > </Event>
            )
        })
    }
    else if (typeof props.filter === "number") {
        if (events.filter(data => data.Year === props.filter).length > 0) {
            newdata = events.filter(data => data.Year === props.filter).map((data) => {
                    return (
                        <Event theme={props.timelineFilter} filter={data["Filter"]} key={data["id"]} listId={data["id"]} date={data["Date"]} location={data["Location"]} title={data["Title"]}
                               TimelineImage={data["TimelineImage"]} EventFocusImages={data["EventFocusImages"]}
                               body={data["Body"]}
                               citations={[data["Citations"][0], data["Citations"][1]]}
                               type={data['Type']}
                        > </Event>

                    )
                }
            )
        }
        else {
                return (
                    <div id="Timeline">
                        <Navbar/>
                        <h2 id="Timeline-intro">Important events that summarize the History of Computing.</h2>
                        <h1 style={{textAlign: "center", color: "#5c71e1" }}>No Events Found! Try Again!</h1>

                        {/*hack way to fix the timeline separator*/}
                        <div style={{marginBottom: '200px'}}/>
                        {/*hack way to fix the timeline separator*/}

                        <Footer/>
                    </div>
                )
            }
        }
    else {
        newdata = events.filter(data => data.Filter === props.filter).map((data) => {
            console.log(theme);
                return (
                    <Event theme={props.timelineFilter} filter={data["Filter"]} key={data["id"]} listId={data["id"]} date={data["Date"]} location={data["Location"]} title={data["Title"]}
                           TimelineImage={data["TimelineImage"]} EventFocusImages={data["EventFocusImages"]}
                           body={data["Body"]}
                           citations={[data["Citations"][0], data["Citations"][1]]}
                           type={data['Type']}
                    > </Event>

                )
            }
        )
    }

    class Events extends Component {
        constructor(props) {
            super(props)
            this.state = {
                events: newdata
            }
            this.nextEvent = this.nextEvent.bind(this);
        }

        nextEvent() {
            const EventsCopy = this.state.events.slice() //copy the array
            let currentEvent = EventsCopy[0];
            EventsCopy[0] = EventsCopy[1] //execute the manipulations
            EventsCopy[1] = currentEvent //execute the manipulations
            this.setState({events: EventsCopy}) //set the new state
            console.log(this.state.events);
        }

        render() {
            console.log(this.state.events);
            return (
                <div>
                    <div id="events">  {this.state.events}  </div>
                </div>
            )
        }
    }

    function createTimeLineIntro() {
        if (props.filter === '') {
            return (<h2 style={{color: theme.headerColor}} id="Timeline-intro">Important events that summarize the History of Computing.</h2>)
        }
        else {
            return (<h2 style={{color: theme.headerColor}}  id="Timeline-intro">Important events that summarize the History of {props.filter}.</h2>)
        }
    }

    return (
        <div style={{backgroundImage: theme.backgroundImage}} id="Timeline">
            <Navbar/>
            {createTimeLineIntro()}
            <Events />
            {/*hack way to fix the timeline separator*/}
            <div style={{marginBottom: '200px'}}/>
            {/*hack way to fix the timeline separator*/}

            <Footer/>
            </div>
    )
}

export default Timeline;
