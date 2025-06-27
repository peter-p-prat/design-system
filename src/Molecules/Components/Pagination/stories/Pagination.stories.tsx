import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {PaginationSize} from "@app/Atoms";
import {Pagination, PaginationProps} from "@app/Molecules";

const paginationMeta = {
    title: "Molecules/Pagination",
    component: Pagination,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        options: {
            description: "Object with configurations to be applied to paginator overriding the default ones",
        },
        "options.boundaryCount": {
            description: "Defines how many digits to display adjacent to the start and end page number",
            control: {type: "number"},
            table: {
                defaultValue: {summary: "1"},
            },
        },
        "options.siblingsCount": {
            description: "Defines how many digits to display either side of current page",
            control: {type: "number"},
            table: {
                defaultValue: {summary: "0"},
            },
        },
        "options.size": {
            description: "Defines the pagination buttons size",
            options: Object.values(PaginationSize),
            control: {type: "inline-radio"},
            table: {
                type: {
                    summary: Object.values(PaginationSize).join("|"),
                },
                defaultValue: {summary: PaginationSize.MEDIUM},
            },
        },
        pagesAmount: {
            description: "The amount of pages to be displayed. This number will be used to generate the pagination buttons",
        },
        currentPage: {
            description: "The current page number",
            table: {
                defaultValue: {summary: "1"},
            },
            control: false,
        },
        handleChange: {
            description: "The action to be executed when a page is clicked",
        },
    },
    args: {
        pagesAmount: 10,
        currentPage: 1,
        handleChange: () => {},
    },
} as Meta<PaginationProps>;

export default paginationMeta;
type PaginationStory = StoryObj<typeof paginationMeta>;

export const PaginationMobile: PaginationStory = {
    render: (args) => {
        const [page, setPage] = useState<number>(args.currentPage);
        return (
            <Pagination
                {...args}
                pagesAmount={args.pagesAmount}
                currentPage={page}
                handleChange={setPage}
                data-testid="pagination-mobile"
            />
        );
    },
};

export const PaginationTabletDesktop: PaginationStory = {
    render: (args) => {
        const [page, setPage] = useState<number>(args.currentPage);
        return (
            <Pagination
                pagesAmount={args.pagesAmount}
                currentPage={page}
                handleChange={setPage}
                options={{
                    boundaryCount: 2,
                    siblingsCount: 0,
                    size: PaginationSize.LARGE,
                }}
                data-testid="pagination-tablet-desktop"
            />
        );
    },
};
