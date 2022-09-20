import React, { Component } from "react";
import stylesFocus from "./EventFocus.module.css";
import { themes } from "../context/themeStyles";
import { Icon, InlineIcon } from "@iconify/react";
import EraIcon from "./eraIcon";
import crossCircle from "@iconify/icons-gridicons/cross-circle";
import styles from "./EventFocus.module.css";
import CategoryIcons from "./Event/CategoryIcons";
import Image from "next/image";
import tinycolor from "tinycolor2";
class EventFocus extends Component {
  render() {
    return (
      <div className="flex flex-col w-96 mb-12 sm:mb-0 sm:w-5/6 space-y-12 z-20  self-center rounded-2xl border-2 border-slate-900">
        <div className="flex h-16 mx-4 mt-6">
          <p className="mx-auto text-xl sm:text-3xl lg:text-4xl font-extrabold">
            {this.props.header}
          </p>
          <button
            className="text-slate-900 hover:text-indigo-500 transition-colors"
            onClick={this.props.hideEventInFocus}
          >
            <Icon icon={crossCircle} width={32} height={32} />
          </button>
        </div>
        <div className="flex flex-col mx-4 space-y-16 my-8">
          <p className="prose">{this.props.body}</p>
          <Image
            height={200}
            width={200}
            objectFit="contain"
            src={this.props.image}
          />
        </div>
        <div className="flex w-full justify-between x"></div>
      </div>
    );
  }
}
export default EventFocus;
