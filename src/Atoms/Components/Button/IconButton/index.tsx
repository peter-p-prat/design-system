import React, {CSSProperties} from "react";

import {Icon, IconName} from "@app/Foundations";
import {className, conditionalClass} from "@app/shared";

import styles from "./IconButton.module.scss";

export interface IconButtonProps {
    icon: IconName;
    ariaLabel: string;
    color?: string;
    size?: string | number;
    isDisabled?: boolean;
    customClassName?: string;
    /**
     * The button data-testid. Required for testing purposes
     */
    "data-testid": string;
    onClick: () => void;
}

export const IconButton = ({
    icon,
    ariaLabel,
    color,
    size = 24,
    isDisabled,
    customClassName = "",
    onClick,
    "data-testid": dataTestId,
}: IconButtonProps) => {
    return (
        <button
            type="button"
            aria-label={ariaLabel}
            className={className(styles.iconButton, customClassName, conditionalClass([styles.disabled, !!isDisabled]))}
            style={
                {
                    "--color": color,
                } as CSSProperties
            }
            onClick={onClick}
            disabled={isDisabled}
            data-testid={dataTestId}
        >
            <Icon name={icon} customClassName={styles.icon} size={size} />
        </button>
    );
};
