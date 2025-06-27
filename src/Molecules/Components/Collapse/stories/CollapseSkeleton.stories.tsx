import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {icons} from "@app/Foundations";
import {CollapseSkeleton, CollapseSkeletonProps} from "@app/Molecules";

import {CollapseWrapper} from "./CollapseWrapper";

const meta = {
    title: "Molecules/CollapseSkeleton",
    component: CollapseSkeleton,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        title: {
            table: {
                type: {
                    summary: "string | ReactElement",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The title to show for the collapse (as a button that toggles it)",
        },
        isOpen: {
            control: {type: "boolean"},
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Used to control the open state of the Collapse externally",
        },
        isDefaultOpen: {
            control: {type: "boolean"},
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Used to control if the Collapse starts opened by default",
        },
        icon: {
            options: Object.keys(icons),
            control: {type: "select"},
            table: {
                type: {
                    summary: "IconsNames",
                },
            },
            description: "The icon to show at the right of the title",
        },
        disableContentPadding: {
            control: {type: "boolean"},
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Used to disable the padding that the content of the Collapse has by default",
        },
        customClassName: {
            control: "text",
            description: "A custom class name to be added to the root element of the Collapse",
            table: {
                defaultValue: {summary: "undefined"},
            },
        },
        onCollapse: {
            table: {
                type: {
                    summary: "function",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "A callback to be called when the collapse is toggled",
        },
        children: {
            table: {
                type: {
                    summary: "ReactElement",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "The content to be rendered inside of the Collapse",
        },
    },
    args: {
        onCollapse: undefined,
        "data-testid": "collapse-skeleton",
    },
} satisfies Meta<React.PropsWithChildren<CollapseSkeletonProps>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Collapse Skeleton",
        children: (
            <div>
                <p>The collapse skeleton component is the same as the Collapse but without its background color and its rounded borders</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Facilisis quam vel in ultricies et quis neque.</p>
            </div>
        ),
    },
    decorators: [
        (Story) => {
            return (
                <CollapseWrapper>
                    <Story />
                </CollapseWrapper>
            );
        },
    ],
};
