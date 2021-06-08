import React, {Component} from "react";
import stylesFocus from "./EventFocus.module.css";
import {themes} from '../context/themeStyles'
import { Icon, InlineIcon } from '@iconify/react';
import EraIcon from "./eraIcon";
import crossCircle from '@iconify/icons-gridicons/cross-circle';
import styles from "./EventFocus.module.css";

class EventFocus extends Component {
    renderCitations() {
        if (this.props.citations[0] == null || this.props.citations[0] === "") {
            return (
                    <p className={stylesFocus.eventCitation}>
                        No citations.
                    </p>
            )
        }
        if (this.props.citations[0] != null && this.props.citations[1] === undefined) {
            return (
                        <p  className={stylesFocus.eventCitation}>
                            Citation: {this.props.citations[0]}
                        </p>
            )
        }
        else {
            return (
                <div>
                    <p className={stylesFocus.eventCitation}>
                        Citations: {this.props.citations[0]}, {this.props.citations[1]}
                    </p>
                </div>
            )
        }
    }
    renderBodyText() {
        return (
            <p className={stylesFocus.eventBodyText}>
                {this.props.body}
            </p>
        )
    }
    renderEra(filters) {
        if (filters.includes("Ancient")) {
            return (
                <div style={{background: this.props.theme.background}} className={styles.eventEraContainer}>
                    <EraIcon icon="Ancient" />
                </div>
            )
        }
        else if (filters.includes("Medieval")) {
            return (
                <div style={{background: this.props.theme.background}} className={styles.eventEraContainer}>
                    <EraIcon icon="Medieval" />
                </div>
            )
        }
        else if (filters.includes("Enlightenment")) {
            return (
                <div style={{background: this.props.theme.background}} className={styles.eventEraContainer}>
                    <EraIcon icon="Enlightenment" />
                </div>
            )
        }
        else if (filters.includes("Industrial")) {
            return (
                <div style={{background: this.props.theme.background}} className={styles.eventEraContainer}>
                    <EraIcon icon="Industrial" />
                </div>
            )
        }
        else if (filters.includes("EarlyComputing")) {
            return (
                <div style={{background: this.props.theme.background}} className={styles.eventEraContainer}>
                    <EraIcon icon="EarlyComputing" />
                </div>
            )
        }
        else if (filters.includes("ModernComputing")) {
            return (
                <div style={{background: this.props.theme.background}}  className={styles.eventEraContainer}>
                    <EraIcon icon="ModernComputing" />
                </div>
            )
        }
        else if (filters.includes("InformationAge")) {
            return (
                <div style={{background: this.props.theme.background}} className={styles.eventEraContainer}>
                    <EraIcon icon="InformationAge" />
                </div>
            )
        }
        else {
            return (
                    <p style={{margin: "right"}} className={stylesFocus.eventEras}>Era: Unspecified</p>
            )
        }
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
    renderExitIcon(filter) {
        // Place in order of heirachy for user to see.
        //    For example:
        //    I've placed the LGBTQ backdrop higher then Early Computing,
        //    because I want to emphasize representation more then era
        if (filter !== 'all' && filter !== '' && filter !== undefined && filter !== null) {
            if (themes[filter].background !== undefined) {
                return (
                    <Icon  style={{color: themes[filter].foreground}} icon={crossCircle} width={32} height={32} />
                )
            }
            else if (themes[this.props.filters[0]].background !== undefined) {
                return (<Icon  style={{color: themes[this.props.filters[0]].foreground}} icon={crossCircle} width={32} height={32} />);
            }
            else {
                return      (
                    <Icon  style={{color: this.props.theme.foreground}} icon={crossCircle} width={32} height={32} />
                )
            }
        }
        else if (themes[this.props.filters[0]].background !== undefined) {
            return (
                <Icon  style={{color: themes[this.props.filters[0]].foreground}} icon={crossCircle} width={32} height={32} />
            )
        }
        else return (
                    <Icon  style={{color: this.props.theme.foreground}} icon={crossCircle} width={32} height={32} />
            );
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
                            {this.renderExitIcon(this.props.filter)}
                        </button>
                        <p className={stylesFocus.eventHeaderText}>
                                {this.props.header}
                            </p>
                        </div>
                </div>
                <div className={stylesFocus.eventBody}>
                            {this.renderBodyText()}
                            {this.renderCitations()}
                </div>
                    {this.renderEra(this.props.filters)}
            </div>
        );
    }
}
export default EventFocus
