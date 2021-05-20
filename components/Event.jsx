import React, {Component} from "react";
import styles from './Event.module.css'
import stylesFocus from './EventFocus.module.css'

import {ThemeStyles} from '../context/themeStyles'
import {themes} from '../context/themeStyles';

import Image from 'next/image'
import EventFocus from "./EventFocus";

class MobileEvent extends Component {
  constructor(props) {
    super(props);
    const border = 'none';
    this.state = {
      showEventInFocus: false,
      backdrop: null,
      background: 'none',
      borderLeft: border,
      borderRight: border,
      borderTop: border,
      borderBottom: border
    }
    this.showEventInFocus = this.hideEventInFocus.bind(this);
    this.hideEventInFocus = this.hideEventInFocus.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  showEventInFocus() {
    this.setState({
      showEventInFocus: true
    })
  }
  hideEventInFocus() {
    this.setState({
      showEventInFocus: false
    })
  }
  onClick() {
    // console.log(showEventInFocus);
    if (this.state.showEventInFocus === true) {
      this.hideEventInFocus();
    } else {
      this.showEventInFocus();
    }
  }
  render() {
    if (this.state.showEventInFocus === false) {
      return (
          <div>
            {/*hack way to fix the timeline separator*/}
            <div style={{boxShadow: '-3px 12px 6px 8px rgba(0,0,0,.6)', borderTop: '4px solid #d9cfbe'}} onClick={() => this.setState({showEventInFocus: !this.state.showEventInFocus})} className={styles.MobileEventContainer}>
              <h2 style={{color: this.props.theme.textEventColor}} className={styles.MobileEventDate}>{this.props.year}</h2>
              <div  className={styles.MobileEventBody}>
                <h3 style={{color: this.props.theme.textEventColor}} className={styles.MobileEventTitle}>{this.props.title}</h3>
              </div>
              <div>
                <figure className={styles.MobileEventFigure}>
                  <Image className={styles.MobileEventImage} width={150} height={150} src={this.props.TimelineImage} alt="Error"/>
                </figure>
              </div>
            </div>
          </div>
      )
    }
    else return (
        <EventFocus theme={this.props.theme} showEventInFocus={this.state.showEventInFocus}
                    hideEventInFocus={this.hideEventInFocus}
                    style={this.props.Type}
                    header={this.props.title}
                    body={this.props.body}
                    type={this.props.type}
                    citations={[this.props.citations[0], this.props.citations[1]]}
        />
    );
  }
}

class DesktopEvent extends Component {
  constructor(props) {
    super(props);
    const border = 'none';
    this.state = {
      showEventInFocus: false,
      backdrop: null,
      background: 'none',
      borderLeft: border,
      borderRight: border,
      borderTop: border,
      borderBottom: border
    }
    this.hideEventInFocus = this.hideEventInFocus.bind(this);
    this.onClick = this.onClick.bind(this);
    this.changeEventBackground = this.changeEventBackground.bind(this);
    this.onMouseEnterEvent = this.onMouseEnterEvent.bind(this);
    this.onMouseLeaveEvent = this.onMouseLeaveEvent.bind(this, border);
  }
  changeEventBorder(style) {
    console.log(this.state.background);
    this.setState({
      border: style
    })

  }
  changeEventBackground(style) {
    this.setState({
      backgroundImage: style
    })
  }
  hideEventInFocus() {
    this.setState({
      showEventInFocus: false
    })
  }
  // const updateEventFalse = () => setShowEvent(true);
  //
  // let i = 0;
  onClick() {
    const border = 'none';
    if (this.state.showEventInFocus === true) {
      this.setState({
        background: 'none',
        borderLeft: border,
        borderRight: border,
        borderTop: border,
        borderBottom: border,
        showEventInFocus: false
      })
    }
    else {
      this.setState({
        background: 'none',
        borderLeft: border,
        borderRight: border,
        borderTop: border,
        borderBottom: border,
        showEventInFocus: true
      })
    }
  }
  onMouseEnterEvent(style, theme, filter, filters) {
    if (filter === '') {
      /* Theres no great way to do this but figured the natural tendency is to place the most important filter first */
      if (filters !== undefined && themes[filters[0]] !== undefined && themes[filters[0]].borderLeftColor !== undefined && themes[filters[0]].borderRightColor !== undefined
          && themes[filters[0]].borderTopColor !== undefined
          && themes[filters[0]].borderBottomColor !== undefined) {
        this.setState({
          background: style,
          borderLeft:  themes[filters[0]].borderLeftColor,
          borderRight: themes[filters[0]].borderRightColor,
          borderTop: themes[filters[0]].borderTopColor,
          borderBottom: themes[filters[0]].borderBottomColor,
        })
      }
      else this.setState({
        background: style,
        borderLeft:  theme.borderLeftColor,
        borderRight: theme.borderRightColor,
        borderTop: theme.borderTopColor,
        borderBottom: theme.borderBottomColor,
      })
    }
    else if (filter !== undefined && filter !== null) {
      if (themes[filter] !== undefined && themes[filter].borderLeftColor !== undefined && themes[filter].borderRightColor !== undefined
          && themes[filter].borderTopColor !== undefined
          && themes[filter].borderBottomColor !== undefined) {
        this.setState({
          background: style,
          borderLeft:  themes[filter].borderLeftColor,
          borderRight: themes[filter].borderRightColor,
          borderTop: themes[filter].borderTopColor,
          borderBottom: themes[filter].borderBottomColor,
        })
      }
      else if (themes[filters[0]] !== undefined) {
        /* Theres no great way to do this but figured the natural tendency is to place the most important filter first */
        if (themes[filters[0]].borderLeftColor !== undefined && themes[filters[0]].borderRightColor !== undefined
            && themes[filters[0]].borderTopColor !== undefined
            && themes[filters[0]].borderBottomColor !== undefined) {
          this.setState({
            background: style,
            borderLeft:  themes[filters[0]].borderLeftColor,
            borderRight: themes[filters[0]].borderRightColor,
            borderTop: themes[filters[0]].borderTopColor,
            borderBottom: themes[filters[0]].borderBottomColor,
          })
        }
      }
      else this.setState({
          background: style,
          borderLeft:  theme.borderLeftColor,
          borderRight: theme.borderRightColor,
          borderTop: theme.borderTopColor,
          borderBottom: theme.borderBottomColor,
        })
    }
    else {
      this.setState({
        background: style,
        borderLeft:  theme.borderLeftColor,
        borderRight: theme.borderRightColor,
        borderTop: theme.borderTopColor,
        borderBottom: theme.borderBottomColor,
      })
    }
  }
  onMouseLeaveEvent() {
    const border = 'none';
    this.setState({
      background: 'none',
      borderLeft: border,
      borderRight: border,
      borderTop: border,
      borderBottom: border,
    })
  }
  importAll(r) {
    let images = {};
    // Copied this from stack overflow and I aint screwing with it
    // eslint-disable-next-line
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  findBackdrop(filter) {
    /* Place in order of heirachy for user to see.
        For example:
        I've placed the LGBTQ backdrop higher then Early Computing,
        because I want to emphasize representation more then era */
    const backdrops = '/images/Backdrops/'
    if (filter !== '' && filter !== undefined && filter !== null) {
      return backdrops + filter+ 'Backdrop.svg'
    }
    else if (this.props.filters !== undefined && this.props.filters !== null) {
      if (themes[this.props.filters[0]] !== undefined) {
        if (backdrops + this.props.filters[0]+ 'Backdrop.svg' !== undefined) {
          return backdrops + this.props.filters[0]+ 'Backdrop.svg'
        }
        else {
          return backdrops + 'Backdrop.svg'
        }
      }
      else {
        return backdrops + 'Backdrop.svg'
      }
    }
    else {
      return backdrops+ 'Backdrop.svg'
    }
  }
  render() {
    // const backdrops = this.importAll(require.context('/images/Backdrops', false, /Backdrop.svg$/));
    const backdrop = this.findBackdrop(this.props.filter);
    if (this.state.showEventInFocus === false) {
      return (
          <div className={styles.Event}>
            <div style={{boxShadow: '-3px 12px 6px 8px rgba(0,0,0,.6)', color: this.props.theme.textEventColor, backgroundImage: this.state.background,borderTop: this.state.borderTop,
              borderBottom: this.state.borderBottom, borderRight: this.state.borderRight, borderLeft: this.state.borderLeft}}
                 onMouseEnter={() => this.onMouseEnterEvent(`url(${backdrop})`, this.props.theme, this.props.filter, this.props.filters)}
                 onMouseLeave={() => this.onMouseLeaveEvent()}
                 onClick={() => this.onClick()}
                 id={this.props.id} className={styles.EventContainer}>
              <div className={styles.EventBody}>
                <p style={{color: this.props.theme.textEventColor}} className={styles.EventDate}>
                  {this.props.year}
                  {/*<span style={{color: theme.textEventColor}} className="Event-location">{this.props.location}.</span>*/}
                </p>
                <h3 style={{color: this.props.theme.textEventColor}} className={styles.EventTitle}>{this.props.title}</h3>
              </div>
              <figure className={styles.EventFigure}>
                <Image className={styles.EventImage} width={200} height={200} layout="fixed"   src={this.props.TimelineImage + '?webp'} alt="Error" />
              </figure>
            </div>
          </div>
      )
    }
    else return (
        <EventFocus theme={this.props.theme}  showEventInFocus={this.state.showEventInFocus} hideEventInFocus={this.hideEventInFocus}
                    header={this.props.title}

                    body={this.props.body}
                    type={this.props.type}
                    citations={[this.props.citations[0], this.props.citations[1]]}
        />
    );
  }
}
class Event extends Component{
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
    }
  }


