import type {Meta, StoryObj} from "@storybook/react-vite";

import {InputSizes, InputStates} from "@app/Atoms";

import {InputStory, InputStoryProps} from "./InputStory";

const meta = {
    title: "Atoms/Input/Default",
    component: InputStory,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        placeholder: {
            control: {type: "text"},
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The input",
        },
        size: {
            options: Object.values(InputSizes),
            control: {type: "inline-radio"},
        },
        leadingIcon: {
            options: ["icon", "button"],
            control: {type: "inline-radio"},
        },
        trailingIcon: {
            options: ["icon", "button"],
            control: {type: "inline-radio"},
        },
        inputFeedback: {
            table: {
                disable: true,
            },
        },
        prefixLabel: {
            table: {
                disable: true,
            },
        },
        "inputFeedback.state": {
            options: Object.values(InputStates),
            control: {type: "select"},
            table: {
                type: {
                    summary: "InputStates",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The input feedback state",
        },
        "inputFeedback.message": {
            control: "text",
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The input feedback message (optional)",
        },
    },
    args: {
        placeholder: "Input field",
        size: InputSizes.MEDIUM,
    },
} as Meta<InputStoryProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
        placeholder: "Input text",
    },
};
export const WithLeadingIcon: Story = {
    args: {
        leadingIcon: "icon",
    },
};
export const WithTrailingIcon: Story = {
    args: {
        trailingIcon: "icon",
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const Clearable: Story = {
    args: {
        clearable: true,
    },
};

export const Password: Story = {
    args: {
        isPassword: true,
    },
};

export const Loading: Story = {
    args: {
        inputFeedback: {
            state: InputStates.LOADING,
        },
    },
};

export const WithMask: Story = {
    args: {
        withMask: true,
        placeholder: "DD/MM/YYYY",
    },
};

export const WithHint: Story = {
    args: {
        inputFeedback: {
            message: "This is a input hint",
        },
    },
};

export const WithError: Story = {
    args: {
        inputFeedback: {
            state: InputStates.ERROR,
            message: "This is a error message",
        },
    },
};

export const WithSuccess: Story = {
    args: {
        inputFeedback: {
            state: InputStates.SUCCESS,
            message: "This is a success message",
        },
    },
};

export const WithPrefixLabel: Story = {
    argTypes: {
        leadingIcon: {
            table: {
                disable: true,
            },
        },
        trailingIcon: {
            table: {
                disable: true,
            },
        },
        isPassword: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        prefixLabel: "USD",
        placeholder: "0.00",
    },
};
