import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {CardButton, CardButtonProps} from "@app/Atoms";
import {ButtonBackgroundWrapper} from "@app/Atoms/Components/Button/DefaultButton/Components/ButtonBackgroundWrapper";
import {IconsNames} from "@app/Foundations";
import {getColorFromPalette} from "@app/shared";

const meta = {
  title: "Atoms/Buttons/CardButton",
  component: CardButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: {type: "text"},
      table: {
        defaultValue: {summary: "undefined"},
      },
      description: "The button text",
    },
    leadingIcon: {
      options: Object.values(IconsNames),
      control: {type: "select"},
      table: {
        defaultValue: {summary: "undefined"},
      },
    },
    trailingIcon: {
      options: Object.values(IconsNames),
      control: {type: "select"},
      table: {
        defaultValue: {summary: "undefined"},
      },
    },
    onClick: {
      table: {
        type: {
          summary: "function",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "The button callback function",
    },
  },
  decorators: [
    (Story) => {
      return (
        <ButtonBackgroundWrapper isActive={false}>
          <Story />
        </ButtonBackgroundWrapper>
      );
    },
  ],
  args: {
    "data-testid": "card-button",
  },
} satisfies Meta<CardButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardWithIcons: Story = {
  args: {
    label: "How to use",
    leadingIcon: IconsNames.COIN_HAND,
    trailingIcon: IconsNames.CHEVRON_RIGHT,
    borderColor: getColorFromPalette("gray", "25"),
    onClick() {
      return null;
    },
  },
  decorators: [
    (Story) => {
      return (
        <ButtonBackgroundWrapper isActive={false}>
          <Story />
        </ButtonBackgroundWrapper>
      );
    },
  ],
};
