import type {Meta, StoryObj} from "@storybook/react-vite";

import FocusRingsDemo from "./FocusRings";

const meta = {
    title: "Foundations/FocusRings",
    component: FocusRingsDemo,
    tags: ["autodocs"],
} satisfies Meta<object>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FocusRings: Story = {
    args: {},
};
