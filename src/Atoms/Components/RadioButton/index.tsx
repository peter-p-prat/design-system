import React, {InputHTMLAttributes} from "react";

import {className, conditionalClass, styleByKey} from "@app/shared";

import styles from "./RadioButton.module.scss";

export enum RadioButtonAppearance {
    LIGHT = "light",
    DARK = "dark",
}

export enum RadioButtonSize {
    LARGE = "large",
    MEDIUM = "medium",
    SMALL = "small",
}

export enum RadioButtonTextOrientation {
    LEFT_TO_RIGHT = "lefToRight",
    RIGHT_TO_LEFT = "rightToLeft",
}

export interface RadioButtonProps extends Partial<Omit<InputHTMLAttributes<HTMLInputElement>, "size">> {
    /**
     * @description An unique identificator for each radio button
     */
    id: string;
    /**
     * @description The radio button name to group them together
     */
    name: string;
    /**
     * @description The label of the radio button. Could be a string or a node
     */
    label?: React.ReactNode;
    /**
     * @description Defines if the radio button is checked from the beginning
     */
    isChecked?: boolean;
    /**
     * @description The button size
     * @default RadioButtonSize.SMALL
     */
    size?: RadioButtonSize;
    /**
     * @description The radio button appearance, switch between light and dark
     * @default RadioButtonAppearance.LIGHT
     */
    appearance?: RadioButtonAppearance;
    /**
     * @description Defines if the radio buttons is disabled or not
     */
    disabled?: boolean;
    /**
     * @description The radio button text orientation, switch between leftToRight and rightToLeft
     * @default RadioButtonTextOrientation.LEFT_TO_RIGHT
     */
    textOrientation?: RadioButtonTextOrientation;
    /**
     * Custom class name for the button
     */
    customClassName?: string;
    /**
     * The radio button data-testid. Required for testing purposes
     */
    "data-testid": string;
    /**
     * @description The radio button callback action
     */
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const RadioButton = ({
    id,
    name,
    label,
    isChecked,
    disabled,
    onChange,
    size = RadioButtonSize.SMALL,
    appearance = RadioButtonAppearance.LIGHT,
    textOrientation = RadioButtonTextOrientation.LEFT_TO_RIGHT,
    "data-testid": dataTestId,
    customClassName,
    ...rest
}: RadioButtonProps) => {
    return (
        <label
            htmlFor={id}
            className={className(
                styles.radioButtonContent,
                styleByKey(styles, size),
                styleByKey(styles, appearance),
                styleByKey(styles, textOrientation),
                conditionalClass([styles.disabled, !!disabled], [styles.noGap, !label], [styles.checked, !!isChecked]),
                customClassName,
            )}
        >
            <input
                {...rest}
                type="radio"
                id={id}
                name={name}
                className={className(styles.radioButtonInput)}
                onChange={onChange}
                disabled={!!disabled}
                defaultChecked={!!isChecked}
                data-testid={dataTestId}
            />
            <span className={className(styles.radioButtonFake)} />
            <span className={className(styles.radioButtonLabel)} data-testid={`${dataTestId}-label`}>
                {label}
            </span>
        </label>
    );
};
