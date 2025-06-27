import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {CopyButton} from "@app/Atoms/Components/CopyButton";
import {CopyButtonProps} from "@app/Atoms/Components/CopyButton/type";
import {IconsNames} from "@app/Foundations";

import styles from "./CopyButtonStory.module.scss";

const meta = {
  title: "Atoms/CopyButton",
  component: CopyButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    textToCopy: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "The text to be copied to the clipboard",
    },
    iconName: {
      options: Object.values(IconsNames),
      control: {type: "select"},
      table: {
        type: {
          summary: "IconsNames",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "The icon name to be shown as the button",
    },
    size: {
      control: {type: "number"},
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {summary: "16"},
      },
      description: "The size of the icon",
    },
    ariaLabel: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "copy-button"},
      },
      description: "The aria-label for the button",
    },
    timeToShowCopiedIcon: {
      control: {type: "number"},
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {summary: "500"},
      },
      description: "The time in milliseconds to show the copied icon",
    },
    customClassName: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "The custom class name for the button",
    },
  },
  args: {
    "data-testid": "copy-button",
  },
} satisfies Meta<CopyButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    textToCopy: "Text to copy",
    iconName: IconsNames.COPY_01,
    size: 16,
    ariaLabel: "copy-button",
  },
  decorators: [
    (Story, {args}) => {
      return (
        <div className={styles.copyButtonStory}>
          <p className={styles.text}>{args.textToCopy}</p>
          <Story />
        </div>
      );
    },
  ],
};
