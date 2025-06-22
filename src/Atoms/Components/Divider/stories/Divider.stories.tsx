import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {Divider, DividerOrientation, DividerProps, DividerType} from "@app/Atoms";
import {spacingsMap} from "@app/Foundations";

import {DividerWrapper} from "./DividerWrapper";

const {gaps} = spacingsMap;

const meta = {
    title: "Atoms/Divider",
    component: Divider,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        type: {
            options: Object.values(DividerType),
            control: {type: "select"},
        },
        orientation: {
            options: Object.values(DividerOrientation),
            control: {type: "select"},
        },
        gap: {
            options: gaps?.map((g) => g.name),
            control: {type: "select"},
        },
        width: {
            control: "number",
            table: {
                type: {
                    summary: "number",
                },
                defaultValue: {summary: "1"},
            },
            description: "The divider height.",
        },
        containerWidth: {
            control: "text",
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {summary: "100%"},
            },
            description:
                "The width / height of the Divider container (depending if horizontal or vertical). Can be defined as a number (representing pixels) or a string, in which case it will be used as is",
        },
    },
} satisfies Meta<DividerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalDivider: Story = {
    args: {
        type: DividerType.SOLID,
        orientation: DividerOrientation.HORIZONTAL,
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
            <DividerWrapper orientation={DividerOrientation.HORIZONTAL}>
                <p>Text 1</p>
                <Story />
                <p>Text 2</p>
            </DividerWrapper>
        ),
    ],
};

export const VerticalDivider: Story = {
    args: {
        type: DividerType.DASHED,
        orientation: DividerOrientation.VERTICAL,
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
            <DividerWrapper orientation={DividerOrientation.VERTICAL}>
                <p>Text 1</p>
                <Story />
                <p>Text 2</p>
            </DividerWrapper>
        ),
    ],
};
