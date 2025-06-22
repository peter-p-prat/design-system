import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {ButtonDesignVariants, InputButton, InputButtonProps, InputButtonVariants} from "@app/Atoms";
import {InputStory} from "@app/Atoms/Components/InputFields/Input/Stories/InputStory";

import InputButtonWrapper from "../Components/InputButtonWrapper";

const InputButtonDesignVariants = Object.values(ButtonDesignVariants).filter(
    (variant) => variant !== ButtonDesignVariants.LIGHT && variant !== ButtonDesignVariants.GHOST,
);

const meta = {
    title: "Atoms/Buttons/InputButton",
    component: InputButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        label: {
            control: {type: "text"},
            table: {
                defaultValue: {summary: "undefined"},
            },
            description: "The button text",
        },
        variant: {
            options: InputButtonDesignVariants,
            mapping: {
                primary: InputButtonVariants.FILLED,
                secondary: InputButtonVariants.OUTLINED,
            },
            control: {type: "select"},
            table: {
                type: {
                    summary: InputButtonDesignVariants.join("|"),
                },
                defaultValue: {summary: ButtonDesignVariants.PRIMARY},
            },
            description: "The button variant",
        },
        isDisabled: {
            control: {
                type: "boolean",
            },
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "false"},
            },
            description: "The button disabled state",
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
    },
    args: {
        "data-testid": "input-button",
    },
} satisfies Meta<InputButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const DEFAULT_ARG_TYPES = {
    variant: {
        table: {
            disable: true,
        },
    },
};

export const Demo: Story = {
    args: {
        variant: InputButtonVariants.FILLED,
        label: "Demo Button",
        onClick() {
            return null;
        },
    },
};

export const Primary: Story = {
    args: {
        variant: InputButtonVariants.FILLED,
        label: "Primary Button",
        onClick() {
            return null;
        },
    },
    argTypes: {...DEFAULT_ARG_TYPES},
};

export const Secondary: Story = {
    args: {
        variant: InputButtonVariants.OUTLINED,
        label: "Secondary Button",
        onClick() {
            return null;
        },
    },
    argTypes: {...DEFAULT_ARG_TYPES},
};

export const InputFieldWithButton: Story = {
    args: {
        variant: InputButtonVariants.OUTLINED,
        label: "Clear",
        onClick() {
            return null;
        },
    },
    decorators: [
        (Story) => {
            return (
                <InputButtonWrapper>
                    <InputStory placeholder="2,000.000" />
                    <Story />
                </InputButtonWrapper>
            );
        },
    ],
};
