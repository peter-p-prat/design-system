import type {Meta, StoryObj} from "@storybook/react";

import {OnlyDemoCard, OnlyDemoCardProps} from "@app/Molecules";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Molecules/Card",
    component: OnlyDemoCard,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
} satisfies Meta<OnlyDemoCardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        title: "Demo card",
        img: {
            src: "https://thebyteland.com/images/storybook.webp",
            alt: "alt text",
        },
    },
};
