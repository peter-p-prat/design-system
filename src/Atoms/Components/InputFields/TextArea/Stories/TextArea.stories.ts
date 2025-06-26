import type {Meta, StoryObj} from "@storybook/react-vite";

import {TextAreaResize, TextAreaSizes, TextAreaStates} from "@app/Atoms";

import {TextAreaStory, TextAreaStoryProps} from "./TextAreaStory";

const meta = {
    title: "Atoms/Input/TextArea",
    component: TextAreaStory,
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
            description: "The textarea label",
        },
        placeholder: {
            control: {type: "text"},
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The textarea placeholder",
        },
        rows: {
            control: {type: "number"},
            table: {
                type: {
                    summary: "number",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The amount of text rows",
        },
        size: {
            options: Object.values(TextAreaSizes),
            control: {type: "inline-radio"},
            table: {
                defaultValue: {summary: TextAreaSizes.SMALL},
            },
            description: "Defines the textarea font size & minimum height",
        },
        resize: {
            options: Object.values(TextAreaResize),
            control: {type: "inline-radio"},
            table: {
                defaultValue: {summary: TextAreaResize.NONE},
            },
            description: "The textarea resize css property",
        },
        feedback: {
            table: {
                disable: true,
            },
        },
        "feedback.state": {
            options: Object.values(TextAreaStates),
            control: {type: "select"},
            table: {
                type: {
                    summary: "TextAreaStates",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The textarea feedback state",
        },
        "feedback.message": {
            control: "text",
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The textarea feedback message (optional)",
        },
    },
    args: {
        placeholder: "TextArea field",
        size: TextAreaSizes.MEDIUM,
        rows: 4,
    },
} as Meta<TextAreaStoryProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
        placeholder: "TextArea text",
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const WithHint: Story = {
    args: {
        feedback: {
            message: "This is a textarea hint",
        },
    },
};

export const WithError: Story = {
    args: {
        feedback: {
            state: TextAreaStates.ERROR,
            message: "This is a error message",
        },
    },
};

export const WithSuccess: Story = {
    args: {
        feedback: {
            state: TextAreaStates.SUCCESS,
            message: "This is a success message",
        },
    },
};
