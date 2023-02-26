import { Variants } from "framer-motion";

export const mobileNavVariants: Variants = {
  initial: {
    x: "-200vw",
  },
  animate: {
    x: 0,
    transition: { type: "tween" },
  },
  exit: {
    x: "-200vw",
    transition: { type: "tween" },
  },
};
