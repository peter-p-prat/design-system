import React, {useMemo} from "react";

import {Icon, IconsNames} from "@app/Foundations";
import {className, conditionalClass} from "@app/shared";

import styles from "./PaginationButton.module.scss";

export enum PaginationSize {
    LARGE = "large",
    MEDIUM = "medium",
}

const paginationIconSizes: Record<PaginationSize, number> = {
    [PaginationSize.LARGE]: 20,
    [PaginationSize.MEDIUM]: 16,
};

export interface PaginationButtonProps {
    isSelected?: boolean;
    prevArrow?: boolean;
    nextArrow?: boolean;
    number?: number;
    hidden?: boolean;
    size: PaginationSize;
    /**
     * The pagination button data-testid. Required for testing purposes
     */
    "data-testid": string;
    onClick: () => void;
}

export const PaginationButton = ({
    isSelected,
    prevArrow,
    nextArrow,
    number,
    hidden,
    size,
    onClick,
    "data-testid": dataTestId,
}: PaginationButtonProps) => {
    const arrowIcon = useMemo(() => {
        if (!prevArrow && !nextArrow) return null;

        return <Icon name={prevArrow ? IconsNames.CHEVRON_LEFT : IconsNames.CHEVRON_RIGHT} size={paginationIconSizes[size]} />;
    }, [prevArrow, nextArrow, size]);

    return (
        <button
            type="button"
            className={className(
                styles.paginationButton,
                styles[size],
                conditionalClass([styles.selected, !!isSelected], [styles.hidden, !!hidden], [styles.arrow, !!prevArrow || !!nextArrow]),
            )}
            disabled={hidden}
            onClick={() => {
                if (hidden || isSelected) return;
                onClick();
            }}
            data-testid={dataTestId}
        >
            {number ? <span>{number}</span> : arrowIcon}
        </button>
    );
};
