import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {InputStates, NumberInputProps} from "@app/Atoms";
import {NumberInputStory} from "@app/Atoms/Components/InputFields/NumberInput/stories/NumberInputStory";

const meta = {
    title: "Atoms/Input/NumberInput",
    component: NumberInputStory,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        value: {
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The value of the input.",
        },
        handleChange: {
            table: {
                type: {
                    summary: "function",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The function that will be called when the input value changes.",
        },
        disabled: {
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "If true, the input will be disabled.",
        },
        inputState: {
            options: Object.values(InputStates),
            control: {type: "select"},
            table: {
                type: {
                    summary: "InputStates",
                },
                defaultValue: {summary: "undefined"},
            },
        },
    },
    args: {},
} satisfies Meta<NumberInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [
        (Story) => {
            return <Story />;
        },
    ],
};

export const WithError: Story = {
    args: {
        inputState: InputStates.ERROR,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    decorators: [
        (Story) => {
            const {props} = Story();

            return <Story args={{...props, initValue: "8"}} />;
        },
    ],
};
