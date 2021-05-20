import React, {Component} from "react";
import stylesFocus from "./EventFocus.module.css";

class EventFocus extends Component  {
    renderCitations() {
        if (this.props.citations[0] == null || this.props.citations[0]=== "") {
            return (
                <div>
                    <p id={stylesFocus.eventCitationText}>
                        No citations.
                    </p>
                </div>
            )
        }
        if (this.props.citations[0] != null && this.props.citations[1] === undefined) {
            return (
                <div>
                    <div style={{display: "flex"}}>
                        <p style={{color: this.props.theme.textEventColor}} id={stylesFocus.eventCitationText}>
                            Citation: {this.props.citations[0]}
                        </p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div style={{display: "flex"}}>
                    <p style={{color: this.props.theme.textEventColor}} id={stylesFocus.eventCitationText}>
                        Citations: {this.props.citations[0]}, {this.props.citations[1]}
                    </p>
                </div>
            )
        }
    }
    renderBodyText() {
        return (
            <p style={{color: this.props.theme.textColor}} className={stylesFocus.eventBodyText}>
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
            <div className={stylesFocus.showEventWrapper}>
                <div style={{background: this.props.theme.background}} className={stylesFocus.eventHeader}>
                    <div className={stylesFocus.vbarButtons}>
                        <button className={stylesFocus.vaporwaveBarContents}
                                onClick={this.props.hideEventInFocus}
                        >
                            <img
                                src={"/images/buttons/media_player_stream_no.png"}
                                alt="Close"
                            />
                        </button>
                    </div>
                    <div className={stylesFocus.vbarDivs}>
                        <p style={{color: this.props.theme.textColor}} className={stylesFocus.eventHeaderText}>
                            {this.props.header}
                        </p>
                    </div>
                    <div className={stylesFocus.vbarDivs}>

                    </div>
                </div>
                <div className={stylesFocus.eventBody}>
                    <div>
                        {this.renderBody(this.props.theme)}
                        <div className={stylesFocus.eventCitation}>
                            {this.renderCitations()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EventFocus
