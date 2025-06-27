import React, {useMemo} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {
  Button,
  ButtonAppearances,
  ButtonDesignVariants,
  ButtonJustifyContent,
  ButtonProps,
  ButtonShapes,
  ButtonSizes,
  ButtonVariants,
} from "@app/Atoms";
import {IconsNames} from "@app/Foundations";

import {ButtonBackgroundWrapper} from "../Components/ButtonBackgroundWrapper";

const meta = {
  title: "Atoms/Buttons/DefaultButton",
  component: Button,
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
    size: {
      options: Object.values(ButtonSizes),
      control: {type: "inline-radio"},
      table: {
        type: {
          summary: Object.values(ButtonSizes).join("|"),
        },
        defaultValue: {summary: ButtonSizes.MEDIUM},
      },
    },
    shape: {
      options: Object.values(ButtonShapes),
      control: {type: "inline-radio"},
      table: {
        type: {
          summary: Object.values(ButtonShapes).join("|"),
        },
        defaultValue: {summary: ButtonShapes.ROUNDED},
      },
    },
    variant: {
      options: Object.values(ButtonDesignVariants),
      mapping: {
        primary: ButtonVariants.FILLED,
        secondary: ButtonVariants.OUTLINED,
      },
      control: {type: "select"},
      table: {
        type: {
          summary: Object.values(ButtonDesignVariants).join("|"),
        },
        defaultValue: {summary: ButtonDesignVariants.PRIMARY},
      },
    },
    appearance: {
      control: {type: "select"},
      options: Object.values(ButtonAppearances),
      table: {
        type: {
          summary: Object.values(ButtonAppearances).join("|"),
        },
        defaultValue: {summary: undefined},
      },
      description:
        "The button appearance, between light and default. Only works for secondary and ghost variants",
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "false"},
      },
      description: "The button disabled state",
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
    justifyContent: {
      options: Object.values(ButtonJustifyContent),
      control: {type: "select"},
      table: {
        type: {
          summary: Object.values(ButtonJustifyContent).join("|"),
        },
        defaultValue: {summary: ButtonJustifyContent.CENTER},
      },
      description: "The button justify content",
    },
  },
  decorators: [
    (Story, {args: {variant, appearance}}) => {
      const isGhost = useMemo(
        () =>
          variant === ButtonVariants.GHOST ||
          variant === ButtonVariants.GHOST_V2,
        [variant]
      );
      return (
        <ButtonBackgroundWrapper
          isActive={
            (variant === ButtonVariants.OUTLINED || isGhost) &&
            appearance === ButtonAppearances.LIGHT
          }
        >
          <Story />
        </ButtonBackgroundWrapper>
      );
    },
  ],
  args: {
    "data-testid": "button",
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const DEFAULT_ARG_TYPES = {
  appearance: {
    table: {
      disable: true,
    },
  },
  variant: {
    table: {
      disable: true,
    },
  },
};

export const Demo: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    size: ButtonSizes.MEDIUM,
    label: "Demo Button",
    onClick() {
      return null;
    },
  },
};

export const Loading: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    size: ButtonSizes.MEDIUM,
    label: "Demo Button",
    isLoading: true,
    onClick() {
      return null;
    },
  },
};

export const WithIcon: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    size: ButtonSizes.MEDIUM,
    label: "Demo Button",
    leadingIcon: IconsNames.USER_01,
    onClick() {
      return null;
    },
  },
};

export const OnlyIcon: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    size: ButtonSizes.MEDIUM,
    leadingIcon: IconsNames.MENU_01,
    onClick() {
      return null;
    },
  },
};

export const Primary: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    size: ButtonSizes.MEDIUM,
    label: "Primary Button",
    onClick() {
      return null;
    },
  },
  argTypes: {...DEFAULT_ARG_TYPES},
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariants.OUTLINED,
    size: ButtonSizes.MEDIUM,
    label: "Secondary Button",
    onClick() {
      return null;
    },
  },
  decorators: [
    (Story, {args: {appearance}}) => {
      return (
        <ButtonBackgroundWrapper
          isActive={appearance === ButtonAppearances.LIGHT}
        >
          <Story />
        </ButtonBackgroundWrapper>
      );
    },
  ],
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
};

export const Light: Story = {
  args: {
    variant: ButtonVariants.LIGHT,
    size: ButtonSizes.MEDIUM,
    label: "Light Button",
    onClick() {
      return null;
    },
  },
  argTypes: {...DEFAULT_ARG_TYPES},
};

export const Ghost: Story = {
  args: {
    variant: ButtonVariants.GHOST,
    size: ButtonSizes.MEDIUM,
    label: "Ghost Button",
    onClick() {
      return null;
    },
  },
  decorators: [
    (Story, {args: {appearance}}) => {
      return (
        <ButtonBackgroundWrapper
          isActive={appearance === ButtonAppearances.LIGHT}
        >
          <Story />
        </ButtonBackgroundWrapper>
      );
    },
  ],
};

export const OverPrimary: Story = {
  args: {
    variant: ButtonVariants.OVER_PRIMARY,
    size: ButtonSizes.MEDIUM,
    label: "Over primary button",
    onClick() {
      return null;
    },
  },
  argTypes: {...DEFAULT_ARG_TYPES},
  decorators: [
    (Story) => {
      return (
        <ButtonBackgroundWrapper isActive overPrimary>
          <Story />
        </ButtonBackgroundWrapper>
      );
    },
  ],
};

export const GhostGray: Story = {
  args: {
    variant: ButtonVariants.GHOST_V2,
    label: "Ghost Gray Button",
    leadingIcon: IconsNames.ARROW_LEFT,
    appearance: ButtonAppearances.GRAY,
  },

  decorators: [
    (Story, {args: {appearance}}) => {
      return (
        <ButtonBackgroundWrapper
          isActive={appearance === ButtonAppearances.LIGHT}
        >
          <Story />
        </ButtonBackgroundWrapper>
      );
    },
  ],
};
