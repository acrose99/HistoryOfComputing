import React, { useState } from "react";
import { InlineIcon } from "@iconify/react";
import caretRightOutlined from "@iconify/icons-ant-design/caret-right-outlined";

import styles from "./Filterer.module.css";
import { animated, useSpring } from "react-spring";

function filtererCategory(props) {
  function onClickFiltererType(filter, theme) {
    if (filter === "Early Computing" || theme === "Early Computing") {
      props.toggleTheme("EarlyComputing");
      changeTimeLineFilter("EarlyComputing");
    } else if (filter === "AT&T") {
      props.toggleTheme("ATAT");
      changeTimeLineFilter("ATAT");
    } else if (filter === "Modern Computing" || theme === "modern computing") {
      props.toggleTheme("ModernComputing");
      changeTimeLineFilter("ModernComputing");
    } else if (filter === "Information Age" || theme === "information age") {
      props.toggleTheme("InformationAge");
      changeTimeLineFilter("InformationAge");
    } else if (filter === "Imagination Age" || theme === "imagination age") {
      props.toggleTheme("ImaginationAge");
      changeTimeLineFilter("ImaginationAge");
    } else {
      props.toggleTheme(theme);
      changeTimeLineFilter(filter);
    }
  }
  function changeTimeLineFilter(filter) {
    props.handleFilterChange(filter);
  }
  const [toggled, setToggled] = useState(false);
  const { z } = useSpring({
    z: toggled ? 90 : 0,
  });
  const menuAppear = useSpring({
    opacity: toggled ? 1 : 0,
  });
  const filters = props.filters.map((filter, index) => (
    <div
      key={index}
      className="cursor-pointer mx-2 text-slate-900 transition-all duration-1000 hover:text-indigo-500"
    >
      <div
        onClick={() => onClickFiltererType(filter, filter)}
        className="flex items-center"
      >
        <InlineIcon height={32} width={32} icon={props.icons[index]} />
        <h4 className="text-base mx-2 whitespace-nowrap">{filter}</h4>
      </div>
    </div>
  ));

  return (
    <div
      onClick={() => setToggled(!toggled)}
      className="flex flex-col relative text-slate-900 hover:text-indigo-500 transition-colors"
    >
      <h4 className="flex text-lg mx-2">
        {props.category}
        <animated.div
          style={{
            transform: z.to((y) => `rotateZ(${y}deg)`),
          }}
        >
          <InlineIcon
            id={props.category + "Icon"}
            height={24}
            width={24}
            icon={caretRightOutlined}
          />
        </animated.div>
      </h4>
      <animated.div style={menuAppear}>
        {toggled ? (
          <div id={props.category} className="flex flex-col">
            {filters}
          </div>
        ) : null}
      </animated.div>
    </div>
  );
}

export default React.memo(filtererCategory);
