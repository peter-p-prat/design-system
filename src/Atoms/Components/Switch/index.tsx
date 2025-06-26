import React, {useEffect, useRef, useState} from "react";

import {className, conditionalClass} from "@app/shared";

import {SwitchProps, SwitchSizes, SwitchVariants} from "./type";

import styles from "./Switch.module.scss";

export const Switch = ({
    label,
    isChecked,
    isDisabled,
    onChange,
    ariaLabel,
    size = SwitchSizes.MEDIUM,
    variant = SwitchVariants.LIGHT,
    "data-testid": dataTestId,
    ...rest
}: SwitchProps) => {
    const [isCheckedInternalState, setIsCheckedInternalState] = useState<boolean>(!!isChecked);
    const checkboxRef = useRef<HTMLInputElement | null>(null);

    const handleOnChange = () => {
        if (onChange) onChange();
        setIsCheckedInternalState(!!checkboxRef.current?.checked);
    };

    useEffect(() => {
        setIsCheckedInternalState(!!isChecked);
    }, [isChecked]);

    return (
        <label
            className={className(
                styles.switch,
                styles[size],
                styles[variant],
                conditionalClass([styles.disabled, !!isDisabled], [styles.on, isCheckedInternalState]),
            )}
            aria-disabled={isDisabled}
        >
            <input
                type="checkbox"
                checked={isCheckedInternalState}
                disabled={isDisabled}
                ref={checkboxRef}
                onChange={handleOnChange}
                aria-label={ariaLabel ?? "Toggle switch"}
                role="switch"
                aria-checked={isCheckedInternalState}
                {...rest}
                data-testid={dataTestId}
            />
            <div className={styles.switchToggle}></div>
            {label && (
                <span className={styles.switchLabel} data-testid={`${dataTestId}-label`}>
                    {label}
                </span>
            )}
        </label>
    );
};

export * from "./type";
