import type {Meta, StoryObj} from "@storybook/react-vite";

import {colorsPalette} from "../colorsPalette";

import Colors, {ColorsProps} from "./Colors";

const meta = {
    title: "Foundations/Colors",
    component: Colors,
} satisfies Meta<ColorsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Palette: Story = {
    args: {
        colorsPalette,
    },
};
