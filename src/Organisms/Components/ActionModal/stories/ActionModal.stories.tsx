import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {Icon, IconsNames} from "@app/Foundations";
import {ModalPosition} from "@app/Molecules";
import {ActionModal} from "@app/Organisms";

import {ActionModalProps, ActionModalSize} from "../type";
import {LargeModalChildren} from "./LargeModalChildren/LargeModalChildren";

const modalMeta = {
  title: "Organisms/ActionModal",
  component: ActionModal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "Value to show or hide the modal",
    },
    title: {
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "Label"},
      },
      description: "The title of the modal",
    },
    size: {
      options: Object.values(ActionModalSize),
      control: {type: "inline-radio"},
      table: {
        type: {
          summary: "ActionModalSize",
        },
        defaultValue: {summary: "ActionModalSize.MEDIUM"},
      },
      description:
        "The size of the modal, it can be Small, Medium or Large. Medium is the default value. When the device is detected to be a mobile device, the size will be set to Small always.",
    },
    icon: {
      table: {
        type: {
          summary: "ReactElement",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Icon to be displayed on the modal. This can be any component which allows the consumer to pass either an icon from the Icons components or an image with any desired styling.",
    },
    hasCloseButton: {
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "true"},
      },
      description:
        "Value to show or hide the close button. This does not affect the functionalities to close the modal based on the ESC key or clicking outside the modal, it will only show or hide the close button.",
    },
    position: {
      options: Object.values(ModalPosition),
      table: {
        type: {
          summary: "ModalPosition",
        },
        defaultValue: {summary: "ModalPosition.CENTER"},
      },
      description:
        "The position of the modal. This can be CENTER, TOP, BOTTOM, LEFT or RIGHT and this will always be horizontally or vertically aligned when it applies. It can also be a combination of them, TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT which will represent the corners of the screen.",
    },
    primaryAction: {
      table: {
        type: {
          summary: "ModalAction",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Primary action to be displayed on the modal. This is a button with a label and an onClick function which will be displayed in a button with a primary variant.",
    },
    secondaryAction: {
      table: {
        type: {
          summary: "ModalAction",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Secondary action to be displayed on the modal. This is a button with a label and an onClick function which will be displayed in a button with a outlined variant.",
    },
    children: {
      table: {
        type: {
          summary: "ReactElement",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "The main content of the modal, this can be anything that the modal is expected to display",
    },
    handleClose: {
      table: {
        type: {
          summary: "function",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Function to close the modal. This function will be executed when the ESC key is pressed and when the user clicks outside the modal.",
    },
  },
  args: {
    isOpen: true,
    hasCloseButton: true,

    handleClose: () => {
      console.info("Close action");
    },
    "data-testid": "action-modal",
  },
} satisfies Meta<React.PropsWithChildren<ActionModalProps>>;

export default modalMeta;
type ModalStory = StoryObj<typeof modalMeta>;

export const Default: ModalStory = {
  args: {
    isOpen: true,
    title: "Modal no action buttons",
    icon: <Icon name={IconsNames.FACE_SMILE} size={56} />,
    children: <div>This is the body of the modal</div>,
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export const PrimaryAction: ModalStory = {
  args: {
    isOpen: true,
    title: "Modal with primary action",
    icon: <Icon name={IconsNames.FACE_SMILE} size={56} />,
    children: <div>This is the body of the modal</div>,

    primaryAction: {
      label: "Aceptar",
      onClick: () => {
        console.info("Primary action");
      },
      "data-testid": "primary-action",
    },
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export const PrimaryAndSecondaryActions: ModalStory = {
  args: {
    isOpen: true,
    title: "Modal with both actions",
    icon: <Icon name={IconsNames.FACE_SMILE} size={56} />,
    children: <div>This is the body of the modal</div>,

    primaryAction: {
      label: "Aceptar",
      onClick: () => {
        console.info("Primary action");
      },
      "data-testid": "primary-action",
    },

    secondaryAction: {
      label: "Cancelar",
      onClick: () => {
        console.info("Secondary action");
      },
      "data-testid": "secondary-action",
    },
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export const LargeChildren: ModalStory = {
  args: {
    isOpen: true,
    title: "Modal with large children and scroll",
    icon: <Icon name={IconsNames.FACE_SMILE} size={56} />,
    children: <LargeModalChildren />,

    primaryAction: {
      label: "Aceptar",
      onClick: () => {
        console.info("Primary action");
      },
      "data-testid": "primary-action",
    },
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
