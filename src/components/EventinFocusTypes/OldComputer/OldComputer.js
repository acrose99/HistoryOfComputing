import React from "react";
import "./OldComputer.css";

class OldComputer extends React.Component {
    state = {
        className: "showEvent",
    };
    render() {
        return (
            <div className="showEventWrapper oldComputer-border">
                <div  className="showEvent oldComputer-border">
                    <div id="OldComputer-vaporwaveBar" >
                        {/* these are just mock ups for buttons i'll add later */}
                        <p className="vaporwaveBarContents">X</p>
                        <p className="vaporwaveBarContents"> Prev</p>
                        <p className="vaporwaveBarContents"> Next</p>
                    </div>
                    <div className="eventHeader oldComputer-border">
                        <h2 className="oldComputer-text" id="OldComputer-eventHeader-text" style={{ textAlign: "center" }}>Apple Macintosh is released</h2>

                        <div id="locationTimeWrapper"></div>
                    </div>
                    <div className="eventBody oldComputer-border">
                        <p className="eventBody-text oldComputer-text">
                            The Macintosh 128K, originally released as the Apple Macintosh, is the original Apple Macintosh personal computer.
                        </p>
                        <p className="eventBody-text oldComputer-text">
                            Its beige case consisted of a 9 in (23 cm) CRT monitor and came with a keyboard and mouse.
                            A handle built into the top of the case made it easier for the computer to be lifted and carried.
                            It had an initial selling price of $2,495 (equivalent to $6,140 in 2019).
                        </p>
                        <p className="eventBody-text oldComputer-text">
                            The Macintosh was introduced by the now-famous $370,000 (equivalent to $910,541 in 2019) television commercial directed by Ridley Scott, "1984", that aired on CBS during the third quarter of Super Bowl XVIII on January 22, 1984.
                            Sales of the Macintosh were strong from its initial release on January 24, 1984, and reached 70,000 units on May 3, 1984. Upon the release of its successor, the Macintosh 512K, it was rebranded as the Macintosh 128K. The computer is Model M0001.
                        </p>
                    </div>
                    <div className="event-citation oldComputer-border">
                        <p className="oldComputer-text" id="event-citation-text">Tim Apple (2020)</p>

                        <p className="oldComputer-text" id="event-citation-text">,</p>
                        {/*because we will need to use props, eventually*/}

                        <p className="oldComputer-text" id="event-citation-text" style={{ marginLeft: 5 }}>Michael Fassbender (1984)</p>

                    </div>
                </div>
                {/* ent event div */}
            </div>
        );
    }
}
export default OldComputer;
//trying to figure out if i want to use a function stateless component or a stateful component
//researching what the freaking difference is
/**
 * making it a component so i can use state for going to another page like from event page 1 to event page 2
 */
