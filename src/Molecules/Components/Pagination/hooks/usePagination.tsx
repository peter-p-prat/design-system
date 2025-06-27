import React, {type JSX, useCallback, useMemo} from "react";

import {PaginationButton} from "@app/Atoms";
import {className} from "@app/shared";

import {isArrowItem, isNumberItem, SpecialItem, UsePaginationProps} from "./type";

import styles from "../Pagination.module.scss";

export default function usePagination({
    boundaryCount = 1,
    siblingsCount = 0,
    count,
    page,
    hideNextButton,
    hidePrevButton,
    onChange,
    size,
    "data-testid": dataTestId,
}: UsePaginationProps) {
    const generatePagesRange = useCallback((start: number, end: number) => {
        const length = end - start + 1;
        return Array.from({length}, (_, i) => start + i);
    }, []);

    const startPages = generatePagesRange(1, Math.min(boundaryCount, count));
    const endPages = generatePagesRange(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

    const siblingsStart = Math.max(
        Math.min(
            // Natural start
            page - siblingsCount,
            // Lower boundary when page is high
            count - boundaryCount - siblingsCount * 2 - 1,
        ),
        // Greater than startPages
        boundaryCount + 2,
    );

    const siblingsEnd = Math.min(
        Math.max(
            // Natural end
            page + siblingsCount,
            // Upper boundary when page is low
            boundaryCount + siblingsCount * 2 + 2,
        ),
        // Less than endPages
        endPages[0] ? endPages[0] - 2 : count - 1,
    );

    const shouldShowStartEllipsis = useMemo(() => siblingsStart > boundaryCount + 2, [siblingsStart, boundaryCount]);
    const shouldReplaceStartEllipsisWithNumber = useMemo(() => boundaryCount + 1 < count - boundaryCount, [boundaryCount, count]);
    const shouldShowEndEllipsis = useMemo(() => siblingsEnd < count - boundaryCount - 1, [siblingsEnd, boundaryCount, count]);
    const shouldReplaceEndEllipsisWithNumber = useMemo(() => count - boundaryCount > boundaryCount, [boundaryCount, count]);

    // Basic list of items to render
    const itemList: (number | SpecialItem)[] = useMemo(
        () => [
            SpecialItem.PREV_BUTTON,
            ...startPages,
            ...(shouldShowStartEllipsis ? [SpecialItem.START_ELLIPSIS] : []),
            ...(!shouldShowStartEllipsis && shouldReplaceStartEllipsisWithNumber ? [boundaryCount + 1] : []),
            ...generatePagesRange(siblingsStart, siblingsEnd),
            ...(shouldShowEndEllipsis ? [SpecialItem.END_ELLIPSIS] : []),
            ...(!shouldShowEndEllipsis && shouldReplaceEndEllipsisWithNumber ? [count - boundaryCount] : []),
            ...endPages,
            SpecialItem.NEXT_BUTTON,
        ],
        [
            boundaryCount,
            count,
            startPages,
            shouldShowStartEllipsis,
            shouldReplaceStartEllipsisWithNumber,
            generatePagesRange,
            siblingsStart,
            siblingsEnd,
            shouldShowEndEllipsis,
            shouldReplaceEndEllipsisWithNumber,
            endPages,
        ],
    );

    // Map the arrow button type to its page number
    const arrowButtonPage: Record<string, number> = {
        [SpecialItem.PREV_BUTTON]: page - 1,
        [SpecialItem.NEXT_BUTTON]: page + 1,
    };

    const generateItemElement = (item: number | SpecialItem, index: number): JSX.Element => {
        if (isNumberItem(item)) {
            return (
                <PaginationButton
                    key={item}
                    size={size}
                    isSelected={item === page}
                    number={item}
                    onClick={() => {
                        onChange(item);
                    }}
                    data-testid={`${dataTestId}-pagination-button-${index.toString()}`}
                />
            );
        }

        if (isArrowItem(item)) {
            return (
                <PaginationButton
                    key={item}
                    size={size}
                    hidden={(item === SpecialItem.PREV_BUTTON && hidePrevButton) || (item === SpecialItem.NEXT_BUTTON && hideNextButton)}
                    prevArrow={item === SpecialItem.PREV_BUTTON}
                    nextArrow={item === SpecialItem.NEXT_BUTTON}
                    onClick={() => {
                        onChange(arrowButtonPage[item] ?? 0);
                    }}
                    data-testid={`${dataTestId}-pagination-button-${index.toString()}`}
                />
            );
        }

        return (
            <span key={item} className={className(styles.ellipsis, styles[size])}>
                ...
            </span>
        );
    };

    // Convert the basic item list to Pagination JSX elements
    const paginationItems: JSX.Element[] = itemList.map((item, index) => {
        return generateItemElement(item, index);
    });

    return {
        items: paginationItems,
    };
}
