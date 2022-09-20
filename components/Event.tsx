import React, { useState, useContext } from "react";
import styles from "./Event.module.css";
import stylesFocus from "./EventFocus.module.css";

import { ThemeStyles } from "../context/themeStyles";
import { themes } from "../context/themeStyles";

import Image from "next/image";
import EventFocus from "./EventFocus";
import { animated, useSpring } from "react-spring";

import { styled, keyframes } from "@stitches/react";

import { violet, blackA, mauve, mauveDark, violetDark } from "@radix-ui/colors";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import Citations from "./Event/Citations";
import Categories from "./Event/Categories";
import Era from "./Event/Era";
import { useTheme } from "next-themes";
const slideDown = keyframes({
  from: { height: 0, transform: "translateY(-20px)" },
  to: {
    height: "var(--radix-accordion-content-height)",
    transform: "translateY(0)",
  },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  borderRadius: 6,
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
  transition: "all 0.2s ease-in-out",
  width: "20rem",
  "&:hover": {
    boxShadow: `0 2px 10px ${blackA.blackA5}`,
  },
  "@media (max-width: 410px)": {
    padding: "0 1rem",
  },
  "@media (min-width: 768px)": {
    width: "30rem",
  },
  "@media (min-width: 1024px)": {
    width: "40rem",
  },
  zIndex: 1,
  "&:before": {
    content: '""',
    position: "absolute",
    width: "5px",
    height: "25%",
    left: "50%",
    backgroundColor: violet.violet11,
    zIndex: -1,
    transition: "opacity 0.2s ease-in-out",
    '&[data-state="open"]': {
      opacity: 1,
    },
  },
  "&:after": {
    content: '""',
    position: "absolute",
    width: "5px",
    height: "25%",
    left: "50%",
    backgroundColor: violet.violet11,
    zIndex: -1,
    transition: "opacity 0.2s ease-in-out",
    '&[data-state="open"]': {
      opacity: 1,
    },
  },
  '&[data-state="open"]': {
    "&:before": {
      opacity: 0,
    },
  },
});
const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: violet.violet8,
  "&[data-orientation=horizontal]": { height: 1, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 1 },
});
const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  marginTop: 1,

  "&:first-child": {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  "&:last-child": {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  padding: "3rem",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "1.5rem",
  lineHeight: 1,
  fontWeight: "900",
  cursor: "pointer",
  "&:hover": { backgroundColor: mauve.mauve2 },
  variants: {
    color: {
      mauve: {
        '&[data-state="closed"]': { backgroundColor: mauve.mauve1 },
        '&[data-state="open"]': {
          backgroundColor: mauve.mauve2,
        },
        backgroundColor: mauve.mauve2,
        "&:hover": { backgroundColor: mauve.mauve3 },

        color: violet.violet11,
      },
      mauveDark: {
        '&[data-state="closed"]': { backgroundColor: mauveDark.mauve2 },
        '&[data-state="open"]': {
          backgroundColor: mauveDark.mauve3,
        },
        backgroundColor: mauveDark.mauve2,
        "&:hover": { backgroundColor: mauveDark.mauve3 },
        color: "white",
      },
    },
  },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  '&[data-state="open"]': {
    animation: `${slideDown} 600ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 600ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  variants: {
    color: {
      mauve: {
        backgroundColor: mauve.mauve2,
        color: mauve.mauve11,
      },
      mauveDark: {
        backgroundColor: mauveDark.mauve2,
        color: mauveDark.mauve11,
      },
    },
  },
});

const StyledContentText = styled("div", {
  // color: mauve.mauve12,
});

const StyledChevron = styled(ChevronDownIcon, {
  color: violet.violet10,
  height: "2.5rem",
  width: "2.5rem",
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(180deg)" },
});

function AccordionTrigger({ children, ...props }) {
  return (
    <StyledHeader>
      <StyledTrigger {...props}>
        {children}
        <StyledChevron />
      </StyledTrigger>
    </StyledHeader>
  );
}

function AccordionContent({ children, ...props }) {
  return (
    <StyledContent {...props}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  );
}

function Event(props) {
  const [showEventInFocus, setShowEventInFocus] = useState(false);
  const eventFocusAppear = useSpring({
    transform: showEventInFocus ? "translate(0,0)" : "translate(0,-5rem)",
    opacity: showEventInFocus ? 1 : 0,
    // width: showEventInFocus ? "100%" : "75%",
    config: { duration: 500, delay: 250 },
  });
  const eventFocusDisappear = useSpring({
    opacity: showEventInFocus ? 0 : 1,
    config: { duration: 500, delay: 250 },
  });
  function checkYearBCE(year) {
    /* Necessary for dates before the common era. */
    let yearNew;
    if (year < 0) {
      yearNew = Math.abs(year) + " BCE"; /* Converts to correct format */
      return yearNew;
    } else return year;
  }
  // let filters = props.filters;
  // let year = checkYearBCE(props.year);
  const { theme, setTheme } = useTheme();
  return (
    <>
      {!showEventInFocus ? (
        <StyledAccordion type="single" collapsible>
          <StyledItem value="item-1">
            <AccordionTrigger color={theme === "light" ? "mauve" : "mauveDark"}>
              {props.title}
            </AccordionTrigger>
            <AccordionContent color={theme === "light" ? "mauve" : "mauveDark"}>
              <div
                className="prose prose-headings:font-bold
              flex justify-center flex-col text-center p-12"
              >
                <Image
                  width={200}
                  height={200}
                  objectFit="contain"
                  src={props.TimelineImage + "?webp"}
                  alt="Error"
                />
                <h2 className=""> Year: {props.year}.</h2>
                <StyledSeparator />
                <p className=""> {props.body}</p>
                <Citations citations={props.citations} />
                <StyledSeparator />
                <Categories filters={props.filters} />
                <div className="flex space-x-4 items-center">
                  <p>Era: </p>
                  <Era filters={props.filters} />
                </div>
              </div>
            </AccordionContent>
          </StyledItem>
        </StyledAccordion>
      ) : (
        <animated.div style={eventFocusAppear} className="flex justify-center">
          <EventFocus
            image={props.TimelineImage}
            filter={props.filter}
            filters={props.filters}
            theme={props.theme}
            showEventInFocus={() => setShowEventInFocus(true)}
            hideEventInFocus={() => setShowEventInFocus(false)}
            header={props.title}
            body={props.body}
            type={props.type}
            citations={[props.citations[0], props.citations[1]]}
          />
        </animated.div>
      )}
    </>
  );
}
export default Event;
