import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {icons} from "@app/Foundations";
import {Collapse, CollapseProps, CollapseSkeletonSizes} from "@app/Molecules";

import {CollapseWrapper} from "./CollapseWrapper";

const meta = {
    title: "Molecules/Collapse",
    component: Collapse,
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
        size: {
            options: Object.values(CollapseSkeletonSizes),
            control: {type: "select"},
            table: {
                defaultValue: {summary: "undefined"},
            },
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
        iconColor: {
            control: "color",
            table: {
                defaultValue: {summary: "undefined"},
            },
            description: "The color of the icon shown at the right of the title",
        },
        enableLineSeparator: {
            control: {type: "boolean"},
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {summary: "undefined"},
            },
            description: "Used to show a line between the Collapse and the content when opened",
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
            description: "A callback that's called when the collapse is toggled",
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
        "data-testid": "collapse",
    },
} satisfies Meta<React.PropsWithChildren<CollapseProps>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Collapse",
        children: (
            <div>
                <p>The collapse component is used to show / hide the internal components when clicking on a title</p>
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

export const WithControlledOpen: Story = {
    args: {
        title: "Controlled Collapse",
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);

        const handleOpen = (newIsOpen: boolean) => {
            setIsOpen(newIsOpen);
        };

        return (
            <CollapseWrapper>
                <p>Collapse should be : {isOpen ? "Opened" : "Closed"}</p>
                <Collapse {...args} isOpen={isOpen} onCollapse={handleOpen}>
                    <p>Here we are using and internal variable to control whether the Collapse is open or not</p>
                </Collapse>
            </CollapseWrapper>
        );
    },
};
