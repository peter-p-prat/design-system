import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {Button} from "@app/Atoms";
import {Modal, ModalPosition, ModalProps} from "@app/Molecules";
import {ModalChildren} from "./ModalChildren";

const modalMeta = {
  title: "Molecules/Modal",
  component: Modal,
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
    position: {
      options: Object.values(ModalPosition),
      control: {type: "select"},
      table: {
        type: {
          summary: "ModalPosition",
        },
        defaultValue: {summary: "ModalPosition.CENTER"},
      },
      description:
        "The position of the modal. This can be CENTER, TOP, BOTTOM, LEFT or RIGHT and this will always be horizontally or vertically aligned when it applies. It can also be a combination of them, TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT which will represent the corners of the screen.",
    },
    children: {
      table: {
        type: {
          summary: "ReactElement",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "Any content that the modal should display.",
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
    smoothTransition: {
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "false"},
      },
      description:
        "Defines if the modal should have a smooth transition when it opens and closes.",
    },
  },
  args: {
    isOpen: true,

    handleClose: () => {
      console.info("Close action");
    },
    "data-testid": "modal-default",
  },
} satisfies Meta<React.PropsWithChildren<ModalProps>>;

export default modalMeta;
type ModalStory = StoryObj<typeof modalMeta>;

export const Default: ModalStory = {
  args: {
    children: <ModalChildren />,
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export const WithSmoothTransition: ModalStory = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button
          onClick={() => {
            setIsOpen((prevValue) => !prevValue);
          }}
          label="Open modal"
          data-testid="open-modal-button"
        />
        <Modal
          smoothTransition
          {...args}
          isOpen={isOpen}
          handleClose={() => {
            setIsOpen(false);
          }}
          data-testid="modal-with-smooth-transition"
        >
          <ModalChildren
            handleClick={() => {
              setIsOpen(false);
            }}
          />
        </Modal>
      </>
    );
  },
};
