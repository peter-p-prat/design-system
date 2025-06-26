import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {Switch, SwitchProps, SwitchSizes, SwitchVariants} from "@app/Atoms";

import {SwitchBackgroundWrapper} from "./SwitchBackgroundWrapper";

const meta = {
    title: "Atoms/Switch",
    component: Switch,
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
            description: "Sets the label for the switch (optional)",
        },
        isChecked: {
            control: {type: "boolean"},
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "false"},
            },
            description: "Defines if the switch is checked from the beginning",
        },
        isDisabled: {
            control: {type: "boolean"},
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "false"},
            },
            description: "Defines the switch disabled state",
        },
        size: {
            options: Object.values(SwitchSizes),
            control: {type: "select"},
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: SwitchSizes.MEDIUM},
            },
            description: "Defines the switch size (SMALL | MEDIUM)",
        },
        variant: {
            options: Object.values(SwitchVariants),
            control: {type: "select"},
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: SwitchVariants.LIGHT},
            },
            description: "Set the switch color mode (DARK | LIGHT)",
        },
        onChange: {
            table: {
                type: {
                    summary: "function",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The switch onChange callback function",
        },
    },
    args: {
        "data-testid": "switch",
    },
} satisfies Meta<SwitchProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgTypes = {
    variant: {
        table: {
            disable: true,
        },
    },
};

const withBackgroundWrapper = (Story: any) => {
    const {
        props: {variant},
    } = Story();

    return (
        <SwitchBackgroundWrapper isVisible={variant === SwitchVariants.DARK}>
            <Story />
        </SwitchBackgroundWrapper>
    );
};

export const Demo: Story = {
    args: {
        label: "Switch",
        variant: SwitchVariants.LIGHT,
    },
    decorators: [withBackgroundWrapper],
};

export const Light: Story = {
    argTypes: {...defaultArgTypes},
    args: {
        label: "Switch",
        variant: SwitchVariants.LIGHT,
    },
    decorators: [withBackgroundWrapper],
};

export const Dark: Story = {
    argTypes: {...defaultArgTypes},
    args: {
        label: "Switch",
        variant: SwitchVariants.DARK,
    },
    decorators: [withBackgroundWrapper],
};
