import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {DividerV2, DividerV2Orientation, DividerV2Props, DividerV2Type} from "@app/Atoms";
import {spacingsMap} from "@app/Foundations";

import {DividerWrapper} from "./DividerV2Wrapper";

const {gaps} = spacingsMap;

const meta = {
    title: "Atoms/DividerV2",
    component: DividerV2,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        type: {
            options: Object.values(DividerV2Type),
            control: {type: "select"},
        },
        orientation: {
            options: Object.values(DividerV2Orientation),
            control: {type: "select"},
        },
        dividerLength: {
            control: "text",
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "100%"},
            },
            description:
                "The length of the divider. Can be defined as a number (representing pixels) or a string, in which case it will be used as it is",
        },
        color: {
            control: "text",
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "#ebeaeb"},
            },
            description:
                "The color of the divider. Should be a valid CSS color property value. If not provided, the default color will be used",
        },
        sidesGap: {
            options: gaps?.map((g) => g.name),
            control: {type: "select"},
            description:
                "The gap between the divider and the sides of the container. Should be a valid spacing value from the spacings utility",
        },
        limitsGap: {
            options: gaps?.map((g) => g.name),
            control: {type: "select"},
            description: "The padding to be applyed at the divider ends. Should be a valid spacing value from the spacings utility",
        },
        width: {
            control: "number",
            table: {
                type: {
                    summary: "number",
                },
                defaultValue: {summary: "1"},
            },
            description: "The divider line width.",
        },
    },
} satisfies Meta<DividerV2Props>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalDivider: Story = {
    args: {
        type: DividerV2Type.SOLID,
        orientation: DividerV2Orientation.HORIZONTAL,
    },
    argTypes: {
        orientation: {
            table: {
                disable: true,
            },
        },
    },
    decorators: [
        (Story) => (
            <DividerWrapper orientation={DividerV2Orientation.HORIZONTAL}>
                <p>Text 1</p>
                <Story />
                <p>Text 2</p>
            </DividerWrapper>
        ),
    ],
};

export const VerticalDivider: Story = {
    args: {
        type: DividerV2Type.DASHED,
        orientation: DividerV2Orientation.VERTICAL,
    },
    argTypes: {
        orientation: {
            table: {
                disable: true,
            },
        },
    },
    decorators: [
        (Story) => (
            <DividerWrapper orientation={DividerV2Orientation.VERTICAL}>
                <p>Text 1</p>
                <Story />
                <p>Text 2</p>
            </DividerWrapper>
        ),
    ],
};
