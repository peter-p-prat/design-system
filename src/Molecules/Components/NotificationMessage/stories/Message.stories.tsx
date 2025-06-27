import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {IconsNames} from "@app/Foundations";
import {Message, MessageIconPosition, MessageProps, MessageType, MessageWidthSize} from "@app/Molecules";
import {MessageStoryWrapper} from "@app/Molecules/Components/NotificationMessage/stories/MessageStoryWrapper/MessageStoryWrapper";

const meta = {
    title: "Molecules/Message",
    component: Message,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        title: {
            table: {
                type: {
                    summary: "string | ReactElement",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The title of the Message.",
        },
        icon: {
            options: Object.values(IconsNames),
            control: {type: "select"},
            table: {
                type: {
                    summary: "IconsNames",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The icon that will appear before the title.",
        },
        isOpen: {
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Value to show or hide the message",
        },
        body: {
            table: {
                type: {
                    summary: "string | ReactElement",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Any content that the message should display below the title.",
        },
        iconPosition: {
            options: Object.values(MessageIconPosition),
            table: {
                type: {
                    summary: "MessageIconPosition",
                },
                defaultValue: {summary: "MessageIconPosition.LEFT"},
            },
            description:
                "The position of the icon relative to title and body. If it is left, then title and body will appear to the right of the icon. If it is top, title and body will be below the icon.",
        },
        snapToBottom: {
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Value to snap the message to the bottom of the screen. This only applies to Tablet and Mobile devices",
        },
        type: {
            options: Object.values(MessageType),
            table: {
                type: {
                    summary: "MessageType",
                },
                defaultValue: {summary: "MessageType.WHITE"},
            },
            description: "The different type of messages to show different styles.",
        },
        rightButton: {
            table: {
                type: {
                    summary: "MessageButton",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The button that will appear to the right in the footer of the message.",
        },
        "rightButton.label": {
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The label of the button.",
        },
        "rightButton.icon": {
            options: Object.values(IconsNames),
            control: {type: "select"},
            table: {
                type: {
                    summary: "IconsNames",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The icon that will appear after the label.",
        },
        "rightButton.isDisabled": {
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Value to disable the button.",
        },
        "rightButton.customClassName": {
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Custom class name for the button.",
        },
        "rightButton.onClick": {
            table: {
                type: {
                    summary: "function",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Function to execute when the button is clicked.",
        },
        leftButton: {
            table: {
                type: {
                    summary: "MessageButton",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The left button of the message.",
        },
        "leftButton.label": {
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The label of the button.",
        },
        "leftButton.icon": {
            options: Object.values(IconsNames),
            control: {type: "select"},
            table: {
                type: {
                    summary: "IconsNames",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The icon that will appear before the label.",
        },
        "leftButton.isDisabled": {
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Value to disable the button.",
        },
        "leftButton.customClassName": {
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Custom class name for the button.",
        },
        "leftButton.onClick": {
            table: {
                type: {
                    summary: "function",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Function to execute when the button is clicked.",
        },
        handleClose: {
            table: {
                type: {
                    summary: "function",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Function to close the message.",
        },
        widthSize: {
            options: Object.values(MessageWidthSize),
            control: {type: "select"},
            table: {
                type: {
                    summary: "MessageWidthSize",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Defines the message width size between some predefined options.",
        },
    },
    args: {
        isOpen: true,
    },
} as Meta<React.PropsWithChildren<MessageProps>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Title of message",
        body: "This is the body of the message",
        icon: IconsNames.INFO_CIRCLE,
        leftButton: {
            label: "Left",

            onClick: () => {
                console.info("LEFT");
            },
        },
        rightButton: {
            label: "Right",

            onClick: () => {
                console.info("RIGHT");
            },
            icon: IconsNames.CHECK,
        },

        handleClose: () => {
            console.info("CLOSE");
        },
    },
    decorators: [
        (Story) => {
            return <Story />;
        },
    ],
};

export const SpecialCase: Story = {
    args: {
        title: "Success message",
        body: "This is the body of the message",
        icon: IconsNames.INFO_CIRCLE,
        type: MessageType.SUCCESS,
    },
    decorators: [
        (Story) => {
            const [isMessageOpen, setIsMessageOpen] = useState<boolean>(true);

            return (
                <MessageStoryWrapper
                    message={
                        <Message
                            title="Special case message"
                            body="This is the body of the special case message"
                            icon={IconsNames.INFO_CIRCLE}
                            isOpen={isMessageOpen}
                            snapToBottom
                            handleClose={() => {
                                setIsMessageOpen(false);
                            }}
                        />
                    }
                >
                    <Story />
                </MessageStoryWrapper>
            );
        },
    ],
};
