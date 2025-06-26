import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {Popover, PopoverAlignments, PopoverProps} from "@app/Atoms";

import {PopoverStoryAnchor} from "./components/PopoverStoryAnchor/PopoverStoryAnchor";
import {PopoverStoryContentElement} from "./components/PopoverStoryContentElement/PopoverStoryContentElement";
import {PopoverStoryWrapper} from "./components/PopoverStoryWrapper/PopoverStoryWrapper";

const meta = {
    title: "Atoms/Popover",
    component: Popover,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        anchor: {
            control: {disable: true},
            table: {
                type: {
                    summary: "React.ReactNode",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The element to be used as the anchor of the popover",
        },
        content: {
            control: {disable: true},
            table: {
                type: {
                    summary: "React.ReactNode",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The element to be used as the popover content",
        },
        openToTop: {
            control: {type: "boolean"},
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "false"},
            },
            description: "Defines if the Dropdown opens to the top instead of the bottom",
        },
        alignment: {
            options: Object.values(PopoverAlignments),
            control: {type: "inline-radio"},
            table: {
                type: {
                    summary: "PopoverAlignments",
                },
                defaultValue: {summary: "PopoverAlignments.RIGHT"},
            },
            description:
                "Defines the alignment of the Dropdown options. The default value RIGHT aligns the options to the right of the label, while LEFT aligns them to the left of the label",
            defaultValue: PopoverAlignments.RIGHT,
        },
        customAnchorClassName: {
            control: {type: "text"},
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Custom classname to be forwarded to the anchor wrapper element.",
        },
        customPopoverClassName: {
            control: {type: "text"},
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Custom classname to be forwarded to the popover wrapper element.",
        },
        disableCloseWhenClickOutside: {
            control: {type: "boolean"},
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "false"},
            },
            description: "Controls whether to disable the default feature of closing the dropdown when clicking outside of the Dropdown",
        },
        disableMobileModalMode: {
            control: {type: "boolean"},
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "false"},
            },
            description: "Controls whether to disable the default feature of showing the popover as a modal in mobile devices",
        },
        onOpen: {
            table: {
                type: {
                    summary: "function",
                },
                defaultValue: {summary: "undefined"},
            },
            description:
                "Triggers when the dropdown is opened. The dropdown controls itself to close and open, unless you explicitly pass open, onOpen and onClose",
        },
        onClose: {
            table: {
                type: {
                    summary: "function",
                },
                defaultValue: {summary: "undefined"},
            },
            description:
                "Triggers when the dropdown is closed. The dropdown controls itself to close and open, unless you explicitly pass open, onOpen and onClose",
        },
    },
    args: {
        anchor: <button>Open Popover</button>,
        applyShadow: true,
        content: <div style={{background: "blue", padding: "20px", borderRadius: "20px", width: "260px", height: "100px"}}>Popover</div>,
        openToTop: false,
        alignment: PopoverAlignments.RIGHT,
        disableCloseWhenClickOutside: false,
        disableMobileModalMode: false,
        "data-testid": "popover",
    },
} satisfies Meta<PopoverProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WebappDesktopMenu: Story = {
    args: {
        content: <div style={{background: "blue", padding: "20px", borderRadius: "20px", width: "260px", height: "100px"}}>Popover</div>,
        "data-testid": "webapp-desktop-menu",
    },
    decorators: [
        (Story) => {
            const [isOpen, setIsOpen] = useState(false);
            const {props} = Story();

            return (
                <PopoverStoryWrapper>
                    <Story
                        args={{
                            ...props,
                            onOpen: () => {
                                setIsOpen(true);
                            },
                            onClose: () => {
                                setIsOpen(false);
                            },
                            anchor: <PopoverStoryAnchor isOpen={isOpen} />,
                            content: <PopoverStoryContentElement />,
                        }}
                    />
                </PopoverStoryWrapper>
            );
        },
    ],
};
