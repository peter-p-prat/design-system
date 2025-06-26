import React, {CSSProperties, HTMLInputTypeAttribute, InputHTMLAttributes, useCallback, useEffect, useMemo, useRef, useState} from "react";

import {IconName, IconsNames} from "@app/Foundations";
import {className, conditionalClass, mask, MaskPattern, styleByKey} from "@app/shared";

import {InputIcon} from "./Components/InputIcon";
import {isValidPrefixLabel} from "./type";

import styles from "./Input.module.scss";

export enum InputSizes {
    SMALL = "small",
    MEDIUM = "medium",
}

export enum InputStates {
    ERROR = "error",
    LOADING = "loading",
    SUCCESS = "success",
}

export interface InputFeedback {
    state?: InputStates;
    message?: string | null;
}

export enum InputIconPositions {
    LEADING = "leading",
    TRAILING = "trailing",
}

export interface InputIconConfig {
    iconName: IconName;
    iconColor?: string;
    altText?: string;
    action?: () => void;
    customClassName?: string;
    disabled?: boolean;
}

export interface BaseInputProps extends Partial<Omit<InputHTMLAttributes<HTMLInputElement>, "size">> {
    value: string;
    handleChange: (value: string) => void;
    placeholder: string;
    label?: string;
    trailingIcon?: InputIconConfig;
    size?: InputSizes;
    clearable?: boolean;
    disabled?: boolean;
    inputFeedback?: InputFeedback | null;
    isPassword?: boolean;
    /**
     * The mask pattern to be used for the input. If not provided, the input will not be masked.
     */
    maskPattern?: MaskPattern;
    /**
     * Regexp to validate the input value. If not provided, the input will not be validated.
     * If provided, the input will be validated when the user types and the value will be updated only if the regex is matched.
     */
    validatorRegex?: RegExp;
    /**
     * The input data-testid. Required for testing purposes
     */
    "data-testid": string;
}

export type InputProps =
    | (BaseInputProps & {leadingIcon?: InputIconConfig; prefixLabel?: never})
    | (BaseInputProps & {prefixLabel?: string; leadingIcon?: never; isPassword?: never});

const getInputType = (
    isPassword: boolean | undefined,
    showPassword: boolean,
    type: HTMLInputTypeAttribute | undefined,
): HTMLInputTypeAttribute | undefined => {
    if (!isPassword) return type;
    if (showPassword) return "text";
    return "password";
};

