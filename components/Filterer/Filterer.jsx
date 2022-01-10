import React, { useState } from "react";
import { InlineIcon } from "@iconify/react";
import appleFilled from "@iconify/icons-ant-design/apple-filled";
import caretRightOutlined from "@iconify/icons-ant-design/caret-right-outlined";
import bxlMicrosoft from "@iconify/icons-bx/bxl-microsoft";
import crossIcon from "@iconify/icons-la/cross";
import internetOfThingsLine from "@iconify/icons-clarity/internet-of-things-line";

import abjadArabic from "@iconify/icons-mdi/abjad-arabic";
import microscopeIcon from "@iconify/icons-carbon/microscope";
import Years from "./Years";
import oracleIcon from "@iconify/icons-simple-icons/oracle";
import ibmIcon from "@iconify/icons-cib/ibm";
import bxsFactory from "@iconify/icons-bx/bxs-factory";
import cardFileBox from "@iconify/icons-emojione-monotone/card-file-box";
import womenLine from "@iconify/icons-ri/women-line";
import rainbowFlag from "@iconify/icons-twemoji/rainbow-flag";
import globeIcon from "@iconify/icons-vs/globe";
import circuitBoard from "@iconify/icons-codicon/circuit-board";
import appWindowDuotone from "@iconify/icons-ph/app-window-duotone";
import gaming15 from "@iconify/icons-maki/gaming-15";
import attIcon from "@iconify/icons-file-icons/att";
import robotExcitedOutline from "@iconify/icons-mdi/robot-excited-outline";
import imacIcon from "@iconify/icons-whh/imac";
import bxCodeCurly from "@iconify/icons-bx/bx-code-curly";
import booksIcon from "@iconify/icons-raphael/books";
import solarisIcon from "@iconify/icons-grommet-icons/solaris";

import FilterCategory from "./FiltererCategory";
import { ThemeStyles } from "../../context/themeStyles";
import { useSpring, config, animated } from "react-spring";
/* TODO: Have some sort of Search? */
function Filterer(props) {
  const [minYear, setMinYear] = useState(props.minYear);
  const [maxYear, setMaxYear] = useState(props.maxYear);
  const [opened, setOpened] = useState(false);
  function onClickFiltererType(filter, theme) {
    toggleTheme(theme);
    changeTimeLineFilter(filter);
  }

  function changeTimeLineFilter(filter) {
    handleFilterChange(filter);
  }

  function changeTimelineFilterYear(minFilter, maxFilter) {
    handleFilterChangeYear(minFilter, maxFilter);
  }

  function handleYear(value) {
    setState({
      year: value,
    });
  }
  const { z } = useSpring({
    z: opened ? 90 : 0,
  });
  const menuAppear = useSpring({
    opacity: opened ? 1 : 0,
    transform: opened ? "translate3d(0,0,0)" : "translate3d(0, -100%, 0)",
    config: {
      duration: 500,
      delay: 100,
      ...config.wobbly
    },
  });
  return (
    <div className="flex justify-end mb-80 mx-8">
      <div className="flex flex-col w-64 z-50 fixed overflow-auto bg-gradient-to-b from-slate-50 to-slate-100 border-b-2 border-b-slate-900 py-2 space-y-4">
        <h4
          onClick={() => setOpened(!opened)}
          className="flex flex-row text-black hover:text-indigo-500 transition-colors text-xl whitespace-nowrap mx-2"
        >
          Filter Events
          <animated.span
            style={{
              transform: z.to((y) => `rotateZ(${y}deg)`),
            }}
          >
            <InlineIcon height={24} width={24} icon={caretRightOutlined} />
          </animated.span>
        </h4>

        {opened ? (
          <animated.div style={menuAppear} className="space-y-4">
            {/* <Years
                changeTimelineFilterYear={changeTimelineFilterYear}
                maxYear={state.maxYear}
                minYear={state.minYear}
          /> */}
            <FilterCategory
              category="Categories"
              //"Modern Computing", "Information Age", "'Imagination Age'"
              filters={[
                "Culture",
                "Hardware",
                "Software",
                "Languages",
                "AI",
                "Gaming",
              ]}
              icons={[
                booksIcon,
                circuitBoard,
                appWindowDuotone,
                bxCodeCurly,
                robotExcitedOutline,
                gaming15,
              ]}
              toggleTheme={props.toggleTheme}
              handleFilterChange={props.handleFilterChange}
            />

            <FilterCategory
              category="Eras"
              //"Information Age", "'Imagination Age'"
              filters={[
                "Ancient",
                "Medieval",
                "Enlightenment",
                "Industrial",
                "Early Computing",
                "Modern Computing",
                "Information Age",
              ]}
              icons={[
                abjadArabic,
                crossIcon,
                microscopeIcon,
                bxsFactory,
                cardFileBox,
                imacIcon,
                internetOfThingsLine,
              ]}
              toggleTheme={props.toggleTheme}
              handleFilterChange={props.handleFilterChange}
            />

            <FilterCategory
              category="Companies"
              filters={["Apple", "IBM", "Microsoft", "AT&T"]}
              icons={[appleFilled, ibmIcon, bxlMicrosoft, attIcon]}
              toggleTheme={props.toggleTheme}
              handleFilterChange={props.handleFilterChange}
            />

            {/* TODO: ADD Events */}

            {/*<FilterCategory category="Companies" filters={["Apple", "IBM", "Microsoft", "AT&T", "Oracle", "Sun"]}*/}
            {/*                icons={[appleFilled, ibmIcon, bxlMicrosoft, attIcon, oracleIcon, solarisIcon]}*/}
            {/*                toggleTheme={toggleTheme}*/}
            {/*                handleFilterChange={handleFilterChange}/>*/}
            {/*<FilterCategory category="Representation" filters={["Women", "LGBTQ", "POC"]}*/}
            {/*                icons={[womenLine, rainbowFlag, globeIcon]}*/}
            {/*                toggleTheme={toggleTheme}*/}
            {/*                handleFilterChange={handleFilterChange}/>*/}

            {props.filter !== "all" ? (
              <div
                className="text-lg mx-2 text-slate-900  hover:text-indigo-500 transition-colors cursor-pointer"
                onClick={() => props.handleFilterChange("all")}
              >
                <h4>Show All Events</h4>
              </div>
            ) : null}
          </animated.div>
        ) : null}
      </div>
    </div>
  );
}

export default Filterer;
