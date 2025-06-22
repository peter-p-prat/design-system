import type {Meta, StoryObj} from "@storybook/react-vite";

import {spacingsMap} from "../spacingsMap";

import Spacings, {SpacingsProps} from "./Spacing";

const meta = {
    title: "Foundations/Spacing",
    component: Spacings,
} satisfies Meta<SpacingsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        spacingsMap,
    },
};
