import { mauve, mauveDark } from "@radix-ui/colors";
import { styled, keyframes } from "@stitches/react";

interface TextProps {
  children: React.ReactNode;
}

const StyledP = styled("p", {
  variants: {
    color: {
      mauve: {
        color: mauve.mauve1,
      },
      mauveDark: {
        color: mauveDark.mauve1
      },
    },
  },
});
function Text({children}: TextProps) {
  return <StyledP>{children}</StyledP>;
}

export default Text;
