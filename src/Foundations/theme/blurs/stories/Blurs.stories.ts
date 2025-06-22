import type {Meta, StoryObj} from "@storybook/react-vite";

import {blursMap} from "../blursMap";

import Blurs, {BlursProps} from "./Blurs";

const meta = {
    title: "Foundations/Blurs",
    component: Blurs,
} satisfies Meta<BlursProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        blursMap,
    },
};
