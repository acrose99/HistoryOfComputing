import React, { Component } from "react";
import stylesFocus from "./EventFocus.module.css";
import { themes } from "../context/themeStyles";
import { Icon, InlineIcon } from "@iconify/react";
import EraIcon from "./eraIcon";
import crossCircle from "@iconify/icons-gridicons/cross-circle";
import styles from "./EventFocus.module.css";
import CategoryIcons from "./CategoryIcons";

class EventFocus extends Component {
  renderCitations() {
    if (this.props.citations[0] == null || this.props.citations[0] === "") {
      return <p className={stylesFocus.eventCitation}>No citations.</p>;
    }
    if (
      this.props.citations[0] != null &&
      this.props.citations[1] === undefined
    ) {
      return (
        <p className={stylesFocus.eventCitation}>
          Citation: {this.props.citations[0]}
        </p>
      );
    } else {
      return (
        <div>
          <p className={stylesFocus.eventCitation}>
            Citations: {this.props.citations[0]}, {this.props.citations[1]}
          </p>
        </div>
      );
    }
  }
  renderBodyText() {
    return <p className={stylesFocus.eventBodyText}>{this.props.body}</p>;
  }
  renderCategories(filters) {
    let categories = [];
    for (let i = 0; i < filters.length; i++) {
      /* TODO: Redo when i add events */
      if (
        filters[i].includes("Computing") === false &&
        filters[i] !== "Ancient" &&
        filters[i] !== "Internet" &&
        filters[i] !== "Medieval" &&
        filters[i] !== "Enlightenment" &&
        filters[i] !== "Industrial" &&
        filters[i] !== "InformationAge" &&
        filters[i] !== "Women" &&
        filters[i] !== "LGBTQ" &&
        filters[i] !== "POC"
      ) {
        categories.push(filters[i]);
      }
    }
    if (categories.length === 0) {
      return (
        <div
          style={{ background: this.props.theme.background }}
          className="flex justify-center items-center text-base border-slate-900 border-4 border-r-2 w-fit rounded-l-xl"
        >
          <p className="mx-4 jusitfy-center"> No categories specified</p>
        </div>
      );
    }
    return (
      <div
        style={{ background: this.props.theme.background }}
        className="flex justify-center items-center text-base border-slate-900 border-4 border-r-2 w-fit px-4 rounded-l-xl"
      >
        <CategoryIcons icons={categories} />
      </div>
    );
  }
  renderEra(filters) {
    if (filters.includes("Ancient")) {
      return (
        <div
          style={{ background: this.props.theme.background }}
          className="flex justify-center items-center text-base border-slate-900 border-4 border-r-2 w-max px-4 rounded-r-xl"
        >
          <EraIcon icon="Ancient" />
        </div>
      );
    } else if (filters.includes("Medieval")) {
      return (
        <div
          style={{ background: this.props.theme.background }}
          className="flex justify-center items-center text-base border-slate-900 border-4 border-r-2 w-max px-4 rounded-r-xl"
        >
          <EraIcon icon="Medieval" />
        </div>
      );
    } else if (filters.includes("Enlightenment")) {
      return (
        <div
          style={{ background: this.props.theme.background }}
          className="flex justify-center items-center text-base border-slate-900 border-4 border-r-2 w-max px-4 rounded-r-xl"
        >
          <EraIcon icon="Enlightenment" />
        </div>
      );
    } else if (filters.includes("Industrial")) {
      return (
        <div
          style={{ background: this.props.theme.background }}
          className="flex justify-center items-center text-base border-slate-900 border-4 border-r-2 w-max px-4 rounded-r-xl"
        >
          <EraIcon icon="Industrial" />
        </div>
      );
    } else if (filters.includes("EarlyComputing")) {
      return (
        <div
          style={{ background: this.props.theme.background }}
          className="flex justify-center items-center text-base border-slate-900 border-4 border-r-2 w-max px-4 rounded-r-xl"
        >
          <EraIcon icon="EarlyComputing" />
        </div>
      );
    } else if (filters.includes("ModernComputing")) {
      return (
        <div
          style={{ background: this.props.theme.background }}
          className="flex justify-center items-center text-base border-slate-900 border-4 border-r-2 w-max px-4 rounded-r-xl"
        >
          <EraIcon icon="ModernComputing" />
        </div>
      );
    } else if (filters.includes("InformationAge")) {
      return (
        <div
          style={{ background: this.props.theme.background }}
          className="flex justify-center items-center text-base border-slate-900 border-4 border-r-2 w-max px-4 rounded-r-xl"
        >
          <EraIcon icon="InformationAge" />
        </div>
      );
    } else {
      return (
        <div
          style={{ background: this.props.theme.background }}
          className="flex justify-center items-center text-base border-slate-900 border-4 border-r-2 w-max px-4 rounded-r-xl"
        >
          <p>Era: N/A</p>
        </div>
      );
    }
  }

