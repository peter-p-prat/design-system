import type {Meta, StoryObj} from "@storybook/react-vite";

import {IconProps, icons, IconsNames} from "@app/Foundations";

import IconSearch from "./IconSearch/IconSearch";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Foundations/Icon",
    component: IconSearch,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        name: {
            options: Object.keys(icons),
            control: {type: "select"},
            table: {
                type: {
                    summary: "IconsNames",
                },
            },
            description: "The icon to be shown",
        },
        title: {
            control: "text",
            description: "Specifies extra information about the icon. Shown as a tooltip text when the mouse moves over it",
            table: {
                defaultValue: {summary: "undefined"},
            },
        },
        size: {
            control: "number",
            description: "The icon height in pixels",
            table: {
                type: {summary: "number"},
                defaultValue: {summary: "16px"},
            },
        },
        useInlineColors: {
            control: "boolean",
            table: {
                defaultValue: {summary: "false"},
            },
        },
        strokeColor: {
            control: "color",
            description: "For this color to be applied, the useInlineColors prop must be true",
            table: {
                defaultValue: {summary: "black"},
            },
        },
        fillColor: {
            control: "color",
            description: "For this color to be applied, the useInlineColors prop must be true",
            table: {
                defaultValue: {summary: "undefined"},
            },
        },
        customClassName: {
            control: "text",
            table: {
                defaultValue: {summary: "undefined"},
            },
        },
    },
} satisfies Meta<IconProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
    args: {
        title: "Basic",
        name: IconsNames.USER_03,
    },
};

export const WithInlineColor: Story = {
    args: {
        title: "With inline color",
        name: IconsNames.USER_03,
        useInlineColors: true,
        strokeColor: "#1EA7FD",
    },
};

export const WithCustomSize: Story = {
    args: {
        title: "With custom size",
        name: IconsNames.USER_03,
        size: 30,
    },
};
