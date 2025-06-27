import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {
  RadioButton,
  RadioButtonAppearance,
  RadioButtonProps,
  RadioButtonSize,
  RadioButtonTextOrientation,
} from "@app/Atoms";

import {RadioButtonStoryWrapper} from "./RadioButtonStoryWrapper";
import {Logo, LogoColor, LogoSize, LogoVariable} from "@app/Foundations";
import {logosMap} from "@app/Foundations/Components/Logo/stories/logosMap";

const meta = {
  title: "Atoms/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {type: "text"},
      table: {
        defaultValue: {summary: "undefined"},
      },
      description: "The radio button id",
    },
    name: {
      control: {type: "text"},
      table: {
        defaultValue: {summary: "undefined"},
      },
      description: "The radio button name to group them together",
    },
    label: {
      control: {type: "object"},
      table: {
        defaultValue: {summary: "undefined"},
      },
      description:
        "The label text or image to be displayed in the radio button",
    },
    appearance: {
      options: Object.values(RadioButtonAppearance),
      control: {type: "inline-radio"},
      description: "The radio button appearance",
      table: {
        type: {
          summary: Object.values(RadioButtonAppearance).join("|"),
        },
        defaultValue: {summary: RadioButtonAppearance.LIGHT},
      },
    },
    size: {
      options: Object.values(RadioButtonSize),
      control: {type: "inline-radio"},
      description: "The radio button size",
      table: {
        type: {
          summary: Object.values(RadioButtonSize).join("|"),
        },
        defaultValue: {summary: RadioButtonSize.SMALL},
      },
    },
    isChecked: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "false"},
      },
      description: "The radio button checked status",
    },
    disabled: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "false"},
      },
      description: "The radio button disabled status",
    },
    textOrientation: {
      options: Object.values(RadioButtonTextOrientation),
      control: {type: "inline-radio"},
      description: "The radio button text orientation",
      table: {
        type: {
          summary: Object.values(RadioButtonTextOrientation).join("|"),
        },
        defaultValue: {summary: RadioButtonTextOrientation.LEFT_TO_RIGHT},
      },
    },
    onChange: {
      table: {
        type: {
          summary: "function",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "The radio button callback function",
    },
  },
  decorators: [
    (Story, {args}) => {
      return (
        <RadioButtonStoryWrapper
          theme={args.appearance ?? RadioButtonAppearance.LIGHT}
        >
          <Story />
        </RadioButtonStoryWrapper>
      );
    },
  ],
} as Meta<RadioButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    id: "radio-button-demo",
    name: "radio-button-demo",
    label: "Radio Button Demo",
    size: RadioButtonSize.SMALL,
    appearance: RadioButtonAppearance.LIGHT,
  },
};

export const Light: Story = {
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    id: "radio-button-light",
    name: "radio-button-light",
    label: "Radio Button Light",
    size: RadioButtonSize.SMALL,
    appearance: RadioButtonAppearance.LIGHT,
  },
};

export const Dark: Story = {
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    id: "radio-button-dark",
    name: "radio-button-dark",
    label: "Radio Button Dark",
    size: RadioButtonSize.SMALL,
    appearance: RadioButtonAppearance.DARK,
  },
};

export const WithImage: Story = {
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    id: "radio-button-with-image",
    name: "radio-button-with-image",
    label: (
      <Logo
        variable={LogoVariable.MAIN}
        color={LogoColor.DARK_BG}
        logosMap={logosMap}
        size={LogoSize.XS}
        alt="Z design system"
      />
    ),
    size: RadioButtonSize.SMALL,
    appearance: RadioButtonAppearance.LIGHT,
  },
};

export const WithoutLabel: Story = {
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
    textOrientation: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    id: "radio-button-empty",
    name: "radio-button-empty",
    size: RadioButtonSize.SMALL,
    appearance: RadioButtonAppearance.LIGHT,
  },
};
