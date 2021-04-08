import React, {Component} from "react";
import EventFocus from "./EventFocus";
import './Event.css'
import {ThemeStyles} from '../themeStyles'
import {themes} from '../themeStyles';

// import Backdrop from '../../images/Backdrop.svg';

class Event extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showEventInFocus: false,
      backdrop: null,
      background: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderTop: 'none',
      borderBottom: 'none'
    }
    this.eventRef = React.createRef();
    this.showEventInFocus = this.hideEventInFocus.bind(this);
    this.hideEventInFocus = this.hideEventInFocus.bind(this);
    this.onClick = this.onClick.bind(this);
    this.nextEvent = this.nextEvent.bind(this);
    // this.changeEventBackground = this.changeEventBackground.bind(this);
    this.onMouseEnterEvent = this.onMouseEnterEvent.bind(this);
  }
  changeEventBorder(style) {
    console.log(this.state.background);
    this.setState({
      border: style
    })
  }
  changeEventBackground(style) {
    this.setState({
      background: style
    })
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
  // const updateEventFalse = () => setShowEvent(true);
  //
  // let i = 0;
  onClick() {
    // console.log(showEventInFocus);
    if (this.state.showEventInFocus === true) {
      this.hideEventInFocus();
    } else {
      this.showEventInFocus();
    }
  }
  onMouseEnterEvent(style, theme, filter) {
    if (filter !== undefined) {
      /* console.log(themes[filter].borderLeftColor); */
      if (themes[filter].borderLeftColor !== undefined && themes[filter].borderRightColor !== undefined
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
      else this.setState({
        background: style,
        borderLeft:  theme.borderLeftColor,
        borderRight: theme.borderLeftColor,
        borderTop: theme.borderTopColor,
        borderBottom: theme.borderBottomColor,
      })
    }
    else this.setState({
      background: style,
      borderLeft:  theme.borderLeftColor,
      borderRight: theme.borderLeftColor,
      borderTop: theme.borderTopColor,
      borderBottom: theme.borderBottomColor,
    })
  }
  onMouseLeaveEvent() {
    this.setState({
      background: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderTop: 'none',
      borderBottom: 'none',
    })
  }
  nextEvent() {
    return Event
  }
  importAll(r) {
    let images = {};
    // Copied this from stack overflow and I aint screwing with it
    // eslint-disable-next-line
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  findBackdrop(backdrops) {
    console.log(this.props.filter);
    // For some reason use useState results in a compile error.
    if (this.props.filter === 'Apple') {
      // eslint-disable-next-line
      this.state.backdrop = backdrops['AppleBackdrop.svg']
    }
    else {
      // eslint-disable-next-line
      this.state.backdrop = backdrops['Backdrop.svg']
    }
  }


  render() {
    let theme = this.context;
    let filter = this.props.filter;
    const backdrops = this.importAll(require.context('../images/Backdrops', false, /Backdrop.svg$/));
    this.findBackdrop(backdrops)
    if (this.state.showEventInFocus === false) {
      return (
          <div className="Event-Container">
            <a style={{color: theme.textEventColor, backgroundImage: this.state.background, borderTop: this.state.borderTop,
              borderBottom: this.state.borderBottom, borderRight: this.state.borderRight, borderLeft: this.state.borderRight}}
               onMouseEnter={() => this.onMouseEnterEvent(`url(${this.state.backdrop})`, theme, filter)}
               onMouseLeave={() => this.onMouseLeaveEvent()}
               ref={this.eventRef }
               onClick={() => this.setState({showEventInFocus: !this.state.showEventInFocus})}
               href={this.props.href} id={this.props.id} className="Event-container-link">

              <figure className="Event-figure">
                <img className="Event-image" src={this.props.TimelineImage} alt="Error" />
              </figure>
              <div className="Event-body">
                <span style={{color: theme.textEventColor}} className="Event-date">{this.props.date}</span>
                <span style={{color: theme.textEventColor}} className="Event-location">{this.props.location}.</span>
                <h3 style={{color: theme.textEventColor}} className="Event-title">{this.props.title}</h3>
              </div>
            </a>
          </div>
      )
    }
    else return (
        <EventFocus  showEventInFocus={this.state.showEventInFocus} hideEventInFocus={this.hideEventInFocus}
                     style={this.props.Type}
                     header={this.props.title}
                     EventFocusImages={[this.props.EventFocusImages[0], this.props.EventFocusImages[1]]}
                     body={this.props.body}
                     type={this.props.type}
                     citations={[this.props.citations[0], this.props.citations[1]]}
        />
    );
  }
}
Event.contextType = ThemeStyles;

export default Event;
