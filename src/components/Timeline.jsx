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
        newdata = events.sort((a,b) => {
            if (a["Year"] < b["Year"]) return -1;
            else return 1;
        }).map(function (data) {
            return (
                <Event theme={props.timelineFilter} filter={data["Filter"]} key={data["id"]} listId={data["id"]} year={data["Year"]} date={data["Date"]} location={data["Location"]} title={data["Title"]}
                       TimelineImage={data["TimelineImage"]}
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
                        <Event theme={props.timelineFilter} filter={data["Filter"]} key={data["id"]} listId={data["id"]} year={data["Year"]} date={data["Date"]} location={data["Location"]} title={data["Title"]}
                               TimelineImage={data["TimelineImage"]}
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

                    <div style={{marginBottom: '200px'}}/>
                    {/*hack way to fix the timeline separator*/}

                    <Footer/>
                </div>
            )
        }
    }
    else {
        newdata = events.filter(data => data.Filter === props.filter).sort(((a,b) => {
            if (a["Year"] > b["Year"]) {
                return 1;
            }
            else return -1;
        })).map((data) => {
                return (
                    <Event theme={props.timelineFilter} filter={data["Filter"]} key={data["id"]} listId={data["id"]} year={data["Year"]} date={data["Date"]} location={data["Location"]} title={data["Title"]}
                           TimelineImage={data["TimelineImage"]}
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
                mobile: false,
                events: newdata
            }
        }
        updateMenuStyle() {
            // if the width is less than 768px (an IPAD) it goes into mobile event
            if (window.innerWidth < 768) {
                this.setState({ mobile: true});
            }
            else {
                this.setState({ mobile: false});
            }
        }

        componentDidMount() {
            this.updateMenuStyle();
            window.addEventListener("resize", this.updateMenuStyle.bind(this));
        }
        componentWillUnmount() {
            // tutorial said i should unmount the event listener so here it is
            window.removeEventListener("resize", this.updateMenuStyle.bind(this));
        }


        render() {
            if (this.state.mobile === false) {
                return (
                    <div>
                        <div id="eventsDesktop">  {this.state.events}  </div>
                    </div>
                )
            }
            else return (
                <div>
                    <div id="eventsMobile">  {this.state.events}  </div>
                </div>
            )
        }
    }
    function createTimeLineIntro() {
        if (props.filter === '') {
            return (<h2 style={{color: theme.headerColor}} id="Timeline-intro">Important events that summarize the History of Computing.</h2>)
        }
        else if (props.filter === 'Ancient') {
            return (<h2 style={{color: theme.headerColor}}  id="Timeline-intro">Important events that summarize the History of {props.filter} Mathematics.</h2>)
        }
        else if (props.filter === 'Medieval') {
            return (<h2 style={{color: theme.headerColor}}  id="Timeline-intro">Important events that summarize the History of {props.filter} Mathematics.</h2>)
        }
        else if (props.filter === 'Enlightenment') {
            return (<h2 style={{color: theme.headerColor}}  id="Timeline-intro">Important events that summarize the History of {props.filter} Mathematics.</h2>)
        }
        else {
            return (<h2 style={{color: theme.headerColor}}  id="Timeline-intro">Important events that summarize the History of {props.filter}.</h2>)
        }
    }

    return (
        <div style={{backgroundImage: theme.backgroundImage}} id="Timeline">
            <Navbar/>
            {createTimeLineIntro()}
            <div style={{marginBottom: '100px'}}/>
            {/*hack way to fix the timeline separator*/}
            <Events />
            <div style={{marginBottom: '200px', marginTop: '50px'}}/>
            {/*hack way to fix the timeline separator*/}

            <Footer/>
        </div>
    )
}

export default Timeline;
