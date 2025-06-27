import React, {ChangeEvent, useState} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {
  Checkbox,
  CheckboxAppearances,
  CheckboxLabelPositions,
  CheckboxProps,
  CheckboxSizes,
} from "@app/Atoms";

import {CheckboxStoriesWrapper} from "./CheckboxStoriesWrapper";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: Object.values(CheckboxSizes),
      control: {type: "inline-radio"},
      table: {
        type: {
          summary: "CheckboxSizes",
        },
        defaultValue: {summary: "CheckboxSizes.MEDIUM"},
      },
      description: "Defines the checkbox size",
      defaultValue: CheckboxSizes.MEDIUM,
    },
    customClassName: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "Label"},
      },
      description: "Custom class name to be applied to the checkbox container",
    },
    label: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "Label"},
      },
      description:
        "If passed, the text or jsx element to be displayed as the input label",
    },
    labelPosition: {
      options: Object.values(CheckboxLabelPositions),
      control: {type: "inline-radio"},
      table: {
        type: {
          summary: "CheckboxLabelPositions",
        },
        defaultValue: {summary: "CheckboxLabelPositions.TRAILING"},
      },
      description: "Defines the label position, between leading and trailing",
      defaultValue: CheckboxLabelPositions.TRAILING,
    },
    checked: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "Defines if the checkbox is checked",
    },
    disabled: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "Defines if the checkbox is disabled",
    },
    onChange: {
      table: {
        type: {
          summary: "function",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "If passed, triggers when the value of the Checkbox changes. Receives the updated value as a parameter",
    },
    appearance: {
      options: Object.values(CheckboxAppearances),
      control: {type: "inline-radio"},
      table: {
        type: {
          summary: "CheckboxAppearances",
        },
        defaultValue: {summary: "CheckboxAppearances.DEFAULT"},
      },
      description: "The checkbox appearance, between light and default",
      defaultValue: CheckboxAppearances.DEFAULT,
    },
  },
  args: {
    label: "Checkbox",
    "data-testid": "checkbox-default",
  },
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story, {args: {appearance}}) => {
      return (
        <CheckboxStoriesWrapper
          withBackground={appearance === CheckboxAppearances.LIGHT}
        >
          <Story />
        </CheckboxStoriesWrapper>
      );
    },
  ],
};

export const Light: Story = {
  args: {
    appearance: CheckboxAppearances.LIGHT,
  },
  decorators: [
    (Story, {args: {appearance}}) => {
      return (
        <CheckboxStoriesWrapper
          withBackground={appearance === CheckboxAppearances.LIGHT}
        >
          <Story />
        </CheckboxStoriesWrapper>
      );
    },
  ],
};

export const ControlledComponent: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked || false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
    };

    return (
      <CheckboxStoriesWrapper
        withBackground={args.appearance === CheckboxAppearances.LIGHT}
      >
        <Checkbox
          {...args}
          checked={isChecked}
          onChange={handleChange}
          data-testid="checkbox-controlled-component"
        />
        <p>
          Here we are using and internal variable to change and update the value
        </p>
        <p>CurrentValue: {String(isChecked)}</p>
      </CheckboxStoriesWrapper>
    );
  },
};

export const withLeadingLabel: Story = {
  args: {
    labelPosition: CheckboxLabelPositions.LEADING,
  },
  decorators: [
    (Story, {args: {appearance}}) => {
      return (
        <CheckboxStoriesWrapper
          withBackground={appearance === CheckboxAppearances.LIGHT}
        >
          <Story />
        </CheckboxStoriesWrapper>
      );
    },
  ],
};
