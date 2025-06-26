import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {Logo} from "../Logo";
import {
  LogoColor,
  LogoProps,
  LogoSize,
  LogoVariable,
  SymbolPosition,
} from "../type";

import {logosMap} from "./logosMap";
import {LogoWrapper} from "./LogoWrapper";

const meta = {
  title: "Foundations/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
    controls: {
      include: ["alt", "size", "variable", "position", "color"],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: Object.values(LogoSize),
      control: {type: "select"},
      table: {
        type: {
          summary: "string",
        },
      },
      description: "The logo size",
    },
    variable: {
      options: Object.values(LogoVariable),
      control: {type: "select"},
      table: {
        type: {
          summary: "string",
        },
      },
      description: "The logo variable",
    },
    position: {
      options: Object.values(SymbolPosition),
      control: {type: "select"},
      table: {
        type: {
          summary: "string",
        },
      },
      description:
        "The logo position. It is only used when the logo variable is SYMBOL",
    },
    color: {
      options: Object.values(LogoColor),
      control: {type: "select"},
      table: {
        type: {
          summary: "string",
        },
      },
      description: "The logo color",
    },
    alt: {
      control: {type: "text"},
      table: {
        type: {summary: "string"},
      },
      description: "The image alt text",
    },
  },
  args: {
    logosMap: logosMap,
  },
} satisfies Meta<LogoProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightBackground: Story = {
  args: {
    size: LogoSize.L,
    color: LogoColor.LIGHT_BG,
    variable: LogoVariable.MAIN,
    alt: "Z design system",
  },
  decorators: [
    (Story) => {
      const {props} = Story();
      return (
        <LogoWrapper
          darkBackground={
            props.args.color === LogoColor.DARK_BG ||
            props.args.color === LogoColor.WHITE
          }
        >
          <Story />
        </LogoWrapper>
      );
    },
  ],
};

export const DarkBackground: Story = {
  args: {
    size: LogoSize.L,
    color: LogoColor.DARK_BG,
    variable: LogoVariable.MAIN,
    alt: "Z design system",
  },
  decorators: [
    (Story) => {
      const {props} = Story();
      console.info(props);
      return (
        <LogoWrapper
          darkBackground={
            props.args.color === LogoColor.DARK_BG ||
            props.args.color === LogoColor.WHITE
          }
        >
          <Story />
        </LogoWrapper>
      );
    },
  ],
};

export const WhiteBackground: Story = {
  args: {
    size: LogoSize.L,
    color: LogoColor.WHITE,
    variable: LogoVariable.MAIN,
    alt: "Z design system",
  },
  decorators: [
    (Story) => {
      const {props} = Story();
      return (
        <LogoWrapper
          darkBackground={
            props.args.color === LogoColor.DARK_BG ||
            props.args.color === LogoColor.WHITE
          }
        >
          <Story />
        </LogoWrapper>
      );
    },
  ],
};

export const Clickable: Story = {
  args: {
    size: LogoSize.L,
    color: LogoColor.DARK_BG,
    variable: LogoVariable.MAIN,
    alt: "Z design system",
    onClick: () => {},
  },
  decorators: [
    (Story) => {
      const {props} = Story();
      return (
        <LogoWrapper
          darkBackground={
            props.args.color === LogoColor.DARK_BG ||
            props.args.color === LogoColor.WHITE
          }
        >
          <Story />
        </LogoWrapper>
      );
    },
  ],
};
