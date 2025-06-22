import React from "react";

import {className, conditionalClass} from "@app/shared";

import {InputButtonVariantsType} from "../shared/type";

import styles from "./InputButton.module.scss";

export interface InputButtonProps {
    label: string;
    variant: InputButtonVariantsType;
    isDisabled?: boolean;
    /**
     * The button data-testid. Required for testing purposes
     */
    "data-testid": string;
    onClick: () => void;
}

export const InputButton = ({label, isDisabled, variant, onClick, "data-testid": dataTestId}: InputButtonProps) => {
    return (
        <button
            type="button"
            className={className(styles.inputButton, styles[variant], conditionalClass([styles.disabled, !!isDisabled]))}
            onClick={onClick}
            disabled={isDisabled}
            data-testid={dataTestId}
        >
            <span className={styles.inputButtonLabel}>{label}</span>
        </button>
    );
};