  updateMenuStyle() {
    // if the width is less than 768px (an IPAD) it goes into mobile event
    if (window.innerWidth < 768) {
      this.setState({ mobile: true, });
    }
    else {
      this.setState({ mobile: false, });
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

  checkYearBCE(year) { /* Necessary for dates before the common era. */
    let yearNew;
    if (year < 0) {
      yearNew = Math.abs(year) + " BCE" /* Converts to correct format */
      return yearNew;
    }
    else return year;
  }

  render() {
    let theme = this.context;
    let filters = this.props.filters;
    let year = this.checkYearBCE(this.props.year)
    if (this.state.mobile === true) {
      return (
          <MobileEvent theme={theme} filter={this.props.filter} filters={filters}  year={this.props.year}  location={this.props.location} title={this.props.title}
                       TimelineImage={this.props.TimelineImage} EventFocusImages={this.props.EventFocusImages}
                       body={this.props.body}
                       citations={[this.props.citations[0], this.props.citations[1]]}
                       type={this.props.type} />
      )
    }
    else if (this.state.mobile === false) {
      return (
          <DesktopEvent theme={theme} filter={this.props.filter} filters={filters}  year={year}  location={this.props.location} title={this.props.title}
                        TimelineImage={this.props.TimelineImage}
                        body={this.props.body}
                        citations={[this.props.citations[0], this.props.citations[1]]}
                        type={this.props.type} />
      )
    }
  }
}
Event.contextType = ThemeStyles;
export default Event;
