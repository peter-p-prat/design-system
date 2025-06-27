import {Meta} from "@storybook/react-vite";

import {CarouselProps} from "@app/Molecules";

export const argTypes = {
  options: {
    description: "Object with all the configurations to be applied to carousel",
  },
  "options.overflowVisible": {
    description: "Defines if a fraction of incoming slide should be shown",
    control: {type: "boolean"},
    table: {
      defaultValue: {summary: "false"},
    },
  },
  "options.showButtons": {
    description: "Defines if control buttons should be shown",
    control: {type: "boolean"},
    table: {
      defaultValue: {summary: "false"},
    },
  },
  "options.showDots": {
    description: "Defines if navigation dots should be shown",
    control: {type: "boolean"},
    table: {
      defaultValue: {summary: "true"},
    },
  },
  "options.lightMode": {
    description: "Defines if navigation dots should be white",
    control: {type: "boolean"},
    table: {
      defaultValue: {summary: "false"},
    },
  },
  "options.gap": {
    description: "Defines the gap between slides (in px)",
    control: {type: "number"},
    table: {
      defaultValue: {summary: "24"},
    },
  },
  "options.emblaOptions": {
    description:
      "Embla Carousel API options. Ref: https://www.embla-carousel.com/api/options/#reference",
  },
  "options.emblaOptions.dragFree": {
    description: "Defines if the carousel can be freely dragged",
    control: {type: "boolean"},
    table: {
      defaultValue: {summary: "true for mobile. false for tablet and desktop"},
    },
  },
  breakpoints: {
    description:
      "Object with specific options to be applied for each breakpoint. It has priority over the configs defined in the options prop",
  },
  responsiveRootElementSelector: {
    description:
      "Dom element selector to evaluate viewport width and define which breakpoint configs should be applied",
    table: {
      defaultValue: {summary: "#root"},
    },
  },
  children: {
    description: "The carousel slides",
  },
} as Meta<CarouselProps>;
