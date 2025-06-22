import React from "react";

import {className} from "@app/shared/helpers";

import {ButtonSizes, ButtonSizesType, ButtonTypes, ButtonTypesType, ButtonVariants, ButtonVariantsType} from "./type";

import styles from "./Button.module.scss";

export interface ButtonProps {
    size?: ButtonSizesType;
    variant: ButtonVariantsType;
    isDisabled?: boolean;
    label: string;
    type?: ButtonTypesType;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    size = ButtonSizes.SMALL,
    variant = ButtonVariants.FILLED,
    label,
    isDisabled,
    type,
    onClick,
}) => {
    return (
        <button
            type="button"
            className={className(styles.button, styles[size], styles[variant], {
                [styles.disabled]: !!isDisabled,
                [styles.light]: variant === ButtonVariants.OUTLINED && type === ButtonTypes.LIGHT,
            })}
            onClick={onClick}
            disabled={isDisabled}
        >
            <span className={styles.buttonLabel}>{label}</span>
        </button>
    );
};

export * from "./type";
