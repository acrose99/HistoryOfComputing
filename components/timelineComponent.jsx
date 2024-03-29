import React, { Component, useContext, useEffect } from "react";
import styles from "./Timeline.module.css";
import Navbar from "./Navbar";
import Event from "./Event";
// import Footer from "./Footer";
import Representation from "./Representation";
import { events } from "../events";
import { ThemeStyles } from "../context/themeStyles";
import { themes } from "../context/themeStyles";
import Text from "../components/common/Text";
import Footer from "./Footer";

function useDocumentTitle(title) {
  useEffect(() => {
    if (title !== "") {
      document.title = "History of Computing: " + title;
    } else document.title = "History of Computing";
  });
}

function TimelineComponent(props) {
  const theme = useContext(ThemeStyles);
  useDocumentTitle(props.filter);
  let newdata;
  if (props.filter === "all") {
    newdata = events
      .sort((a, b) => {
        if (a["Year"] < b["Year"]) return -1;
        else return 1;
      })
      .map(function (data, index) {
        return (
          <Event
            theme={props.timelineFilter}
            filter={props.filter}
            filters={data["Filters"]}
            key={index}
            year={data["Year"]}
            date={data["Date"]}
            title={data["Title"]}
            TimelineImage={data["TimelineImage"]}
            body={data["Body"]}
            citations={[data["Citations"][0], data["Citations"][1]]}
          >
            {" "}
          </Event>
        );
      });
  } else if (typeof props.filter === "object") {
    if (
      events.filter(
        (data) =>
          (data["Year"] === props.filter[0]) +
          (data["Year"] === props.filter[1])
      ).length >= 0
    ) {
      newdata = events
        .filter(
          (data) =>
            data["Year"] >= props.filter[0] && data["Year"] <= props.filter[1]
        )
        .map((data, index) => {
          return (
            <Event
              theme={props.timelineFilter}
              filters={data["Filters"]}
              key={index}
              year={data["Year"]}
              date={data["Date"]}
              title={data["Title"]}
              TimelineImage={data["TimelineImage"]}
              body={data["Body"]}
              citations={[data["Citations"][0], data["Citations"][1]]}
            >
              {" "}
            </Event>
          );
        });
    } else {
      return (
        <div className={styles.Timeline}>
          <Navbar />
          <h2 className={styles.TimelineIntro}>
            Important events that summarize the History of Computing.
          </h2>
          <h1 style={{ textAlign: "center", color: "#5c71e1" }}>
            No Events Found! Try Again!
          </h1>

          <div style={{ marginBottom: "200px" }} />
          {/*hack way to fix the timeline separator*/}
          <Footer />
        </div>
      );
    }
  } else {
    newdata = events
      .filter((data) => data["Filters"] !== undefined)
      .filter((data) => data["Filters"].includes(props.filter))
      .sort((a, b) => {
        if (a["Year"] > b["Year"]) {
          return 1;
        } else return -1;
      })
      .map((data, index) => {
        return (
          <Event
            theme={props.timelineFilter}
            filter={props.filter}
            filters={data["Filters"]}
            key={index}
            year={data["Year"]}
            date={data["Date"]}
            title={data["Title"]}
            TimelineImage={data["TimelineImage"]}
            body={data["Body"]}
            citations={[data["Citations"][0], data["Citations"][1]]}
          >
            {" "}
          </Event>
        );
      });
  }

  class Events extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mobile: false,
        events: newdata,
      };
    }
    render() {
      return (
        <div>
          <div className="flex flex-col justify-center items-center min-h-screen space-y-12">
            <div className="w-6/12 flex flex-col justify-center items-center space-y-12 py-12">
              {this.state.events}
            </div>
          </div>
        </div>
      );
    }
  }
  function createTimeLineIntro() {
    if (props.filter === "all") {
      return (
        <div
          className="space-y-6 flex justify-center mx-4 sm:mx-24 flex-col z-50"
          style={{ textAlign: "center" }}
        >
          <h2 className="font-black text-3xl">
            Important events that summarize the History of Computing:
          </h2>
          <p>
            Scroll through the filters/categories above to read specific events,
            or if you're dedicated, read through all of them chronologically
            here!
          </p>
          <p>
            Please note that this by no means a complete summary, as such would
            be impossible. I believe that this is one of the more complete and
            non biased timelines of computing history, on the web, but
            nevertheless theres only so much one person can do.{" "}
          </p>
          <a>
            {" "}
            I'm still updating the timeline! Click here to see what still needs
            to be added.
          </a>
          <p>
            Finally, I decided to stop the timeline at 2011, a decade earlier,
            since the legacy of most things after that is still ongoing, and
            could change.
          </p>
        </div>
      );
    } else if (typeof props.filter === "object") {
      return (
        <h2 className="text-center font-black text-3xl">
          Important events that summarize the History of Computing from the year{" "}
          {props.filter[0]} to the year {props.filter[1]}{" "}
        </h2>
      );
    } else if (props.filter === "Ancient") {
      return (
        <h2 className="text-center font-black text-3xl">
          Important events that summarize the History of {props.filter}{" "}
          Mathematics.
        </h2>
      );
    } else if (props.filter === "Medieval") {
      return (
        <h2 className="text-center font-black text-3xl">
          Important events that summarize the History of {props.filter}{" "}
          Mathematics.
        </h2>
      );
    } else if (props.filter === "Enlightenment") {
      return (
        <h2 className="text-center font-black text-3xl">
          Important events that summarize the History of {props.filter}{" "}
          Mathematics.
        </h2>
      );
    } else if (props.filter === "ModernComputing") {
      return (
        <h2 className="text-center font-black text-3xl">
          Important events that summarize the History of Modern Computing.
        </h2>
      );
    } else if (props.filter === "Industrial") {
      return (
        <h2 className="text-center font-black text-3xl">
          Important events that summarize the History of {props.filter}{" "}
          Mechanics.
        </h2>
      );
    } else if (props.filter === "EarlyComputing") {
      return (
        <h2 className="text-center font-black text-3xl">
          Important events that summarize the History of Early Computing.
        </h2>
      );
    } else if (props.filter === "text-center InformationAge") {
      return (
        <h2 className="text-center font-black text-3xl">
          Important events that summarize the History of the Information Age.
        </h2>
      );
    } else if (props.filter === "Women") {
      return (
        <div>
          <h2 className="text-center font-black text-3xl">
            Important events that summarize the History of Women in Computing.
          </h2>
          <Representation />
        </div>
      );
    } else if (props.filter === "LGBTQ") {
      return (
        <div>
          <h3 className="text-center font-black text-3xl">
            Important events that summarize the History of LGBTQ+ individuals in
            Computing.
          </h3>
          <Representation />
        </div>
      );
    } else if (props.filter === "POC") {
      return (
        <div>
          <h2 className="text-center font-black text-3xl">
            Important events that summarize the History of POC individuals in
            Computing.
          </h2>
          <Representation />
        </div>
      );
    } else {
      return (
        <h2 className="text-center font-black text-3xl">
          Important events that summarize the History of {props.filter}.
        </h2>
      );
    }
  }

  return (
    <div className="">
      <div style={{ marginBottom: "200px" }} />
      {/*hack way to fix the filterer*/}
      {createTimeLineIntro()}
      <div style={{ marginBottom: "100px" }} />
      {/*hack way to fix the timeline separator*/}
      <Events />
      <h1 style={{ marginTop: 250, textAlign: "center" }}>and counting...</h1>
      <div style={{ marginBottom: "200px", marginTop: "50px" }} />
      {/*hack way to fix the timeline separator*/}
      <Footer />
    </div>
  );
}
export default TimelineComponent;
