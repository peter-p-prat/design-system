import React from "react";

import {PaginationButton, PaginationSize} from "@app/Atoms";
import {className} from "@app/shared";

import styles from "./CarouselArrowButtons.module.scss";

interface CarouselButtonProps {
    disabled?: boolean;
    onClick: () => void;
}

export const PrevButton = ({disabled, onClick}: CarouselButtonProps) => {
    if (disabled) return null;

    return (
        <div className={className(styles.carouselButton, styles.carouselButtonPrev)}>
            <PaginationButton size={PaginationSize.LARGE} prevArrow onClick={onClick} data-testid="prev-button" />
        </div>
    );
};

export const NextButton = ({disabled, onClick}: CarouselButtonProps) => {
    if (disabled) return null;

    return (
        <div className={className(styles.carouselButton, styles.carouselButtonNext)}>
            <PaginationButton size={PaginationSize.LARGE} nextArrow onClick={onClick} data-testid="next-button" />
        </div>
    );
};
