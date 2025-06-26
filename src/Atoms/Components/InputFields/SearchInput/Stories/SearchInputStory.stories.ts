import type {Meta, StoryObj} from "@storybook/react-vite";

import {InputStates} from "../../Input";

import {SearchInputStory, SearchInputStoryProps} from "./SearchInputStory";

const meta = {
    title: "Atoms/Input/SearchInput",
    component: SearchInputStory,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        title: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        debounceTime: 1_000,
    },
} satisfies Meta<SearchInputStoryProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Search input (clearable)",
    },
};

export const Loading: Story = {
    args: {
        title: "Loading",
        inputFeedback: {
            state: InputStates.LOADING,
        },
    },
};

export const WithHint: Story = {
    args: {
        title: "With a hint",
        inputFeedback: {
            message: "This is a input hint",
        },
    },
};

export const WithError: Story = {
    args: {
        title: "With error feedback",
        inputFeedback: {
            state: InputStates.ERROR,
            message: "This is a error message",
        },
    },
};

export const WithSuccess: Story = {
    args: {
        title: "With success feedback",
        inputFeedback: {
            state: InputStates.SUCCESS,
            message: "This is a success message",
        },
    },
};

export const WithLengthValidation: Story = {
    args: {
        title: "With value length validation (max 10 chars)",
        maxLength: 10,
    },
};

export const Disabled: Story = {
    args: {
        title: "Disabled",
        disabled: true,
    },
};
