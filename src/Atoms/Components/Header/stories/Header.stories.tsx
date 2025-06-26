import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {colorsPalette} from "@app/Foundations";
import {logosMap} from "@app/Foundations/Components/Logo/stories/logosMap";

import {HeaderProps, Header} from "..";

import {Children} from "./components/Children/Children";
import {RightContent} from "./components/RightContent/RightContent";
import {HeaderV2Wrapper} from "./HeaderWrapper";

const meta = {
  title: "Atoms/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<HeaderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    brandLogoConfig: {
      logosMap: logosMap,
      brandName: "Z design system",
      onClick: () => window.open("https://google.com"),
    },
    rightComponent: <RightContent />,
    centerComponent: <Children />,
  },
  decorators: [
    (Story) => (
      <HeaderV2Wrapper>
        <Story />
      </HeaderV2Wrapper>
    ),
  ],
};
