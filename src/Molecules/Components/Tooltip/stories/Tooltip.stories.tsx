import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {IconsNames} from "@app/Foundations";
import {Tooltip, TooltipAppearance, TooltipPosition, TooltipProps} from "@app/Molecules";

const meta = {
    title: "Molecules/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        body: {
            table: {
                type: {
                    summary: "ReactElement",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Any content that the tooltip should display.",
        },
        appearance: {
            options: Object.values(TooltipAppearance),
            table: {
                type: {
                    summary: "TooltipAppearance",
                },
                defaultValue: {summary: "TooltipAppearance.LIGHT"},
            },
            description:
                "The theme of the tooltip. It can be LIGHT or DARK. If it is LIGHT, the tooltip will have a white background and a black text. If it is DARK, the tooltip will have the primary color as background and a white text.",
        },
        position: {
            options: Object.values(TooltipPosition),
            table: {
                type: {
                    summary: "TooltipPosition",
                },
                defaultValue: {summary: "TooltipPosition.TOP"},
            },
            description: "The position relative to the component it's highlighting.",
        },
        icon: {
            options: Object.values(IconsNames),
            control: {type: "select"},
            table: {
                type: {
                    summary: "IconsNames",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "An optional icon that will appear before the tooltip body.",
        },
        children: {
            table: {
                type: {
                    summary: "ReactElement",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The component that will trigger the tooltip when hovered and the one that is going to be highlighted.",
        },
    },
    args: {},
} satisfies Meta<React.PropsWithChildren<TooltipProps>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        body: <div style={{width: "100%"}}>This is a tooltip</div>,
        appearance: TooltipAppearance.LIGHT,
        icon: IconsNames.FACE_SMILE,
        position: TooltipPosition.TOP,
        children: <div>Hover me</div>,
    },
    decorators: [
        (Story) => {
            return <Story />;
        },
    ],
};
