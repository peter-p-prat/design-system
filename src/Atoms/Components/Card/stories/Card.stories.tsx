import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {Card, CardProps} from "@app/Atoms";

import {CardBackgroundWrapper} from "./CardBackgroundWrapper";
import {CardStoryContent} from "./CardStoryContent";

const meta = {
    title: "Atoms/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        hasHoverShadow: {
            description: "Allows the card to have a hover shadow (it only applies to desktop view)",
        },
        onClick: {
            description: "Function to be called when the card is clicked",
        },
        children: {
            description: "Content to be displayed inside the card",
        },
        customClassName: {
            description: "Custom class name to be added to the card",
        },
        "data-testid": {
            description: "Test ID",
        },
    },
    args: {
        "data-testid": "card",
    },
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Redeem: Story = {
    args: {
        hasHoverShadow: true,
        children: <CardStoryContent />,
    },
    decorators: [
        (Story) => {
            return (
                <CardBackgroundWrapper>
                    <Story />
                </CardBackgroundWrapper>
            );
        },
    ],
};

export const Earn: Story = {
    args: {
        hasHoverShadow: true,
        children: <CardStoryContent />,
    },
    decorators: [
        (Story) => {
            return (
                <CardBackgroundWrapper>
                    <Story />
                </CardBackgroundWrapper>
            );
        },
    ],
};
