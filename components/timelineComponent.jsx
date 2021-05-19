import React, {Component, useContext, useEffect} from "react";
import styles from "./Timeline.module.css"
import Navbar from "./Navbar";
import Event from "./Event";
// import Footer from "./Footer";
import Representation from "./Representation";
import {events} from "../events"
import {ThemeStyles} from '../context/themeStyles'
import Footer from "./Footer";

function TimelineComponent(props) {
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
    else if (typeof props.filter === "object") {
        if (events.filter(data => ((data["Year"] === props.filter[0])) + (data["Year"] === props.filter[1])).length >= 0) {
            newdata = events.filter(data => data["Year"] >= props.filter[0] && data["Year"] <= props.filter[1]).map((data, index) => {
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
                <div className={styles.Timeline}>
                    <Navbar/>
                    <h2 className={styles.TimelineIntro}>Important events that summarize the History of Computing.</h2>
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
            this.setState({
                events: null
            })
        }


        render() {
            if (this.state.mobile === false) {
                return (
                    <div>
                        <div className={styles.eventsDesktop}>  {this.state.events}  </div>
                    </div>
                )
            }
            else return (
                <div>
                    <div className={styles.eventsMobile}>  {this.state.events}  </div>
                </div>
            )
        }
    }
    function createTimeLineIntro() {
        if (props.filter === '') {
            return (
                <div style={{textAlign: "center"}}>
                    <h2 style={{color: theme.headerColor}} className={styles.TimelineIntro}>Important events that summarize the History of Computing.</h2>
                    <p style={{color: theme.headerColor}}>Scroll through the filters/categories above to read specific events, or if you're dedicated, read through all of them chronologically here!</p>
                </div>
            )
        }
        else if (typeof props.filter === "object") {
            return (<h2 style={{color: theme.headerColor}} className={styles.TimelineIntro}>Important events that summarize the History of Computing from the year {props.filter[0]} to the year {props.filter[1]} </h2>)
        }
        else if (props.filter === 'Ancient') {
            return (<h2 style={{color: theme.headerColor}}  className={styles.TimelineIntro}>Important events that summarize the History of {props.filter} Mathematics.</h2>)
        }
        else if (props.filter === 'Medieval') {
            return (<h2 style={{color: theme.headerColor}}  className={styles.TimelineIntro}>Important events that summarize the History of {props.filter} Mathematics.</h2>)
        }
        else if (props.filter === 'Enlightenment') {
            return (<h2 style={{color: theme.headerColor}}  className={styles.TimelineIntro}>Important events that summarize the History of {props.filter} Mathematics.</h2>)
        }
        else if (props.filter === 'ModernComputing') {
            return (<h2 style={{color: theme.headerColor}}  className={styles.TimelineIntro}>Important events that summarize the History of Modern Computing.</h2>)
        }
        else if (props.filter === 'Industrial') {
            return (<h2 style={{color: theme.headerColor}}  className={styles.TimelineIntro}>Important events that summarize the History of {props.filter} Mechanics.</h2>)
        }
        else if (props.filter === 'EarlyComputing') {
            return (<h2 style={{color: theme.headerColor}}  className={styles.TimelineIntro}>Important events that summarize the History of Early Computing.</h2>)
        }
        else if (props.filter === 'Women') {
            return (
                <div>
                    <h2 style={{color: theme.headerColor}}  className={styles.TimelineIntro}>Important events that summarize the History of Women in Computing.</h2>
                    <Representation/>
                </div>
            )
        }
        else if (props.filter === 'LGBTQ') {
            return (
                <div>
                    <h3 style={{color: theme.headerColor}}  className={styles.TimelineIntro}>Important events that summarize the History of LGBTQ+ individuals in Computing.</h3>
                    <Representation/>
                </div>
            )
        }
        else if (props.filter === 'POC') {
            return (
                <div>
                    <h2 style={{color: theme.headerColor}}  className={styles.TimelineIntro}>Important events that summarize the History of POC individuals in Computing.</h2>
                    <Representation/>
                </div>
            )
        }
        else {
            return (<h2 style={{color: theme.headerColor}}  className={styles.TimelineIntro}>Important events that summarize the History of {props.filter}.</h2>)
        }
    }

    return (
        <div id={styles.Timeline}>
            <div style={{marginBottom: '200px'}}/>
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

export default TimelineComponent;
