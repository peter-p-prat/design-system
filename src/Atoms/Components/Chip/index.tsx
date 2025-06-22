import React from "react";

import {Icon, IconsNames} from "@app/Foundations";
import {className, conditionalClass, onKeyDownA11y, styleByKey} from "@app/shared";

import {ChipColors, ChipProps, ChipShapes, ChipSizes, ChipVariants} from "./type";

import styles from "./Chip.module.scss";

export const Chip = ({
    variant = ChipVariants.OUTLINED,
    shape = ChipShapes.SQUARED,
    color = ChipColors.PRIMARY,
    size = ChipSizes.SMALL,
    inactive,
    label,
    leadingIcon,
    leadingImg,
    customClassName = "",
    "data-testid": dataTestId,
    onClick,
    onClear,
}: ChipProps) => {
    const isOnlyIcon = !!leadingIcon && !leadingImg && !label;
    const isWithLeadingIcon = (!!leadingIcon || !!leadingImg) && !!label;

    return (
        <div
            data-testid={dataTestId}
            className={className(
                styles.chip,
                styleByKey(styles, variant),
                styleByKey(styles, color),
                styleByKey(styles, size),
                styleByKey(styles, shape),
                customClassName,
                conditionalClass(
                    [styles.clickable, !!onClick],
                    [styles.clearable, !!onClear],
                    [styles.withLeadingIcon, isWithLeadingIcon],
                    [styles.onlyIcon, isOnlyIcon],
                    [styles.inactive, !!inactive],
                ),
            )}
            onClick={onClick}
            onKeyDown={onKeyDownA11y(() => onClick?.())}
            tabIndex={0}
            role="button"
        >
            {leadingIcon && !leadingImg && <Icon name={leadingIcon} size={16} />}
            {leadingImg && !leadingIcon && (
                <img className={styles.leadingImg} src={leadingImg} alt={typeof label === "string" ? label : `chip-${variant}`} />
            )}
            {label && <span className={styles.label}>{label}</span>}
            {onClear && (
                <button
                    aria-label="X"
                    className={styles.iconButton}
                    type="button"
                    onClick={onClear}
                    data-testid={`${dataTestId}-clear-button`}
                >
                    <Icon name={IconsNames.X_CLOSE} size={16} title="clear" />
                </button>
            )}
        </div>
    );
};

export * from "./type";
