import React from "react";

import {className, conditionalClass} from "@app/shared";

import styles from "./CarouselDots.module.scss";

interface CarouselDotButtonProps {
    onClick: () => void;
    lightMode?: boolean;
    selected: boolean;
}

export const DotButton = ({onClick, lightMode, selected}: CarouselDotButtonProps) => {
    return (
        <button
            type="button"
            className={className(styles.carouselDot, conditionalClass([styles.selected, !!selected], [styles.lightMode, !!lightMode]))}
            onClick={onClick}
            aria-label="navigate"
        />
    );
};
