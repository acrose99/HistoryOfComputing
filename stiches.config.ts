import { createStitches, createTheme, keyframes } from '@stitches/react';
import {mauve, violet} from '@radix-ui/colors';
export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      ...mauve,
      ...violet,
    },
    fontSizes: {
      1: "13px",
      2: "15px",
      3: "17px",
    },
    media: {
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
      bp1: "(min-width: 640px)",
      bp2: "(min-width: 768px)",
      bp3: "(min-width: 1024px)",
    },
  },
});