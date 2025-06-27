import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {ChipColors, ChipVariants} from "@app/Atoms";
import {InfoCard, InfoCardProps} from "@app/Molecules";
import {className} from "@app/shared";

import NikeIcon from "./assets/nike.png";
import {InfoCardBackgroundWrapper} from "./InfoCardBackgroundWrapper";

import styles from "./InfoCardStory.module.scss";

const meta = {
  title: "Molecules/InfoCard",
  component: InfoCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imageSrc: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "Label"},
      },
      description: "The img url",
    },
    info: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "Label"},
      },
      description: "The info to be displayed in card",
    },
    alt: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "Label"},
      },
      description: "The alt text of the img.",
    },
    onClick: {
      table: {
        type: {
          summary: "function",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "The action to be triggered when the card is clicked",
    },
    loading: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "false"},
      },
      description:
        "Defines if the card should display a loading spinner and an overlay",
      defaultValue: false,
    },
    disabled: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "false"},
      },
      description: "Defines if the card should be disabled",
      defaultValue: false,
    },
    chip: {
      table: {
        type: {
          summary: "object",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "A chip displayed after the info component",
    },
  },
  args: {
    imageSrc: NikeIcon,
    "data-testid": "info-card",
  },
} satisfies Meta<InfoCardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnlyImage: Story = {
  args: {
    onClick: () => {
      console.info("Only image card clicked");
    },
  },
  decorators: [
    (Story) => {
      return (
        <InfoCardBackgroundWrapper>
          <Story />
        </InfoCardBackgroundWrapper>
      );
    },
  ],
};

export const WithInfoAndChip: Story = {
  args: {
    onClick: () => {
      console.info("Card with info and chip clicked");
    },
    info: (
      <div className={styles.infoCardStoryTextContainer}>
        <div className={className(styles.infoCardStoryFirst, styles.hasChip)}>
          Up to
        </div>
        <div className={styles.infoCardStorySecond}>15%</div>
      </div>
    ),
    chip: {
      label: "Discount",
      color: ChipColors.GRAY,
      variant: ChipVariants.FILLED,
      "data-testid": "info-card-chip",
    },
  },
  decorators: [
    (Story) => {
      return (
        <InfoCardBackgroundWrapper>
          <div className={styles.infoCardStoryContainer}>
            <Story />
          </div>
        </InfoCardBackgroundWrapper>
      );
    },
  ],
};
