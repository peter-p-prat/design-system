import React from "react";

import {className, conditionalClass, onKeyDownA11y} from "@app/shared";

import styles from "./Card.module.scss";

export interface CardProps {
    hasHoverShadow?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
    customClassName?: string;
    "data-testid": string;
}

export const Card = ({hasHoverShadow = true, onClick, children, "data-testid": dataTestId, customClassName = ""}: CardProps) => {
    return (
        <section
            onClick={onClick}
            onKeyDown={onKeyDownA11y(() => onClick?.(), {disableEnter: true, disableSpacebar: true})}
            role="button"
            tabIndex={0}
            className={className(
                styles.card,
                customClassName,
                conditionalClass([styles.hover, !!hasHoverShadow], [styles.clickable, !!onClick]),
            )}
            data-testid={dataTestId}
        >
            {children}
        </section>
    );
};
