import React, {Component, useContext, useEffect} from "react";
import "./Timeline.css"
import Navbar from "./Navbar";
import Event from "./Event";
import Footer from "./Footer";
import Representation from "../container/Representation";
import {events} from "../events"
import {ThemeStyles} from '../themeStyles'

function Timeline(props) {
    const theme = useContext(ThemeStyles);
    useDocumentTitle(props.filter);
    let newdata;
    if (props.filter === '') {
        newdata = events.sort((a,b) => {
            if (a["Year"] < b["Year"]) return -1;
            else return 1;
        }).map(function (data, index) {
            return (
                <Event theme={props.timelineFilter} filter={props.filter} filters={data["Filters"]}  key={index} year={data["Year"]} date={data["Date"]}title={data["Title"]}
                       TimelineImage={data["TimelineImage"]}
                       body={data["Body"]}
                       citations={[data["Citations"][0], data["Citations"][1]]}

                > </Event>
            )
        })
    }
    else if (typeof props.filter === "number") {
        if (events.filter(data => data.Year === props.filter).length > 0) {
            newdata = events.filter(data => data.Year === props.filter).map((data, index) => {
                    return (
                        <Event theme={props.timelineFilter}  filters={data["Filters"]} key={index}  year={data["Year"]} date={data["Date"]}title={data["Title"]}
                               TimelineImage={data["TimelineImage"]}
                               body={data["Body"]}
                               citations={[data["Citations"][0], data["Citations"][1]]}
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
        newdata = events.filter(data => data["Filters"] !== undefined).filter(data => data["Filters"].includes(props.filter)).sort(((a, b) => {
            if (a["Year"] > b["Year"]) {
                return 1;
            }
            else return -1;
        })).map((data, index) => {
                return (
                    <Event theme={props.timelineFilter} filter={props.filter} filters={data["Filters"]} key={index}  year={data["Year"]} date={data["Date"]}title={data["Title"]}
                           TimelineImage={data["TimelineImage"]}
                           body={data["Body"]}
                           citations={[data["Citations"][0], data["Citations"][1]]}
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
        else if (typeof props.filter == "number") {
            return (<h2 style={{color: theme.headerColor}} id="Timeline-intro">Important events that summarize the History of Computing in the year {props.filter}</h2>)
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
        else if (props.filter === 'Industrial') {
            return (<h2 style={{color: theme.headerColor}}  id="Timeline-intro">Important events that summarize the History of {props.filter} Mechanics.</h2>)
        }
        else if (props.filter === 'EarlyComputing') {
            return (<h2 style={{color: theme.headerColor}}  id="Timeline-intro">Important events that summarize the History of Early Computing.</h2>)
        }
        else if (props.filter === 'Women') {
            return (
                <div>
                    <h2 style={{color: theme.headerColor}}  id="Timeline-intro">Important events that summarize the History of Women in Computing.</h2>
                    <Representation/>
                </div>
            )
        }
        else if (props.filter === 'LGBTQ') {
            return (
                <div>
                    <h3 style={{color: theme.headerColor}}  id="Timeline-intro">Important events that summarize the History of LGBTQ+ individuals in Computing.</h3>
                    <Representation/>
                </div>
            )
        }
        else if (props.filter === 'POC') {
            return (
                <div>
                    <h2 style={{color: theme.headerColor}}  id="Timeline-intro">Important events that summarize the History of POC individuals in Computing.</h2>
                    <Representation/>
                </div>
            )
        }
        else {
            return (<h2 style={{color: theme.headerColor}}  id="Timeline-intro">Important events that summarize the History of {props.filter}.</h2>)
        }
    }

    return (
        <div id="Timeline">
            <div style={{marginBottom: '100px'}}/>
            {/*hack way to fix the filterer*/}
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

function useDocumentTitle(title) {
    useEffect(() => {
        if (title !== '') {
            document.title = "History of Computing: " + title;
        }
        else document.title = "History of Computing"
    })
}

export default Timeline;
