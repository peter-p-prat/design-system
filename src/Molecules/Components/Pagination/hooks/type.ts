import {PaginationSize} from "@app/Atoms";

export enum SpecialItem {
    PREV_BUTTON = "prev-button",
    NEXT_BUTTON = "next-button",
    START_ELLIPSIS = "start-ellipsis",
    END_ELLIPSIS = "end-ellipsis",
}

export const isArrowItem = (item: number | SpecialItem): item is SpecialItem.NEXT_BUTTON | SpecialItem.PREV_BUTTON => {
    return item === SpecialItem.PREV_BUTTON || item === SpecialItem.NEXT_BUTTON;
};

export const isNumberItem = (item: number | SpecialItem): item is number => {
    return typeof item === "number";
};

export interface UsePaginationProps {
    boundaryCount?: number;
    siblingsCount?: number;
    count: number;
    page: number;
    hideNextButton: boolean;
    hidePrevButton: boolean;
    onChange: (page: number) => void;
    size: PaginationSize;
    /**
     * The pagination data-testid. Required for testing purposes
     */
    "data-testid": string;
}
