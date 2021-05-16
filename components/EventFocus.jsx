import React, {Component} from "react";
import styles from './EventFocus.module.css'
import {ThemeStyles} from '../context/themeStyles'
import {themes} from '../context/themeStyles';

class EventFocus extends Component  {
     renderCitations() {
        if (this.props.citations[0] == null || this.props.citations[0]=== "") {
            return (
                <div>
                    <p id={styles.eventCitationText}>
                        No citations.
                    </p>
                </div>
            )
        }
        if (this.props.citations[0] != null && this.props.citations[1] === undefined) {
             return (
                 <div>
                     <div style={{display: "flex"}}>
                         <p style={{color: this.props.theme.textEventColor}} id={styles.eventCitationText}>
                             Citation: {this.props.citations[0]}
                         </p>
                     </div>
                 </div>
             )
         }
        else {
            return (
                <div style={{display: "flex"}}>
                    <p style={{color: this.props.theme.textEventColor}} id={styles.eventCitationText}>
                        Citations: {this.props.citations[0]}, {this.props.citations[1]}
                    </p>
                </div>
            )
        }
    }
    renderBodyText() {
        return (
            <p style={{color: this.props.theme.textEventColor}} className={styles.eventBodyText}>
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
            <div className={styles.showEventWrapper}>
                <div style={{background: this.props.theme.background}} className={styles.eventHeader}>
                    <div className={styles.vbarButtons}>
                        <button className={styles.vaporwaveBarContents}
                                onClick={this.props.hideEventInFocus}
                                >
                                <img
                                    src={"/images/buttons/media_player_stream_no.png"}
                                    alt="Close"
                                />
                        </button>
                    </div>
                    <div className={styles.vbarDivs}>
                        <p style={{color: this.props.theme.textColor}} className={styles.eventHeaderText}>
                            {this.props.header}
                        </p>
                    </div>
                    <div className={styles.vbarDivs}>

                    </div>
                </div>
                <div className={styles.eventBody}>
                    <div>
                        {this.renderBody(this.props.theme)}
                        <div className={styles.eventCitation}>
                            {this.renderCitations()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default EventFocus;
