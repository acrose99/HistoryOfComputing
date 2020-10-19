// TODO: Download all the images so that the page loads faster
// TODO: Try working on text alignment
// TODO: Keep the timeline separator's width the same


import React, {Component} from "react";
import "./Timeline.css"
import Navbar from "../components/Navbar";
import Event from "../components/Event";
import Footer from "../components/Footer";
import data from '../events.json'
import AppleEvent from "../components/EventTypes/Apple/AppleEvent";
import RetroApple from "../components/EventinFocusTypes/RetroApple/RetroApple";
import OldComputer from "../components/EventinFocusTypes/OldComputer/OldComputer";
import IBMEvent from "../components/EventTypes/IBM/IBMEvent";
function Timeline() {

    let newdata = data.map((data) => {
                // data.sort((a, b) => a.Date - b.Date);
                // this.setState({data: data});

            if (data.Type === "Apple") {
                return (
                    <AppleEvent  key={data.id} date={data.Date} location={data.Location} title={data.Title}
                                 TimelineImage={data.TimelineImage} EventFocusImages={data.EventFocusImages}
                                 body={data.Body}
                                 citations={[data.Citations[0], data.Citations[1]]}> </AppleEvent>
                )
            }
        // else if (data.Type === "RetroApple") {
        //     return (
        //         <RetroApple key={data.id} date={data.Date} location={data.Location} title={data.Title}
        //                     image={data.Image}
        //         />
        //     )
        // }
        // else if (data.Type === "IBM") {
        //     return (
        //         <IBMEvent key={data.id} date={data.Date} location={data.Location} title={data.Title}
        //                     image={data.Image}
        //         />
        //     )
        // }
            return (
                <Event  key={data.id} date={data.Date} location={data.Location} title={data.Title}
                        TimelineImage={data.TimelineImage} EventFocusImages={data.EventFocusImages}
                        body={data.Body}
                        citations={[data.Citations[0], data.Citations[1]]}> </Event>

            )
        }
    )


    class Events extends Component {
        render() {
            return (
                <div>  {newdata}  </div>
            )
        }
    }

    return (
        <div id="Timeline">
            <Navbar/>
            <h2 id="Timeline-intro">Important events that summarize the History of Computing.</h2>

            <Events/>
            <Footer/>
        </div>
    )
}

export default Timeline;
