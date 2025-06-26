import React, {TextareaHTMLAttributes} from "react";

import {className, conditionalClass, styleByKey} from "@app/shared";

import styles from "./TextArea.module.scss";

export enum TextAreaSizes {
    SMALL = "small",
    MEDIUM = "medium",
}

export enum TextAreaResize {
    NONE = "none",
    BOTH = "both",
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
    INITIAL = "initial",
    INHERIT = "inherit",
}

export enum TextAreaStates {
    ERROR = "error",
    SUCCESS = "success",
}

export interface TextAreaFeedback {
    state?: TextAreaStates;
    message?: string | null;
}

export interface TextAreaProps extends Partial<Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">> {
    value: string;
    handleChange: (value: string) => void;
    placeholder: string;
    label?: string;
    size?: TextAreaSizes;
    resize?: TextAreaResize;
    disabled?: boolean;
    feedback?: TextAreaFeedback | null;
    /**
     * The text area data-testid. Required for testing purposes
     */
    "data-testid": string;
}

export const TextArea = ({
    value,
    handleChange,
    placeholder,
    label,
    size = TextAreaSizes.SMALL,
    resize = TextAreaResize.NONE,
    disabled,
    feedback,
    "data-testid": dataTestId,
    ...rest
}: TextAreaProps) => {
    return (
        <div className={styles.fieldWrapper}>
            {label && (
                <span className={styles.label} data-testid={`${dataTestId}-label`}>
                    {label}
                </span>
            )}

            <textarea
                {...rest}
                className={className(
                    styles.textarea,
                    styleByKey(styles, size),
                    conditionalClass(
                        [styles.error, feedback?.state === TextAreaStates.ERROR],
                        [styles.success, feedback?.state === TextAreaStates.SUCCESS],
                    ),
                )}
                disabled={disabled}
                value={value}
                onChange={(e) => {
                    handleChange(e.target.value);
                }}
                placeholder={placeholder}
                style={{resize}}
                data-testid={dataTestId}
            />
            {feedback?.message && (
                <span
                    className={className(styles.feedbackMessage, styleByKey(styles, feedback.state))}
                    data-testid={`${dataTestId}-feedback-message`}
                >
                    {feedback?.message}
                </span>
            )}
        </div>
    );
};
