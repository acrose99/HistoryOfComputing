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
  // renderCitations() {
  //   if (this.props.citations[0] == null || this.props.citations[0] === "") {
  //     return <p className={stylesFocus.eventCitation}>No citations.</p>;
  //   }
  //   if (
  //     this.props.citations[0] != null &&
  //     this.props.citations[1] === undefined
  //   ) {
  //     return (
  //       <p className={stylesFocus.eventCitation}>
  //         Citation: {this.props.citations[0]}
  //       </p>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <p className={stylesFocus.eventCitation}>
  //           Citations: {this.props.citations[0]}, {this.props.citations[1]}
  //         </p>
  //       </div>
  //     );
  //   }
  // }
  // renderCategories(filters) {
  //   let categories = [];
  //   for (let i = 0; i < filters.length; i++) {
  //     /* TODO: Redo when i add events */
  //     if (
  //       filters[i].includes("Computing") === false &&
  //       filters[i] !== "Ancient" &&
  //       filters[i] !== "Internet" &&
  //       filters[i] !== "Medieval" &&
  //       filters[i] !== "Enlightenment" &&
  //       filters[i] !== "Industrial" &&
  //       filters[i] !== "InformationAge" &&
  //       filters[i] !== "Women" &&
  //       filters[i] !== "LGBTQ" &&
  //       filters[i] !== "POC"
  //     ) {
  //       categories.push(filters[i]);
  //     }
  //   }
  //   if (categories.length === 0) {
  //     return (
  //       <div
  //         // style={{ background: this.props.theme.background }}
  //         className="flex justify-center items-center text-base border-slate-900 border-t-2 border-r-2 w-fit p-4"
  //       >
  //         <p className="mx-4 jusitfy-center"> No categories specified</p>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div
  //       // style={{ background: this.props.theme.background }}
  //       className="flex justify-center items-center text-base border-slate-900 border-t-2 border-r-2 w-fit p-4 "
  //     >
  //       <CategoryIcons icons={categories} />
  //     </div>
  //   );
  // }
  // renderEra(filters) {
  //   if (filters.includes("Ancient")) {
  //     return (
  //       <div
  //         // style={{ background: this.props.theme.background }}
  //         className="flex justify-center items-center text-base border-slate-900 border-t-2 border-l-2 w-max p-4"
  //       >
  //         <EraIcon
  //           icon="Ancient"
  //         />
  //       </div>
  //     );
  //   } else if (filters.includes("Medieval")) {
  //     return (
  //       <div className="flex justify-center items-center text-base border-slate-900 border-t-2 border-l-2 w-max p-4">
  //         <EraIcon
  //           icon="Medieval"
  //         />
  //       </div>
  //     );
  //   } else if (filters.includes("Enlightenment")) {
  //     return (
  //       <div
  //         // style={{ background: this.props.theme.background }}
  //         className="flex justify-center items-center text-base border-slate-900 border-t-2 border-l-2 w-max p-4"
  //       >
  //         <EraIcon
  //           icon="Enlightenment"
  //         />
  //       </div>
  //     );
  //   } else if (filters.includes("Industrial")) {
  //     return (
  //       <div
  //         // style={{ background: this.props.theme.background }}
  //         className="flex justify-center items-center text-base border-slate-900 border-t-2 border-l-2 w-max p-4"
  //       >
  //         <EraIcon
  //           icon="Industrial"
  //         />
  //       </div>
  //     );
  //   } else if (filters.includes("EarlyComputing")) {
  //     return (
  //       <div
  //         // style={{ background: this.props.theme.background }}
  //         className="flex justify-center items-center text-base border-slate-900 border-t-2 border-l-2 w-max p-4"
  //       >
  //         <EraIcon color={"black"} icon="EarlyComputing" />
  //       </div>
  //     );
  //   } else if (filters.includes("ModernComputing")) {
  //     return (
  //       <div
  //         // style={{ background: this.props.theme.background }}
  //         className="flex justify-center items-center text-base border-slate-900 border-t-2 border-l-2 w-max p-4"
  //       >
  //         <EraIcon
  //          icon="ModernComputing" />
  //       </div>
  //     );
  //   } else if (filters.includes("InformationAge")) {
  //     return (
  //       <div
  //         // style={{ background: this.props.theme.background }}
  //         className="flex justify-center items-center text-base border-slate-900 border-t-2 border-l-2 w-max p-4"
  //       >
  //         <EraIcon
  //         icon="InformationAge" />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div
  //         // style={{ background: this.props.theme.background }}
  //         className="flex justify-center items-center text-base border-slate-900 border-t-2 border-l-2 w-max p-4"
  //       >
  //         <p>Era: N/A</p>
  //       </div>
  //     );
  //   }
  // }



  render() {
    return (
      <div
        className="flex flex-col w-96 mb-12 sm:mb-0 sm:w-5/6 space-y-12 z-20  self-center rounded-2xl border-2 border-slate-900"
        style={{
        }}
      >
        <div className="flex h-16 mx-4 mt-6">
          <p className="mx-auto text-xl sm:text-3xl lg:text-4xl font-extrabold">
            {this.props.header}
          </p>
          <button className="text-slate-900 hover:text-indigo-500 transition-colors" onClick={this.props.hideEventInFocus}>
            <Icon icon={crossCircle} width={32} height={32} />
          </button>
        </div>
        <div className="flex flex-col mx-4 space-y-16 my-8 text-lg font-bold">
          <p className="text-lg font-medium my-8">{this.props.body}</p>
          <Image
            height={200}
            width={200}
            objectFit="contain"
            src={this.props.image}
          />
          {/* {this.renderCitations()} */}
        </div>
        <div className="flex w-full justify-between x">
          {/* <div className="flex">
            {this.renderCategories(this.props.filters)}
          </div> */}
          {/* <div className="flex">{this.renderEra(this.props.filters)}</div> */}
        </div>
      </div>
    );
  }
}
export default EventFocus;
