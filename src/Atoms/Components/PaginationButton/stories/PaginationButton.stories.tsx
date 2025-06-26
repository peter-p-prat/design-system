import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {PaginationButton, PaginationButtonProps, PaginationSize} from "@app/Atoms";

import {PaginationButtonStoryWrapper} from "./PaginationButtonStoryWrapper";

const meta = {
    title: "Atoms/PaginationButton",
    component: PaginationButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        onClick: () => {},
        size: PaginationSize.MEDIUM,
    },
    argTypes: {
        number: {
            control: {type: "text"},
            table: {
                defaultValue: {summary: "undefined"},
            },
            description: "The page number",
        },
        isSelected: {
            control: {
                type: "boolean",
            },
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "false"},
            },
            description: "Current page status",
        },
        prevArrow: {
            control: {
                type: "boolean",
            },
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "false"},
            },
            description: "Defines if prev arrow should be shown",
        },
        nextArrow: {
            control: {
                type: "boolean",
            },
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "false"},
            },
            description: "Defines if next arrow should be shown",
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
        size: {
            options: Object.values(PaginationSize),
            control: {type: "inline-radio"},
            table: {
                type: {
                    summary: Object.values(PaginationSize).join("|"),
                },
                defaultValue: {summary: PaginationSize.MEDIUM},
            },
        },
    },
    decorators: [
        (Story) => (
            <PaginationButtonStoryWrapper>
                <Story />
            </PaginationButtonStoryWrapper>
        ),
    ],
} as Meta<PaginationButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Prev: Story = {
    argTypes: {
        isSelected: {
            table: {
                disable: true,
            },
        },
        nextArrow: {
            table: {
                disable: true,
            },
        },
        number: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        prevArrow: true,
    },
};

export const Next: Story = {
    argTypes: {
        isSelected: {
            table: {
                disable: true,
            },
        },
        prevArrow: {
            table: {
                disable: true,
            },
        },
        number: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        nextArrow: true,
    },
};

export const Number: Story = {
    argTypes: {
        prevArrow: {
            table: {
                disable: true,
            },
        },
        nextArrow: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        number: 1,
    },
};
