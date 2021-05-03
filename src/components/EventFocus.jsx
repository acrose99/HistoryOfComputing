import React, {Component} from "react";
import "./EventFocus.css";
class EventFocus extends Component  {
     renderCitations() {
        if (this.props.citations[0] == null || this.props.citations[0]=== "") {
            return (
                <div>
                    <p id="event-citation-text">
                        No citations.
                    </p>
                </div>
            )
        }
        if (this.props.citations[0] != null && this.props.citations[1] === undefined) {
             return (
                 <div>
                     <div style={{display: "flex"}}>
                         <p style={{color: this.props.theme.textEventColor}} id="event-citation-text">
                             Citation: {this.props.citations[0]}
                         </p>
                     </div>
                 </div>
             )
         }
        else {
            return (
                <div style={{display: "flex"}}>
                    <p style={{color: this.props.theme.textEventColor}} id="event-citation-text">
                        Citations: {this.props.citations[0]}, {this.props.citations[1]}
                    </p>
                </div>
            )
        }
    }
    renderBodyText() {
        return (
            <p style={{color: this.props.theme.textEventColor}} className="eventBody-text">
                {this.props.body}
            </p>
        )
    }
    renderBody() {
         return (
                <div>
                    {this.renderBodyText()}
                </div>
            )
        }
    render() {
        return (
            <div className="showEventWrapper">
                <div style={{background: this.props.theme.background}} className="eventHeader">
                    <div className="vbar-buttons">
                        <button className="vaporwaveBarContents"
                                onClick={this.props.hideEventInFocus}
                                >
                                <img
                                    src={require("../images/buttons/media_player_stream_no.png").default}
                                    alt="Close"
                                />
                        </button>
                    </div>
                    <div className="vbar-divs">
                        <p style={{color: this.props.theme.textColor}} id="eventHeader-text">
                            {this.props.header}
                        </p>
                    </div>
                    <div className="vbar-divs">

                    </div>
                </div>
                <div className="eventBody">
                    <div>
                        {this.renderBody(this.props.theme)}
                        <div className="event-citation">
                            {this.renderCitations()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default EventFocus;
//trying to figure out if i want to use a function stateless component or a stateful component
//researching what the freaking difference is
/**
 * making it a component so i can use state for going to another page like from event page 1 to event page 2
 */
