import type {Meta, StoryObj} from "@storybook/react-vite";

import {typographyMap} from "../typographyMap";

import Typography, {TypographyProps} from "./Typography";

const meta = {
    title: "Foundations/Typography",
    component: Typography,
} satisfies Meta<TypographyProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
    args: {
        typographyMap,
    },
};
