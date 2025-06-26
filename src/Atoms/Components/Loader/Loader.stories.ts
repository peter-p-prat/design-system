import type {Meta, StoryObj} from "@storybook/react-vite";

import {Loader, LoaderProps, LoaderSizes, LoaderType} from "@app/Atoms";

const meta = {
    title: "Atoms/Loader",
    component: Loader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            options: Object.values(LoaderSizes),
            control: {type: "select"},
        },
        type: {
            options: Object.values(LoaderType),
            control: {type: "select"},
        },
        isLoading: {
            options: [true, false],
            control: {type: "inline-radio"},
        },
    },
} satisfies Meta<LoaderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: LoaderSizes.MEDIUM,
        type: LoaderType.LINE_SPINNER,
        isLoading: true,
        label: "Loading...",
    },
};

export const LineSimple: Story = {
    args: {
        size: LoaderSizes.MEDIUM,
        type: LoaderType.LINE_SIMPLE,
        isLoading: true,
        label: "Loading...",
    },
    argTypes: {
        type: {
            table: {
                disable: true,
            },
        },
    },
};

export const LineSpinner: Story = {
    args: {
        size: LoaderSizes.MEDIUM,
        type: LoaderType.LINE_SPINNER,
        isLoading: true,
        label: "Loading...",
    },
    argTypes: {
        type: {
            table: {
                disable: true,
            },
        },
        backgroundColor: {
            table: {
                disable: true,
            },
        },
    },
};

export const DotCircle: Story = {
    args: {
        size: LoaderSizes.MEDIUM,
        type: LoaderType.DOT_CIRCLE,
        isLoading: true,
        label: "Loading...",
    },
    argTypes: {
        type: {
            table: {
                disable: true,
            },
        },
        backgroundColor: {
            table: {
                disable: true,
            },
        },
    },
};
