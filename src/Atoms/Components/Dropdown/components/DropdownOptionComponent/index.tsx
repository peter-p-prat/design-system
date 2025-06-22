import React, {UIEvent, useEffect, useMemo, useRef} from "react";

import {Checkbox} from "@app/Atoms";
import {className, conditionalClass, onKeyDownA11y} from "@app/shared/helpers";

import {DropdownOption, isMenuDropdownOption} from "../../type";
import {DropdownLabel} from "../DropdownLabel";
import {DropdownRadioButton} from "../DropdownRadioButton";

import styles from "./DropdownOptionComponent.module.scss";

interface Props {
    option: DropdownOption;
    optionNumber?: number;
    multiselect?: boolean;
    useRadioButtons?: boolean;
    onClick?: (option: DropdownOption, ...args: unknown[]) => unknown;
    isSelected?: (option: DropdownOption) => boolean;
    isDisabled?: boolean | ((option: DropdownOption) => boolean);
    isActive?: boolean;
    testId: string;
    isCallToActionButton?: boolean;
}

export const DropdownOptionComponent = ({
    option,
    optionNumber,
    multiselect,
    useRadioButtons,
    onClick,
    isDisabled: isDisabledValidator,
    isSelected,
    isActive,
    testId,
    isCallToActionButton,
}: Props) => {
    const dropdownOptionRef = useRef<HTMLDivElement | null>(null);
    const memoIsSelected = useMemo(() => !!isSelected?.(option), [isSelected, option]);
    const isDisabled = typeof isDisabledValidator === "boolean" ? isDisabledValidator : !!isDisabledValidator?.(option);

    const handleClick = (event: UIEvent, clickedOption: DropdownOption): void => {
        event.stopPropagation();
        if (isDisabled) return;
        if (isMenuDropdownOption(option)) option.onClick?.();
        onClick?.(clickedOption);
    };

    useEffect(() => {
        if (isActive) dropdownOptionRef.current?.focus();
    }, [dropdownOptionRef, isActive]);

    return (
        <div
            key={option.value}
            className={className(styles.dropdownOptionContainer, conditionalClass([styles.isCallToActionButton, !!isCallToActionButton]))}
            aria-selected={memoIsSelected}
            aria-disabled={isDisabled}
            onClick={(event) => {
                handleClick(event, option);
            }}
            onKeyDown={(event) => {
                onKeyDownA11y(() => {
                    handleClick(event, option);
                })(event);
            }}
            tabIndex={0}
            role="option"
            ref={dropdownOptionRef}
            data-testid={testId}
        >
            <div
                className={className(
                    styles.dropdownOption,
                    conditionalClass(
                        [styles.isCallToActionButton, !!isCallToActionButton],
                        [styles.disabled, isDisabled],
                        [styles.selected, memoIsSelected],
                        [styles.isActive, !!isActive],
                        [styles.useRadioButtons, !!useRadioButtons],
                    ),
                    `${styles.dropdownOption ?? ""}-${String(optionNumber)}`,
                )}
            >
                {multiselect && <Checkbox checked={memoIsSelected} disabled={isDisabled} data-testid={`${testId}-checkbox`} />}
                {!multiselect && useRadioButtons && <DropdownRadioButton isSelected={memoIsSelected} isDisabled={isDisabled} />}
                <DropdownLabel
                    icon={option?.icon}
                    label={option?.label}
                    customClassName={className(conditionalClass([styles.labelWithRadioButton, !!useRadioButtons]))}
                />
            </div>
        </div>
    );
};
