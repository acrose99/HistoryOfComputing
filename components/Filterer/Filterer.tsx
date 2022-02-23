import React, { useState } from "react";

import { useSpring, config } from "react-spring";

import { styled } from "../../stiches.config";
import { keyframes } from "@stitches/react";
import { violet, mauve } from "@radix-ui/colors";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@radix-ui/react-icons";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

type ContextMenuItem = {
  children: React.ReactNode;
  func: () => any;
  type?: "str";
};
interface ContextDialogProps {
  children: React.ReactNode;
  menuItems: ContextMenuItem[];
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
  marginTop: '5px',
  backgroundColor: "white",
  padding: '5px 5px 1px',
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
});

const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderBottom: `1px solid ${violet.violet11}`,
  display: "flex",
  alignItems: "center",
  height: 25,
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: mauve.mauve8,
    pointerEvents: "none",
  },

  "&:focus": {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
  "&hover": {
    backgroundColor: violet.violet4,
    color: violet.violet11,
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, {
  ...itemStyles,
});
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  ...itemStyles,
});
const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
  marginTop: "5px",
  backgroundColor: "white",
  borderRadius: 6,
  padding: 5,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11,

  },
  ...itemStyles,
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: "25px",
  color: mauve.mauve11,
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: "white",
});
const StyledChevron = styled(ChevronRightIcon, {
  color: violet.violet12,
  marginLeft: 5,
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(90deg)" },
});
function ContextDialog({
  children,
  changeTimeLineFilter,
  menuItems,
}: ContextDialogProps) {
  return (
    <div className="z-50 fixed">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger className="flex w-32 z-100" asChild>
          <div
            style={{
              backgroundColor: "white",
              color: violet.violet11,
              cursor: "pointer",
              borderRadius: 3,
            }}
            className="h-12 flex flex-row items-center my-4 p-4 text-xl rounded shadow-2xl"
          >
            Filter
            <StyledChevron />
          </div>
        </DropdownMenuPrimitive.Trigger>
        <StyledContent>
          <DropdownMenuPrimitive.DropdownMenu>
            <DropdownMenuPrimitive.DropdownMenuTriggerItem
              className="flex w-32 py-2"
              style={{
                backgroundColor: "white",
                color: violet.violet11,
                borderRadius: 3,
              }}
            >
              <ChevronLeftIcon />
              Categories
            </DropdownMenuPrimitive.DropdownMenuTriggerItem>
            <StyledContent sideOffset={2} alignOffset={-5}>
              <StyledItem onClick={() => changeTimeLineFilter("Culture")}>
                Culture
              </StyledItem>
              <StyledItem onClick={() => changeTimeLineFilter("Hardware")}>
                Hardware
              </StyledItem>
              <StyledItem onClick={() => changeTimeLineFilter("Software")}>
                Software
              </StyledItem>
              <StyledItem onClick={() => changeTimeLineFilter("Languages")}>
                Languages
              </StyledItem>
              <StyledItem onClick={() => changeTimeLineFilter("AI")}>
                AI
              </StyledItem>
              <StyledItem onClick={() => changeTimeLineFilter("Gaming")}>
                Gaming
              </StyledItem>
            </StyledContent>
          </DropdownMenuPrimitive.DropdownMenu>
          <DropdownMenuPrimitive.DropdownMenu>
            <DropdownMenuPrimitive.DropdownMenuTriggerItem
              className="flex w-32 py-3"
              style={{
                backgroundColor: "white",
                color: violet.violet11,
                borderRadius: 3,
              }}
            >
              <ChevronLeftIcon />
              Eras
            </DropdownMenuPrimitive.DropdownMenuTriggerItem>
            <StyledContent sideOffset={2} alignOffset={-5}>
              <StyledItem onClick={() => changeTimeLineFilter("Ancient")}>
                Ancient
              </StyledItem>
              <StyledItem onClick={() => changeTimeLineFilter("Medieval")}>
                Medieval
              </StyledItem>
              <StyledItem onClick={() => changeTimeLineFilter("Enlightenment")}>
                Enlightenment
              </StyledItem>
              <StyledItem onClick={() => changeTimeLineFilter("Industrial")}>
                Industrial
              </StyledItem>
              <StyledItem
                onClick={() => changeTimeLineFilter("EarlyComputing")}
              >
                Early Computing
              </StyledItem>
              <StyledItem
                onClick={() => changeTimeLineFilter("ModernComputing")}
              >
                Modern Computing
              </StyledItem>
              <StyledItem
                onClick={() => changeTimeLineFilter("InformationAge")}
              >
                Information Age
              </StyledItem>
            </StyledContent>
          </DropdownMenuPrimitive.DropdownMenu>
          <DropdownMenuPrimitive.DropdownMenu>
            <DropdownMenuPrimitive.DropdownMenuTriggerItem
              className="flex w-32 py-3"
              style={{
                backgroundColor: "white",
                color: violet.violet11,
                borderRadius: 3,
              }}
            >
              <ChevronLeftIcon />
              Companies
            </DropdownMenuPrimitive.DropdownMenuTriggerItem>
            <StyledContent sideOffset={2} alignOffset={-5}>
              <StyledItem onClick={() => changeTimeLineFilter("Apple")}>
                Apple
              </StyledItem>
              <StyledItem onClick={() => changeTimeLineFilter("IBM")}>
                IBM
              </StyledItem>
              <StyledItem onClick={() => changeTimeLineFilter("Microsoft")}>
                Microsoft
              </StyledItem>
              {/* <StyledItem onClick={() => changeTimeLineFilter("AT&T")}>
                AT&T
              </StyledItem> */}
            </StyledContent>
          </DropdownMenuPrimitive.DropdownMenu>
          {menuItems.map((item, index) => (
            <DropdownMenuPrimitive.DropdownMenu>
              <StyledTriggerItem>
                <StyledItem className="w-64" key={index} onClick={item.func}>
                  {item.children}
                </StyledItem>
              </StyledTriggerItem>
            </DropdownMenuPrimitive.DropdownMenu>
          ))}
        </StyledContent>
      </DropdownMenuPrimitive.Root>
    </div>
  );
}

/* TODO: Have some sort of Search? */
function Filterer(props) {
  const [minYear, setMinYear] = useState(props.minYear);
  const [maxYear, setMaxYear] = useState(props.maxYear);
  const [opened, setOpened] = useState(false);
  // function onClickFiltererType(filter, theme) {
  //   toggleTheme(theme);
  //   changeTimeLineFilter(filter);
  // }

  function changeTimeLineFilter(filter) {
    props.handleFilterChange(filter);
  }
  // function handleYear(value) {
  //   setState({
  //     year: value,
  //   });
  // }
  const { z } = useSpring({
    z: opened ? 90 : 0,
  });
  const menuAppear = useSpring({
    opacity: opened ? 1 : 0,
    transform: opened ? "translate3d(0,0,0)" : "translate3d(0, -100%, 0)",
    config: {
      duration: 500,
      delay: 100,
      ...config.wobbly,
    },
  });
  return (
    <div className="flex z-50 justify-end px-12 fixed w-screen">
      <ContextDialog
      menuItems={[]}
      children={<div>Filter</div>} 
      changeTimeLineFilter={changeTimeLineFilter} />
    </div>
  );
}

export default Filterer;
