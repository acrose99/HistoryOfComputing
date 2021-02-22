import React, {Component} from "react";
import EventFocus from "./EventFocus";
import "./Event.css";
import {ThemeContext} from '../App'

class Event extends Component{

  constructor(props) {
    super(props);
    this.state = {
      showEventInFocus: false
    }
    this.eventRef = React.createRef();
    this.showEventInFocus = this.hideEventInFocus.bind(this);
    this.hideEventInFocus = this.hideEventInFocus.bind(this);
    this.onClick = this.onClick.bind(this);
    this.nextEvent = this.nextEvent.bind(this);
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
  nextEvent() {
    return Event
  }

  render() {
    console.log(this.props.nextEvent);
    if (this.state.showEventInFocus === false) {
      return (
          <div ref={this.eventRef } onClick={() => this.setState({showEventInFocus: !this.state.showEventInFocus})} className="Event-Container">
            <a href={this.props.href} id={this.props.id} className="Event-container-link">
              <figure className="Event-figure">
                <img className="Event-image" src={this.props.TimelineImage} alt="Error" />
              </figure>
              <div className="Event-body">
                <span className="Event-date">{this.props.date}</span>
                <span className="Event-location">{this.props.location}.</span>
                <h3 className="Event-title">{this.props.title}</h3>
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
export default Event;
