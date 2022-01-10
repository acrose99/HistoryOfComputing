import React, { useState } from "react";
import styles from "./Filterer.module.css";
import { ThemeStyles } from "../../context/themeStyles";
import { InlineIcon } from "@iconify/react";
import caretRightOutlined from "@iconify/icons-ant-design/caret-right-outlined";
import { animated, useSpring } from "react-spring";
/* TODO ALLOW A RANGE OF YEARS */
function Years(props) {
  const [toggled, setToggled] = useState(false);
  const { z } = useSpring({
    z: toggled ? 90 : 0,
  });
  const menuAppear = useSpring({
    opacity: toggled ? 1 : 0,
  });
  const [minYear, setMinYear] = useState(props.minYear);
  const [maxYear, setMaxYear] = useState(props.maxYear);
  return (
    <div className="flex flex-col">
      <div
        className="flex relative text-slate-900 hover:text-indigo-500 transition-colors items-center "
        onClick={() => setToggled(!toggled)}
      >
        <h4 className="text-lg mx-2">Years</h4>
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
      </div>
      {toggled ? (
        <animated.div
          style={menuAppear}
          className="flex flex-col space-y-4 mx-4"
        >
          <div className="">
            <label htmlFor="minYear">
              Start Year:
              <input
                className="mx-4"
                min="-3300"
                max="2021"
                id="minYear"
                value={minYear}
                onChange={(e) => setMinYear(e.target.value)}
                type="number"
              />
            </label>
          </div>
          <div>
            <label htmlFor="maxYear">
              End Year:
              <input
                className="mx-4"
                min="-3500"
                max="2021"
                id="maxYear"
                value={maxYear}
                onChange={(e) => setMaxYear(e.target.value)}
                type="number"
              />
            </label>
          </div>
          <button
            className="text-slate-900 hover:text-indigo-500 transition-colors"
            onClick={() => props.changeTimelineFilterYear(minYear, maxYear)}
          >
            Set Year
          </button>
        </animated.div>
      ) : null}
    </div>
  );
}

export default React.memo(Years);