  findBackground(filter) {
    /* Place in order of heirachy for user to see.
            For example:
            I've placed the LGBTQ backdrop higher then Early Computing,
            because I want to emphasize representation more then era */
    if (
      filter !== "all" &&
      filter !== "" &&
      filter !== undefined &&
      filter !== null
    ) {
      if (themes[filter].background !== undefined) {
        return themes[filter].background;
      } else if (themes[this.props.filters[0]].background !== undefined) {
        return themes[this.props.filters[0]].background;
      } else {
        return this.props.theme.background;
      }
    } else if (themes[this.props.filters[0]].background !== undefined) {
      return themes[this.props.filters[0]].background;
    } else return this.props.theme.background;
  }
  renderExitIcon(filter) {
    // Place in order of heirachy for user to see.
    //    For example:
    //    I've placed the LGBTQ backdrop higher then Early Computing,
    //    because I want to emphasize representation more then era
    if (
      filter !== "all" &&
      filter !== "" &&
      filter !== undefined &&
      filter !== null
    ) {
      if (themes[filter].background !== undefined) {
        return (
          <Icon
            style={{ color: themes[filter].foreground }}
            icon={crossCircle}
            width={32}
            height={32}
          />
        );
      } else if (themes[this.props.filters[0]].background !== undefined) {
        return (
          <Icon
            style={{ color: themes[this.props.filters[0]].foreground }}
            icon={crossCircle}
            width={32}
            height={32}
          />
        );
      } else {
        return (
          <Icon
            style={{ color: this.props.theme.foreground }}
            icon={crossCircle}
            width={32}
            height={32}
          />
        );
      }
    } else if (themes[this.props.filters[0]].background !== undefined) {
      return (
        <Icon
          style={{ color: themes[this.props.filters[0]].foreground }}
          icon={crossCircle}
          width={32}
          height={32}
        />
      );
    } else
      return (
        <Icon
          style={{ color: this.props.theme.foreground }}
          icon={crossCircle}
          width={32}
          height={32}
        />
      );
  }

  render() {
    let background = this.findBackground(this.props.filter);
    return (
      <div
        className="flex flex-col w-3/6 my-32 z-30 self-center rounded-2xl"
        style={{
          background: background,
        }}
      >
        <div className="flex items-center h-16 mx-4">
          <button className="" onClick={this.props.hideEventInFocus}>
            {this.renderExitIcon(this.props.filter)}
          </button>
          <p className="mx-auto text-center text-2xl font-extrabold">
            {this.props.header}
          </p>
        </div>
        <div className="flex flex-col mx-4 space-y-8 my-8 text-lg font-bold">
          {this.renderBodyText()}
          {this.renderCitations()}
        </div>
        <div className="flex w-full justify-between x">
          <div className="flex">{this.renderCategories(this.props.filters)}</div>
          <div className="flex">
            {this.renderEra(this.props.filters)}
          </div>
        </div>
      </div>
    );
  }
}
export default EventFocus;
