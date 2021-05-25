import React, {Component} from "react";
import stylesFocus from "./EventFocus.module.css";
import {themes} from '../context/themeStyles'

class EventFocus extends Component {
    renderCitations() {
        if (this.props.citations[0] == null || this.props.citations[0] === "") {
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

    findBackground(filter) {
        /* Place in order of heirachy for user to see.
            For example:
            I've placed the LGBTQ backdrop higher then Early Computing,
            because I want to emphasize representation more then era */
        if (filter !== 'all' && filter !== '' && filter !== undefined && filter !== null) {
            if (themes[filter].background !== undefined) {
                return themes[filter].background;
            }
            else if (themes[this.props.filters[0]].background !== undefined) {
                return themes[this.props.filters[0]].background;
            }
            else {
                return this.props.theme.background;
            }
        }
        else if (themes[this.props.filters[0]].background !== undefined) {
            return themes[this.props.filters[0]].background;
        }
        else return this.props.theme.background;
    }

    render() {
        let background = this.findBackground(this.props.filter);
        return (
            <div className={stylesFocus.showEventWrapper}>
                <div style={{background: background}} className={stylesFocus.eventHeader}>
                    <div className={stylesFocus.vbarButtons}>
                        <button className={stylesFocus.vaporwaveBarContents}
                                onClick={this.props.hideEventInFocus}
                        >
                            <img
                                src={"/images/buttons/media_player_stream_no.png"}
                                alt="Close"
                            />
                        </button>
                        <p style={{color: this.props.theme.textColor}} className={stylesFocus.eventHeaderText}>
                                {this.props.header}
                            </p>
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
