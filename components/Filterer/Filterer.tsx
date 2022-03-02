import React, { useState } from "react";

import { useSpring, config } from "react-spring";
import { useTheme } from "next-themes";

import { styled } from "../../stiches.config";
import { keyframes } from "@stitches/react";
import { violet, mauve, mauveDark, violetDark } from "@radix-ui/colors";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  Cross1Icon,
  HamburgerMenuIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as Separator from "@radix-ui/react-separator";
import Submenu from "./Submenu";
type ContextMenuItem = {
  children: React.ReactNode;
  func: () => any;
  type?: "str";
};
interface ContextDialogProps {
  filter: string;
  changeTimeLineFilter: (filter: string) => void;
}

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  marginTop: "5px",
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
  variants: {
    color: {
      mauve: {
        color: violet.violet11,
        backgroundColor: mauve.mauve1,
      },
      mauveDark: {
        color: violetDark.violet11,
        backgroundColor: mauveDark.mauve5,
      },
    },
  },
});

const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  padding: "5px 10px",
  // borderBottom: `1px solid ${violet.violet11}`,
  display: "flex",
  alignItems: "center",
  height: 25,
  position: "relative",
  userSelect: "none",
  cursor: "pointer",
  variants: {
    color: {
      mauve: {
        color: violet.violet11,
        backgroundColor: mauve.mauve1,
        "&:focus": {
          backgroundColor: mauve.mauve2,
          color: violet.violet12,
        },
      },
      mauveDark: {
        color: violetDark.violet11,
        backgroundColor: mauveDark.mauve5,
        "&:focus": {
          backgroundColor: mauveDark.mauve4,
          color: violet.violet9,
        },
      },
    },
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, {
  ...itemStyles,
});

const StyledChevron = styled(ChevronRightIcon, {
  marginLeft: 5,
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(90deg)" },
  variants: {
    color: {
      mauve: {
        fill: violet.violet1,
      },
      mauveDark: {
        fill: violetDark.violet11,
      },
    },
  },
});

/* TODO: Have some sort of Search? */
function Filterer(props) {
  function changeTimeLineFilter(filter) {
    props.handleFilterChange(filter);
  }
  const { theme } = useTheme();
  return (
    <div className="flex z-50 justify-end px-12 fixed w-screen">
      <div className="z-50 fixed">
        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger className="flex w-32 z-100" asChild>
            <div
              style={{
                // color: theme === "light" ? violet.violet11 : violetDark.violet11,
                // backgroundColor:
                //   theme === "light" ? mauve.mauve1 : mauveDark.mauve5,
                cursor: "pointer",
                borderRadius: 3,
              }}
              className="h-12 flex flex-row items-center my-4 p-4 text-xl rounded shadow-2xl bg-white dark:bg-[#2e2e32] text-[#9e8cfc]"
            >
              Filter
              <StyledChevron
                color={theme === "light" ? "mauve" : "mauveDark"}
              />
            </div>
          </DropdownMenuPrimitive.Trigger>
          <StyledContent color={theme === "light" ? "mauve" : "mauveDark"}>
            <Submenu
              title="Categories"
              items={[
                "Culture",
                "Hardware",
                "Software",
                "Languages",
                "AI",
                "Gaming",
              ]}
              filter={props.filter}
              changeTimeLineFilter={changeTimeLineFilter}
            />
            <Submenu
              title="Eras"
              items={[
                "Ancient",
                "Medieval",
                "Industrial",
                "Early Computing",
                "Modern Computing",
                "Information Age",
              ]}
              filter={props.filter}
              changeTimeLineFilter={changeTimeLineFilter}
            />
            <Submenu
              title="Companies"
              items={["Apple", "Microsoft", "IBM"]}
              filter={props.filter}
              changeTimeLineFilter={changeTimeLineFilter}
            />
            {props.filter != "all" && (
              <StyledItem
                onClick={() => {
                  changeTimeLineFilter("/all");
                }}
                color={theme === "light" ? "mauve" : "mauveDark"}
              >
                Show All
              </StyledItem>
            )}
          </StyledContent>
        </DropdownMenuPrimitive.Root>
      </div>
    </div>
  );
}

export default Filterer;
