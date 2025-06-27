import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {Stepper} from "@app/Molecules";
import {StepperWrapper} from "@app/Molecules/Components/Stepper/stories/StepperWrapper";
import {StepperProps} from "@app/Molecules/Components/Stepper/type";

const meta = {
  title: "Molecules/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: 4,
    currentStep: 0,
  },
  argTypes: {
    size: {
      control: {type: "number"},
      table: {
        type: {
          summary: "number",
        },
      },
      description: "The amount of steps",
    },
    currentStep: {
      control: {type: "number"},
      table: {
        type: {
          summary: "number",
        },
      },
      description: "The current step",
    },
    disableResponsiveStyles: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
      },
      description: "Disables responsive styles",
    },
  },
} satisfies Meta<StepperProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story, {args}) => {
      return <StepperWrapper {...args} />;
    },
  ],
};
