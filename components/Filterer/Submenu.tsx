import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { styled, keyframes } from "@stitches/react";
import { mauve, mauveDark, violet, violetDark } from "@radix-ui/colors";
import { useTheme } from "next-themes";
import { ChevronRightIcon } from "@radix-ui/react-icons";

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

const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
  marginTop: "5px",
  backgroundColor: "white",
  borderRadius: 6,
  cursor: "in",
  ...itemStyles,
  variants: {
    color: {
      mauve: {
        color: violet.violet10,
        backgroundColor: mauve.mauve1,
        "&:focus": {
          backgroundColor: mauve.mauve2,
          color: violet.violet11,
        },
      },
      mauveDark: {
        color: violetDark.violet10,
        backgroundColor: mauveDark.mauve5,
        "&:focus": {
          backgroundColor: mauveDark.mauve4,
          color: violet.violet9,
        },
      },
    },
  },
});

const StyledItem = styled(DropdownMenuPrimitive.Item, {
  ...itemStyles,
});
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, {
  ...itemStyles,
});
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  ...itemStyles,
});

interface SubmenuProps {
  filter: string;
  changeTimeLineFilter: (value: string) => void;
  title: string;
  items: string[];
}

function Submenu({ filter, changeTimeLineFilter, title, items }: SubmenuProps) {
  const { theme } = useTheme();
  return (
    <>
      <DropdownMenuPrimitive.DropdownMenu>
        <StyledTriggerItem
          color={theme === "light" ? "mauve" : "mauveDark"}
          className="flex w-32 py-2"
          style={{
            borderRadius: 3,
          }}
        >
            {title}
          <ChevronRightIcon />
        </StyledTriggerItem>
        <StyledContent
          color={theme === "light" ? "mauve" : "mauveDark"}
          sideOffset={2}
          alignOffset={-5}
        >
          <DropdownMenuPrimitive.RadioGroup
            value={filter}
            onValueChange={(value) => changeTimeLineFilter(value)}
          >
            {items.map((item, index) => (
              <StyledRadioItem
                key={index}
                color={theme === "light" ? "mauve" : "mauveDark"}
                value={item}
              >
                {item}
              </StyledRadioItem>
            ))}
          </DropdownMenuPrimitive.RadioGroup>
        </StyledContent>
      </DropdownMenuPrimitive.DropdownMenu>
    </>
  );
}

export default Submenu;
