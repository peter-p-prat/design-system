import type {Meta, StoryObj} from "@storybook/react-vite";

import {shadowsMap} from "../shadowsMap";

import Shadows, {ShadowsProps} from "./Shadows";

const meta = {
    title: "Foundations/Shadows",
    component: Shadows,
} satisfies Meta<ShadowsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        shadowsMap,
    },
};
