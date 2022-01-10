import React, { useState, useContext } from "react";
import styles from "./Event.module.css";
import stylesFocus from "./EventFocus.module.css";

import { ThemeStyles } from "../context/themeStyles";
import { themes } from "../context/themeStyles";

import Image from "next/image";
import EventFocus from "./EventFocus";
import { animated, useSpring } from "react-spring";
function DesktopEvent(props) {
  const [showEventInFocus, setShowEventInFocus] = useState(false);
  const [background, setBackground] = useState("none");
  const [borderLeft, setBorderLeft] = useState("none");
  const [borderRight, setBorderRight] = useState("none");
  const [borderTop, setBorderTop] = useState("none");
  const [borderBottom, setBorderBottom] = useState("none");
  function changeEventBorder(style) {
    setBorderLeft(style.borderLeft);
    setBorderRight(style.borderRight);
    setBorderTop(style.borderTop);
    setBorderBottom(style.borderBottom);
    // setState({
    //   border: style,
    // });
  }
  function changeEventBackground(style) {
    setBackground(style.background);
    // setState({
    //   backgroundImage: style,
    // });
  }
  function hideEventInFocus() {
    setShowEventInFocus(false);
    // setState({
    //   showEventInFocus: false,
    // });
  }
  function onClick() {
    const border = "none";
    if (showEventInFocus === true) {
      setShowEventInFocus(false);
      setBorderBottom(border);
      setBorderLeft(border);
      setBorderRight(border);
      setBorderTop(border);
      // setState({
      //   background: "none",
      //   borderLeft: border,
      //   borderRight: border,
      //   borderTop: border,
      //   borderBottom: border,
      //   showEventInFocus: false,
      // });
    } else {
      setShowEventInFocus(true);
      setBorderBottom(border);
      setBorderLeft(border);
      setBorderRight(border);
      setBorderTop(border);
      // setState({
      //   background: "none",
      //   borderLeft: border,
      //   borderRight: border,
      //   borderTop: border,
      //   borderBottom: border,
      //   showEventInFocus: true,
      // });
    }
  }
  function onMouseEnterEvent(style, theme, filter, filters) {
    if (filter === "") {
      /* Theres no great way to do this but figured the natural tendency is to place the most important filter first */
      if (
        filters !== undefined &&
        themes[filters[0]] !== undefined &&
        themes[filters[0]].borderLeftColor !== undefined &&
        themes[filters[0]].borderRightColor !== undefined &&
        themes[filters[0]].borderTopColor !== undefined &&
        themes[filters[0]].borderBottomColor !== undefined
      ) {
        setBorderLeft(themes[filters[0]].borderLeftColor);
        setBorderRight(themes[filters[0]].borderRightColor);
        setBorderTop(themes[filters[0]].borderTopColor);
        setBorderBottom(themes[filters[0]].borderBottomColor);
        setBackground(style);
        // setState({
        //   background: style,
        //   borderLeft: themes[filters[0]].borderLeftColor,
        //   borderRight: themes[filters[0]].borderRightColor,
        //   borderTop: themes[filters[0]].borderTopColor,
        //   borderBottom: themes[filters[0]].borderBottomColor,
        // });
      } else setBackground(style);
      setBorderLeft(theme.borderLeftColor);
      setBorderRight(theme.borderRightColor);
      setBorderTop(theme.borderTopColor);
      setBorderBottom(theme.borderBottomColor);
      // setState({
      //   background: style,
      //   borderLeft: theme.borderLeftColor,
      //   borderRight: theme.borderRightColor,
      //   borderTop: theme.borderTopColor,
      //   borderBottom: theme.borderBottomColor,
      // });
    } else if (filter !== undefined && filter !== null) {
      if (
        themes[filter] !== undefined &&
        themes[filter].borderLeftColor !== undefined &&
        themes[filter].borderRightColor !== undefined &&
        themes[filter].borderTopColor !== undefined &&
        themes[filter].borderBottomColor !== undefined
      ) {
        setBackground(style);
        setBorderLeft(theme.borderLeftColor);
        setBorderRight(theme.borderRightColor);
        setBorderTop(theme.borderTopColor);
        setBorderBottom(theme.borderBottomColor);
        // setState({
        //   background: style,
        //   borderLeft: themes[filter].borderLeftColor,
        //   borderRight: themes[filter].borderRightColor,
        //   borderTop: themes[filter].borderTopColor,
        //   borderBottom: themes[filter].borderBottomColor,
        // });
      } else if (themes[filters[0]] !== undefined) {
        /* Theres no great way to do this but figured the natural tendency is to place the most important filter first */
        if (
          themes[filters[0]].borderLeftColor !== undefined &&
          themes[filters[0]].borderRightColor !== undefined &&
          themes[filters[0]].borderTopColor !== undefined &&
          themes[filters[0]].borderBottomColor !== undefined
        ) {
          setBackground(style);
          setBorderLeft(themes[filters[0]].borderLeftColor);
          setBorderRight(themes[filters[0]].borderRightColor);
          setBorderTop(themes[filters[0]].borderTopColor);
          setBorderBottom(themes[filters[0]].borderBottomColor);
          // setState({
          //   background: style,
          //   borderLeft: themes[filters[0]].borderLeftColor,
          //   borderRight: themes[filters[0]].borderRightColor,
          //   borderTop: themes[filters[0]].borderTopColor,
          //   borderBottom: themes[filters[0]].borderBottomColor,
          // });
        }
      } else setBackground(style);
      setBorderLeft(theme.borderLeftColor);
      setBorderRight(theme.borderRightColor);
      setBorderTop(theme.borderTopColor);
      setBorderBottom(theme.borderBottomColor);
      // setState({
      //   background: style,
      //   borderLeft: theme.borderLeftColor,
      //   borderRight: theme.borderRightColor,
      //   borderTop: theme.borderTopColor,
      //   borderBottom: theme.borderBottomColor,
      // });
    } else {
      setBackground(style);
      setBorderLeft(theme.borderLeftColor);
      setBorderRight(theme.borderRightColor);
      setBorderTop(theme.borderTopColor);
      setBorderBottom(theme.borderBottomColor);
      // setState({
      //   background: style,
      //   borderLeft: theme.borderLeftColor,
      //   borderRight: theme.borderRightColor,
      //   borderTop: theme.borderTopColor,
      //   borderBottom: theme.borderBottomColor,
      // });
    }
  }
  function onMouseLeaveEvent() {
    const border = "none";
    setBackground("none");
    setBorderLeft(border);
    setBorderRight(border);
    setBorderTop(border);
    setBorderBottom(border);
    // setState({
    //   background: "none",
    //   borderLeft: border,
    //   borderRight: border,
    //   borderTop: border,
    //   borderBottom: border,
    // });
  }
  function importAll(r) {
    let images = {};
    // Copied this from stack overflow and I aint screwing with it
    // eslint-disable-next-line
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  function findBackdrop(filter) {
    /* Place in order of heirachy for user to see.
        For example:
        I've placed the LGBTQ backdrop higher then Early Computing,
        because I want to emphasize representation more then era */
    const backdrops = "/images/Backdrops/";
    if (
      filter !== "all" &&
      filter !== "" &&
      filter !== undefined &&
      filter !== null
    ) {
      if (backdrops + filter + "Backdrop.svg" !== undefined) {
        return backdrops + filter + "Backdrop.svg";
      } else {
        return backdrops + "Backdrop.svg";
      }
    } else if (props.filters !== undefined && props.filters !== null) {
      if (themes[props.filters[0]] !== undefined) {
        if (backdrops + props.filters[0] + "Backdrop.svg" !== undefined) {
          return backdrops + props.filters[0] + "Backdrop.svg";
        } else {
          return backdrops + "Backdrop.svg";
        }
      } else {
        return backdrops + "Backdrop.svg";
      }
    } else {
      return backdrops + "Backdrop.svg";
    }
  }
  // const backdrops = importAll(require.context('/images/Backdrops', false, /Backdrop.svg$/));
  let backdrop =findBackdrop(props.filter);
  const eventFocusAppear = useSpring({
    transform: showEventInFocus
      ? "translate(0,0)"
      : "translate(0,-5rem)",
    opacity: showEventInFocus ? 1 : 0,
    // width: showEventInFocus ? "100%" : "75%",
    config: { duration: 500, delay: 250},
  });
  const eventFocusDisappear = useSpring({
    opacity: showEventInFocus ? 0 : 1,
    config: { duration: 500, delay: 250},
  });
  if (showEventInFocus === false) {
    return (
      <animated.div
        style={eventFocusDisappear}
        className="flex justify-center h-72 sm:h-auto "
      >
        <div
          style={{
            boxShadow: "-3px 12px 6px 8px rgba(0,0,0,.6)",
            color: props.theme.textEventColor,
            backgroundImage: background,
            borderTop: borderTop,
            borderBottom: borderBottom,
            borderRight: borderRight,
            borderLeft: borderLeft,
          }}
          onMouseEnter={() =>
            onMouseEnterEvent(
              `url(${backdrop})`,
              props.theme,
              props.filter,
              props.filters
            )
          }
          onMouseLeave={() => onMouseLeaveEvent()}
          onClick={() => onClick()}
          id={props.id}
          className="relative flex text-center mb-32 transition-all duration-1000 max-w-sm sm:max-w-full md:w-2/6 bg-cover"
        >
          <div className="flex flex-row mx-4 my-4 items-center space-x-16">
            <div className="flex justify-start flex-col mx-2 sm:w-3/6">
              <p
                style={{ color: props.theme.textEventColor }}
                className="inline-block text-sm sm:text-base sm:mr-2"
              >
                {props.year}
                {/*<span style={{color: theme.textEventColor}} className="Event-location">{props.location}.</span>*/}
              </p>
              <h3
                style={{ color: props.theme.textEventColor }}
                className="relative text-sm sm:text-base"
              >
                {props.title}
              </h3>
            </div>
            <div className="mx-16">
              <Image
                className={styles.EventImage}
                width={200}
                height={200}
                objectFit="contain"
                src={props.TimelineImage + "?webp"}
                alt="Error"
              />
            </div>
          </div>
        </div>
        {/* timeline seperator */}
        <div
          className="absolute border-opacity-100 -mt-8 h-4/6 border-4 overflow-hidden"
          style={{
            borderColor: "rgba(0,0,0,1)",
          }}
        />
      </animated.div>
    );
  } else
    return (
      <animated.div style={eventFocusAppear} className="flex justify-center">
        <EventFocus
          image={props.TimelineImage}
          filter={props.filter}
          filters={props.filters}
          theme={props.theme}
          showEventInFocus={showEventInFocus}
          hideEventInFocus={hideEventInFocus}
          header={props.title}
          body={props.body}
          type={props.type}
          citations={[props.citations[0], props.citations[1]]}
        />
      </animated.div>
    );
}
function Event(props) {
  function checkYearBCE(year) {
    /* Necessary for dates before the common era. */
    let yearNew;
    if (year < 0) {
      yearNew = Math.abs(year) + " BCE"; /* Converts to correct format */
      return yearNew;
    } else return year;
  }
  let theme = useContext(ThemeStyles);
  let filters = props.filters;
  let year = checkYearBCE(props.year);
  return (
    <DesktopEvent
      theme={theme}
      filter={props.filter}
      filters={filters}
      year={year}
      location={props.location}
      title={props.title}
      TimelineImage={props.TimelineImage}
      body={props.body}
      citations={[props.citations[0], props.citations[1]]}
      type={props.type}
    />
  );
}
export default Event;
