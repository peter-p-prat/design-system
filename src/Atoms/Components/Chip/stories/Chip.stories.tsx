import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {
  Chip,
  ChipColors,
  ChipProps,
  ChipShapes,
  ChipSizes,
  ChipVariants,
} from "@app/Atoms";
import {IconsNames} from "@app/Foundations";

import demoImg from "./assets/demo-img.jpeg";
import {ChipWrapper} from "./ChipWrapper";

const meta = {
  title: "Atoms/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "The text to be displayed in the chip",
    },
    variant: {
      options: Object.values(ChipVariants),
      control: {type: "select"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: ChipVariants.OUTLINED},
      },
      description: "The chip color",
    },
    shape: {
      options: Object.values(ChipShapes),
      control: {type: "select"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: ChipShapes.SQUARED},
      },
      description: "The chip shape",
    },
    color: {
      options: Object.values(ChipColors),
      control: {type: "select"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: ChipColors.PRIMARY},
      },
      description: "The chip color",
    },
    size: {
      options: Object.values(ChipSizes),
      control: {type: "select"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: ChipSizes.SMALL},
      },
      description: "The chip size",
    },
    inactive: {
      description:
        "If passed, the chip will have lighter colors and lower opacity",
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    onClick: {
      description:
        "The action to be performed when the chip is clicked. If passed, the chip will be clickeable",
      control: {type: "boolean"},
      table: {
        type: {
          summary: "function",
        },
      },
    },
    onClear: {
      description:
        "The action to be performed when the chip X icon is clicked. If passed, a clear button will be shown on the right side of the chip",
      control: {type: "boolean"},
      table: {
        type: {
          summary: "function",
        },
      },
    },
    leadingIcon: {
      options: Object.values(IconsNames),
      control: {type: "select"},
      table: {
        type: {
          summary: "IconsNames",
        },
      },
      description:
        "If passed, the icon will be shown on the left side of the chip",
    },
    leadingImg: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
      },
      description:
        "Image SRC. If passed, the img will be shown on the left side of the chip",
    },
  },
  args: {
    label: "Chip",
    onClear: undefined,
    onClick: undefined,
    "data-testid": "chip-regular",
  },
} satisfies Meta<ChipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  decorators: [
    (Story, {args}) => {
      return (
        <ChipWrapper dark={args.color === ChipColors.WHITE}>
          <Story
            args={{
              ...args,
              onClick: args?.onClick ? () => {} : undefined,
              onClear: args?.onClear ? () => {} : undefined,
            }}
          />
        </ChipWrapper>
      );
    },
  ],
};

export const OnlyIcon: Story = {
  args: {
    leadingIcon: IconsNames.CLOCK,
    label: undefined,
    shape: ChipShapes.ROUNDED,
    variant: ChipVariants.FILLED_LIGHT,
    size: ChipSizes.LARGE,
  },
  argTypes: {
    leadingImg: {
      control: false,
    },
  },

  decorators: [
    (Story, {args}) => {
      return (
        <ChipWrapper dark={args.color === ChipColors.WHITE}>
          <Story
            args={{
              ...args,
              onClick: args?.onClick ? () => {} : undefined,
              onClear: args?.onClear ? () => {} : undefined,
            }}
          />
        </ChipWrapper>
      );
    },
  ],
};

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: IconsNames.CALENDAR,
  },
  argTypes: {
    leadingImg: {
      control: false,
    },
  },

  decorators: [
    (Story, {args}) => {
      return (
        <ChipWrapper dark={args.color === ChipColors.WHITE}>
          <Story
            args={{
              ...args,
              onClick: args?.onClick ? () => {} : undefined,
              onClear: args?.onClear ? () => {} : undefined,
            }}
          />
        </ChipWrapper>
      );
    },
  ],
};
export const WithLeadingImg: Story = {
  args: {
    leadingImg: demoImg,
  },
  argTypes: {
    leadingIcon: {
      control: false,
    },
  },

  decorators: [
    (Story, {args}) => {
      return (
        <ChipWrapper dark={args.color === ChipColors.WHITE}>
          <Story
            args={{
              ...args,
              onClick: args?.onClick ? () => {} : undefined,
              onClear: args?.onClear ? () => {} : undefined,
            }}
          />
        </ChipWrapper>
      );
    },
  ],
};

export const Clickeable: Story = {
  args: {
    onClick: () => {},
  },

  decorators: [
    (Story, {args}) => {
      return (
        <ChipWrapper dark={args.color === ChipColors.WHITE}>
          <Story
            args={{
              ...args,
              onClick: args?.onClick ? () => {} : undefined,
              onClear: args?.onClear ? () => {} : undefined,
            }}
          />
        </ChipWrapper>
      );
    },
  ],
};

export const Clearable: Story = {
  args: {
    onClear: () => {},
  },

  decorators: [
    (Story, {args}) => {
      return (
        <ChipWrapper dark={args.color === ChipColors.WHITE}>
          <Story
            args={{
              ...args,
              onClick: args?.onClick ? () => {} : undefined,
              onClear: args?.onClear ? () => {} : undefined,
            }}
          />
        </ChipWrapper>
      );
    },
  ],
};

export const AsMultiSelect: Story = {
  render: (args) => {
    const [selectedChips, setSelectedChips] = useState<string[]>(["chip1"]);

    const handleClick = (chip: string) => {
      setSelectedChips((prevSelectedChips) =>
        prevSelectedChips.includes(chip)
          ? prevSelectedChips.filter((selectedChip) => selectedChip !== chip)
          : [...prevSelectedChips, chip]
      );
    };

    return (
      <ChipWrapper dark={args.color === ChipColors.WHITE}>
        {["chip1", "chip2", "chip3"].map((chip, index) => (
          <Chip
            key={chip}
            label={chip}
            onClick={() => {
              handleClick(chip);
            }}
            variant={
              selectedChips.includes(chip)
                ? ChipVariants.FILLED
                : ChipVariants.OUTLINED
            }
            data-testid={`chip-as-multi-select-${String(index)}`}
          />
        ))}
      </ChipWrapper>
    );
  },
};
