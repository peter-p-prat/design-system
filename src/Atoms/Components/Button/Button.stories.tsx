import type {Meta, StoryObj} from "@storybook/react";
import React from "react";

import {Button, ButtonProps, ButtonVariants, ButtonDesignVariants, ButtonSizes, ButtonTypes} from "@app/Atoms";

import {ButtonBackgroundWrapper} from "./ButtonBackgroundWrapper";

const meta = {
    title: "Atoms/Button",
    component: Button,
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
        size: {
            options: Object.values(ButtonSizes),
            control: {type: "inline-radio"},
            table: {
                defaultValue: {summary: ButtonSizes.MEDIUM},
            },
        },
        variant: {
            options: Object.values(ButtonDesignVariants),
            mapping: {
                primary: ButtonVariants.FILLED,
                secondary: ButtonVariants.OUTLINED,
            },
            control: {type: "select"},
            table: {
                defaultValue: {summary: ButtonDesignVariants.PRIMARY},
            },
        },
        type: {
            control: {type: "select"},
            options: Object.values(ButtonTypes),
            table: {
                defaultValue: {summary: undefined},
            },
            description: "The button type. Only for secondary variant",
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
    decorators: [
        (Story) => {
            const {
                props: {variant, type},
            } = Story();
            return (
                <ButtonBackgroundWrapper isActive={variant === ButtonVariants.OUTLINED && type === ButtonTypes.LIGHT}>
                    <Story />
                </ButtonBackgroundWrapper>
            );
        },
    ],
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const DEFAULT_ARG_TYPES = {
    type: {
        table: {
            disable: true,
        },
    },
    variant: {
        table: {
            disable: true,
        },
    },
};

export const Demo: Story = {
    args: {
        variant: ButtonVariants.FILLED,
        size: ButtonSizes.MEDIUM,
        label: "Demo Button",
    },
};

export const Primary: Story = {
    args: {
        variant: ButtonVariants.FILLED,
        size: ButtonSizes.MEDIUM,
        label: "Primary Button",
    },
    argTypes: {...DEFAULT_ARG_TYPES},
};

export const Secondary: Story = {
    args: {
        variant: ButtonVariants.OUTLINED,
        size: ButtonSizes.MEDIUM,
        label: "Secondary Button",
    },
    decorators: [
        (Story) => {
            const {props} = Story();
            return (
                <ButtonBackgroundWrapper isActive={props.type === ButtonTypes.LIGHT}>
                    <Story />
                </ButtonBackgroundWrapper>
            );
        },
    ],
    argTypes: {
        variant: {
            table: {
                disable: true,
            },
        },
    },
};

export const Light: Story = {
    args: {
        variant: ButtonVariants.LIGHT,
        size: ButtonSizes.MEDIUM,
        label: "Light Button",
    },
    argTypes: {...DEFAULT_ARG_TYPES},
};

export const Ghost: Story = {
    args: {
        variant: ButtonVariants.GHOST,
        size: ButtonSizes.MEDIUM,
        label: "Ghost Button",
    },
    argTypes: {...DEFAULT_ARG_TYPES},
};
