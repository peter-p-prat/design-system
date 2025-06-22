import React, {ButtonHTMLAttributes, CSSProperties, MouseEventHandler, useMemo} from "react";

import {LoaderType} from "@app/Atoms";
import {Icon, IconName, LoaderIcon} from "@app/Foundations";
import {className, conditionalClass, styleByKey} from "@app/shared/helpers";

import {
    ButtonAppearances,
    ButtonAppearancesType,
    ButtonJustifyContent,
    ButtonJustifyContentType,
    ButtonShapes,
    ButtonShapesType,
    ButtonSizes,
    ButtonSizesType,
    ButtonVariants,
    ButtonVariantsType,
} from "../shared/type";

import styles from "./Button.module.scss";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    /**
     * @description The button size
     * @default ButtonSizes.SMALL
     */
    size?: ButtonSizesType;
    /**
     * @description The button variant
     * @default ButtonVariants.FILLED
     */
    variant?: ButtonVariantsType;
    /**
     * @description The button shape (varies the border radius)
     * @default ButtonShapes.ROUNDED
     */
    shape?: ButtonShapesType;
    /**
     * Disables the button
     */
    isDisabled?: boolean;
    /**
     * Disables the button & shows a loading spinner
     */
    isLoading?: boolean;
    /**
     * If passed, the text to be displayed in the button
     */
    label?: string;
    /**
     * If passed, the icon to be shown in the button before the label
     */
    leadingIcon?: IconName;
    /**
     * If passed, the icon to be shown in the button after the label
     */
    trailingIcon?: IconName;
    /**
     * @description The button appearance, between light, gray and default. Light only works for secondary and ghost variants, gray only for ghost variants
     * @default ButtonAppearances.DEFAULT
     */
    appearance?: ButtonAppearancesType;
    /**
     * Custom class name for the button
     */
    customClassName?: string;
    /**
     * The button data-testid. Required for testing purposes
     */
    "data-testid": string;
    /**
     * The button callback action
     */
    onClick?: MouseEventHandler<HTMLElement>;
    /**
     * The button justify content
     */
    justifyContent?: ButtonJustifyContentType;
}

export const Button = ({
    size = ButtonSizes.SMALL,
    variant = ButtonVariants.FILLED,
    shape = ButtonShapes.ROUNDED,
    label,
    leadingIcon,
    trailingIcon,
    isDisabled,
    isLoading,
    appearance,
    customClassName = "",
    "data-testid": dataTestId,
    onClick,
    justifyContent = ButtonJustifyContent.CENTER,
    ...rest
}: ButtonProps) => {
    const isGhost = useMemo(() => variant === ButtonVariants.GHOST || variant === ButtonVariants.GHOST_V2, [variant]);

    return (
        <button
            type="button"
            {...rest}
            className={className(
                styles.button,
                customClassName,
                styleByKey(styles, size),
                styleByKey(styles, variant),
                conditionalClass(
                    [styles.disabled, !!isDisabled],
                    [styles.loading, !!isLoading],
                    [styles.light, (variant === ButtonVariants.OUTLINED || isGhost) && appearance === ButtonAppearances.LIGHT],
                    [styles.gray, isGhost && appearance === ButtonAppearances.GRAY],
                    [styles.rounded, shape === ButtonShapes.ROUNDED],
                    [styles.square, shape === ButtonShapes.SQUARE],
                ),
            )}
            onClick={onClick}
            disabled={isDisabled || isLoading}
            data-testid={dataTestId}
            style={{"--justify-content": justifyContent} as CSSProperties}
        >
            {isLoading && (
                <div className={styles.spinner}>
                    <LoaderIcon type={LoaderType.LINE_SPINNER} color="currentColor" />
                </div>
            )}
            {leadingIcon && (
                <Icon name={leadingIcon} customClassName={styles.buttonIcon} size={size === ButtonSizes.DOUBLE_EXTRA_LARGE ? 24 : 20} />
            )}
            {label && <span className={styles.buttonLabel}>{label}</span>}
            {trailingIcon && (
                <Icon name={trailingIcon} customClassName={styles.buttonIcon} size={size === ButtonSizes.DOUBLE_EXTRA_LARGE ? 24 : 20} />
            )}
        </button>
    );
};

export * from "../shared/type";
