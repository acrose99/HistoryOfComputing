import React, {Component} from "react";
import EventFocus from "./EventFocus";
import './Event.css'
import {ThemeStyles} from '../themeStyles'
import {themes} from '../themeStyles';

// import Backdrop from '../../images/Backdrop.svg';
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
            <div style={{boxShadow: '-3px 12px 6px 8px rgba(0,0,0,.6)', borderTop: '4px solid #d9cfbe'}} onClick={() => this.setState({showEventInFocus: !this.state.showEventInFocus})} className="Mobile-Event-Container">
              <h2 style={{color: this.props.theme.textEventColor}} className="Mobile-Event-Date">{this.props.year}</h2>
              <div  className="Mobile-Event-Body">
                <h3 style={{color: this.props.theme.textEventColor}} className="Mobile-Event-Title">{this.props.title}</h3>
              </div>
              <div>
                <figure className="Mobile-Event-Figure">
                  <img className="Mobile-Event-Image" src={this.props.TimelineImage.default} alt="Error"/>
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
    // this.changeEventBackground = this.changeEventBackground.bind(this);
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
      background: style
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
  onMouseEnterEvent(style, theme, filter) {
    console.log("theme:" + theme);
    console.log("style:" + style);
    console.log("filter:" + filter);
    if (filter !== undefined && filter !== null) {
      console.log(themes[filter].borderLeftColor);
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
        borderRight: theme.borderRightColor,
        borderTop: theme.borderTopColor,
        borderBottom: theme.borderBottomColor,
      })
    }
    else {
      console.log("theme:" + theme);
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
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item).default;
    });
    return images;
  }
  findBackdrop(backdrops) {
    // For some reason use useState results in a compile error.
    if (this.props.filter === 'Apple') {
      // eslint-disable-next-line
      this.state.backdrop = backdrops['AppleBackdrop.svg']
    }
    else if (this.props.filter === 'Ancient') {
      this.state.backdrop = backdrops['AncientBackdrop.svg']
    }
    else {
      // eslint-disable-next-line
      this.state.backdrop = backdrops['Backdrop.svg']
    }
  }
  render() {
    const backdrops = this.importAll(require.context('../images/Backdrops', false, /Backdrop.svg$/));
    this.findBackdrop(backdrops);
    if (this.state.showEventInFocus === false) {
      return (
          <div className="Event">
            <div style={{boxShadow: '-3px 12px 6px 8px rgba(0,0,0,.6)', color: this.props.theme.textEventColor, backgroundImage: this.state.background,borderTop: this.state.borderTop,
              borderBottom: this.state.borderBottom, borderRight: this.state.borderRight, borderLeft: this.state.borderLeft}}
                 onMouseEnter={() => this.onMouseEnterEvent(`url(${this.state.backdrop})`, this.props.theme, this.props.filter)}
                 onMouseLeave={() => this.onMouseLeaveEvent()}
                 onClick={() => this.onClick()}
                 id={this.props.id} className="Event-Container">
              <div className="Event-body">
                <p style={{color: this.props.theme.textEventColor}} className="Event-date">
                  {this.props.year}
                  {/*<span style={{color: theme.textEventColor}} className="Event-location">{this.props.location}.</span>*/}
                </p>
                <h3 style={{color: this.props.theme.textEventColor}} className="Event-title">{this.props.title}</h3>
              </div>
              <figure className="Event-figure">
                <img className="Event-image" src={this.props.TimelineImage.default} alt="Error" />
              </figure>
            </div>
          </div>
      )
    }
    else return (
        <EventFocus theme={this.props.theme}  showEventInFocus={this.state.showEventInFocus} hideEventInFocus={this.hideEventInFocus}
                     style={this.props.Type}
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
    let filter = this.props.filter;
    let year = this.checkYearBCE(this.props.year)
    if (this.state.mobile === true) {
      return (
          <MobileEvent theme={theme} filter={filter}  year={this.props.year} date={this.props.date} location={this.props.location} title={this.props.title}
                       TimelineImage={this.props.TimelineImage} EventFocusImages={this.props.EventFocusImages}
                       body={this.props.body}
                       citations={[this.props.citations[0], this.props.citations[1]]}
                       type={this.props.type} />
      )
    }
    else if (this.state.mobile === false) {
      return (
          <DesktopEvent theme={theme} filter={filter}  year={year} date={this.props.date} location={this.props.location} title={this.props.title}
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
