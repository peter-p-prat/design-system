import React, {ChangeEvent, CSSProperties, InputHTMLAttributes, useMemo, useState} from "react";

import {Icon, IconsNames} from "@app/Foundations";
import {className, conditionalClass} from "@app/shared";

import styles from "./Checkbox.module.scss";

export enum CheckboxSizes {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

export enum CheckboxLabelPositions {
    LEADING = "leading",
    TRAILING = "trailing",
}

export enum CheckboxAppearances {
    LIGHT = "light",
    DEFAULT = "default",
}

export interface CheckboxProps extends Partial<Omit<InputHTMLAttributes<HTMLInputElement>, "size">> {
    /**
     * @description The checkbox size
     * @default CheckboxSizes.MEDIUM
     */
    size?: CheckboxSizes;
    /**
     * Custom class name to be applied to the checkbox container
     */
    customClassName?: string;
    /**
     * If passed, the text or jsx element to be displayed as the input label
     */
    label?: string | React.JSX.Element;
    /**
     * @description The label position, between leading and trailing
     * @default CheckboxLabelPositions.LEADING
     */
    labelPosition?: CheckboxLabelPositions;
    /**
     * @description The checkbox appearance, between light and default
     * @default CheckboxAppearances.DEFAULT
     */
    appearance?: CheckboxAppearances;
    /**
     * The checkbox data-testid. Required for testing purposes
     */
    "data-testid": string;
}

export const Checkbox = ({
    size = CheckboxSizes.MEDIUM,
    customClassName = "",
    checked,
    label,
    labelPosition = CheckboxLabelPositions.TRAILING,
    disabled,
    onChange,
    id,
    appearance = CheckboxAppearances.DEFAULT,
    "data-testid": dataTestId,
    ...rest
}: CheckboxProps) => {
    const [internalChecked, setInternalChecked] = useState(checked);
    const isChecked = useMemo(() => (checked === undefined ? !!internalChecked : !!checked), [checked, internalChecked]);
    const iconSizes = useMemo(
        () => ({
            [CheckboxSizes.SMALL]: 10,
            [CheckboxSizes.MEDIUM]: 12,
            [CheckboxSizes.LARGE]: 14,
        }),
        [],
    );
    const inputSizes = useMemo(
        () => ({
            [CheckboxSizes.SMALL]: 14,
            [CheckboxSizes.MEDIUM]: 16,
            [CheckboxSizes.LARGE]: 18,
        }),
        [],
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.stopPropagation();
        setInternalChecked(e.target.checked);
        if (onChange) onChange(e);
    };

    return (
        <label
            className={className(
                styles.checkbox,
                customClassName,
                conditionalClass([styles.leadingLabel, labelPosition === CheckboxLabelPositions.LEADING]),
            )}
            htmlFor={id}
            data-testid={dataTestId}
            aria-checked={isChecked}
        >
            <div
                className={className(
                    styles.check,
                    styles[appearance],
                    conditionalClass([styles.checked, isChecked], [styles.disabled, !!disabled]),
                )}
                style={{"--size": `${String(inputSizes[size])}px`} as CSSProperties}
            >
                {isChecked && <Icon name={IconsNames.CHECK} size={iconSizes[size]} />}
                <input {...rest} id={id} disabled={disabled} type="checkbox" checked={isChecked} onChange={handleChange} />
            </div>
            {label && <span className={className(styles.label, styles[appearance])}>{label}</span>}
        </label>
    );
};
