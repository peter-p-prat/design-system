import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {logosMap} from "@app/Foundations/Components/Logo/stories/logosMap";

import {Footer, FooterConfig, FooterProps} from "..";

import {FooterWrapper} from "./FooterWrapper";

const demoFooterConfig: FooterConfig = {
  brand: {
    brandLogoConfig: {
      logosMap: logosMap,
      brandName: "Design System",
    },
    legend: "Build. Design. Scale.",
  },
  firstColumnLinks: [
    {
      label: "Stores",
      onClick: () => {},
    },
    {
      label: "Purchases",
      onClick: () => {},
    },
    {
      label: "How to use",
      onClick: () => {},
    },
    {
      label: "How to use",
      onClick: () => {},
    },
  ],
  secondColumnLinks: [
    {
      label: "Terms of use",
      onClick: () => {},
    },
    {
      label: "Privacy policy",
      onClick: () => {},
    },
    {
      label: "Cookies",
      onClick: () => {},
    },
    {
      label: "Accessibility",
      onClick: () => {},
    },
    {
      label: "About us",
      onClick: () => {},
    },
  ],
  configDropdowns: [
    {
      label: "Country",
      options: [
        {
          label: "Argentina",
          value: "Argentina",
        },
        {
          label: "Uruguay",
          value: "Uruguay",
        },
      ],
      value: [{label: "Argentina", value: "Argentina"}],
    },
    {
      label: "Language",
      options: [
        {
          label: "English",
          value: "English",
        },
        {
          label: "Spanish",
          value: "Spanish",
        },
      ],
      value: [{label: "English", value: "English"}],
    },
  ],
  copyright: "© 2024 All rights reserved",
};

const meta = {
  title: "Atoms/Footer",
  component: Footer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<FooterProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    config: demoFooterConfig,
  },
  decorators: [
    (Story) => (
      <FooterWrapper>
        <Story />
      </FooterWrapper>
    ),
  ],
};