export const Input = ({
    value,
    handleChange,
    placeholder,
    label,
    leadingIcon,
    trailingIcon,
    size = InputSizes.SMALL,
    clearable,
    disabled,
    inputFeedback,
    isPassword,
    prefixLabel,
    maskPattern,
    validatorRegex,
    "data-testid": dataTestId,
    ...rest
}: InputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [prefixLabelWidth, setPrefixLabelWidth] = useState<string>("");
    const showClearButton = useMemo(() => clearable && !!value && !isPassword, [clearable, value, isPassword]);
    const prefixLabelTag = useRef<HTMLElement>(null);
    const prefixLabelCompliesLength = isValidPrefixLabel(prefixLabel ?? "");

    const feedBackTrailingElements = useMemo(
        () => ({
            error: (
                <InputIcon
                    size={size}
                    position={InputIconPositions.TRAILING}
                    iconName={IconsNames.ALERT_TRIANGLE}
                    title="error"
                    customClassName={styles.error}
                />
            ),
            loading: (
                <InputIcon
                    size={size}
                    position={InputIconPositions.TRAILING}
                    iconName={IconsNames.LOADING_02}
                    title="loading"
                    customClassName={styles.loading}
                />
            ),
            success: (
                <InputIcon
                    size={size}
                    position={InputIconPositions.TRAILING}
                    iconName={IconsNames.CHECK_CIRCLE}
                    title="success"
                    customClassName={styles.success}
                />
            ),
        }),
        [size],
    );

    const iconElement = useCallback(
        (position: InputIconPositions) => {
            const icon = position === InputIconPositions.LEADING ? leadingIcon : trailingIcon;

            if (prefixLabel || !icon) return null;

            const {iconName, action, altText, customClassName = "", disabled: disabledButton, iconColor} = icon;

            return (
                <InputIcon
                    size={size}
                    position={position}
                    iconName={iconName}
                    iconColor={iconColor}
                    title={altText}
                    customClassName={customClassName}
                    action={action}
                    disabled={disabledButton}
                />
            );
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [leadingIcon, trailingIcon, size],
    );

    const getLeadingElement = useCallback(() => {
        return iconElement(InputIconPositions.LEADING);
    }, [iconElement]);

    const getTrailingElement = useCallback(() => {
        if (isPassword) {
            return (
                <InputIcon
                    size={size}
                    position={InputIconPositions.TRAILING}
                    iconName={showPassword ? IconsNames.EYE_OFF : IconsNames.EYE}
                    title="password"
                    action={() => {
                        setShowPassword((show) => !show);
                    }}
                    disabled={disabled}
                />
            );
        }

        if (inputFeedback?.state) return feedBackTrailingElements[inputFeedback.state];

        if (showClearButton)
            return (
                <InputIcon
                    size={size}
                    position={InputIconPositions.TRAILING}
                    iconName={IconsNames.X}
                    title="clear"
                    action={() => {
                        handleChange("");
                    }}
                    disabled={disabled}
                />
            );

        return iconElement(InputIconPositions.TRAILING);
    }, [disabled, feedBackTrailingElements, iconElement, inputFeedback, handleChange, showClearButton, size, isPassword, showPassword]);

    const getLeadingPrefix = useCallback(() => {
        if (!prefixLabelCompliesLength || leadingIcon) return null;

        return (
            <span ref={prefixLabelTag} className={styles.prefixLabel}>
                {prefixLabel}
            </span>
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prefixLabel, prefixLabelTag]);

    const innerHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isDeleteChange = e.target.value?.length < value?.length;
        if (isDeleteChange) {
            handleChange(e.target.value);
            return;
        }

        const newValue = maskPattern ? mask(e.target.value, maskPattern) : e.target.value;

        if (!validatorRegex || validatorRegex.test(newValue)) {
            handleChange(newValue);
        }
    };
    useEffect(() => {
        if (prefixLabelCompliesLength && prefixLabelTag.current) {
            setPrefixLabelWidth(`${String(prefixLabelTag.current.offsetWidth)}px`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prefixLabel, prefixLabelTag]);

    return (
        <div className={className(styles.fieldWrapper, conditionalClass([styles.disabled, !!disabled]))}>
            {label && (
                <span className={className(styles.label)} data-testid={`${dataTestId}-label`}>
                    {label}
                </span>
            )}
            <div className={styles.inputWrapper}>
                {getLeadingElement()}
                {getLeadingPrefix()}
                <input
                    {...rest}
                    className={className(
                        styles.input,
                        styleByKey(styles, size),
                        conditionalClass(
                            [styles.error, inputFeedback?.state === InputStates.ERROR],
                            [styles.success, inputFeedback?.state === InputStates.SUCCESS],
                            [styles.withLeadingIcon, !!leadingIcon && !prefixLabel],
                            [styles.withTrailingIcon, !!trailingIcon || !!clearable || !!inputFeedback?.state || !prefixLabel],
                            [styles.withPrefixLabel, prefixLabelCompliesLength && !leadingIcon],
                        ),
                    )}
                    disabled={disabled}
                    onChange={innerHandleChange}
                    value={value}
                    placeholder={placeholder}
                    type={getInputType(isPassword, showPassword, rest.type)}
                    style={
                        {
                            "--leftExtraPadding": prefixLabelWidth,
                        } as CSSProperties
                    }
                    data-testid={dataTestId}
                />

                {!disabled && getTrailingElement()}
            </div>
            {inputFeedback?.message && (
                <span
                    className={className(styles.feedbackMessage, styleByKey(styles, inputFeedback.state))}
                    data-testid={`${dataTestId}-feedback-message`}
                >
                    {inputFeedback?.message}
                </span>
            )}
        </div>
    );
};
