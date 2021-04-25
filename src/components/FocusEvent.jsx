import React from "react";
import './EventFocus.css';

export default function FocusEvent(){
    return(
        <div className="showEventWrapper">
            <div className="eventHeader">
            <div className="vbar-buttons">
            <button className="vaporwaveBarContents">
                                <img
                                    src={require("../images/buttons/media_player_stream_no.png")}
                                    alt="Close"
                                />
            </button>
            </div>
            <div className="vbar-divs">
                <p id="eventHeader-text">Header Name</p>

            </div>
            <div className="vbar-divs">

            </div>
            </div>
            <div className="eventBody">
                <div >
                    <img className="eventBody-image" src={require("../images/event-images/EventFocus1.jpg")} alt="event image" />
                    <p>The Macintosh 128K, originally released as the Apple Macintosh, is the original Apple Macintosh personal computer. Its beige case consisted of a 9 in (23 cm) CRT monitor and came with a keyboard and mouse. A handle built into the top of the case made it easier for the computer to be lifted and carried. It had an initial selling price of $2,495 (equivalent to $6,140 in 2019). The Macintosh was introduced by the now-famous $370,000 (equivalent to $910,541 in 2019) television commercial directed by Ridley Scott, ‘1984’, that aired on CBS during the third quarter of Super Bowl XVIII on January 22, 1984. Sales of the Macintosh were strong from its initial release on January 24, 1984, and reached 70,000 units on May 3, 1984. Upon the release of its successor, the Macintosh 512K, it was rebranded as the Macintosh 128K. The computer is Model M0001.</p>
                {/* needs to be positioned that way for the larger sized divs */}
                </div>
                {/* <div className="eventBody-text">
                    <p>The Macintosh 128K, originally released as the Apple Macintosh, is the original Apple Macintosh personal computer. Its beige case consisted of a 9 in (23 cm) CRT monitor and came with a keyboard and mouse. A handle built into the top of the case made it easier for the computer to be lifted and carried. It had an initial selling price of $2,495 (equivalent to $6,140 in 2019). The Macintosh was introduced by the now-famous $370,000 (equivalent to $910,541 in 2019) television commercial directed by Ridley Scott, ‘1984’, that aired on CBS during the third quarter of Super Bowl XVIII on January 22, 1984. Sales of the Macintosh were strong from its initial release on January 24, 1984, and reached 70,000 units on May 3, 1984. Upon the release of its successor, the Macintosh 512K, it was rebranded as the Macintosh 128K. The computer is Model M0001.</p>
                </div> */}
            </div>
        </div>
    );
}
