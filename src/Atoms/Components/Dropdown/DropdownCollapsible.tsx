import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

import {IconsNames} from "@app/Foundations";
import {className, conditionalClass, onKeyDownA11y} from "@app/shared/helpers";
import {useOnClickOutside} from "@app/shared/hooks/useOnClickOutside";

import {DropdownCollapseOption, DropdownIconComponent, DropdownLabel, DropdownList} from "./components";
import {
    DropdownCollapsibleGroupValue,
    DropdownCollapsibleInternalOptionValue,
    DropdownCollapsibleOptionModes,
    DropdownCollapsibleProps,
    DropdownFormTriggerSizes,
    DropdownOption,
    isCustomTrigger,
} from "./type";

import styles from "./Dropdown.module.scss";

export const DropdownCollapsible = ({
    options,
    open,
    value,
    defaultOpen,
    defaultValue,
    formLabel,
    mobileTitle,
    trigger,
    light,
    disableCloseWhenClickOutside,
    onChange,
    onClose,
    onOpen,
    submitActionButton,
    cancelActionButton,
    callToActionButton,
    customListClassName,
    alignment,
    openToTop,
    desktopDropdownWidth,
    desktopDropdownMaxHeight,
    "data-testid": testId = "dropdown",
    dropdownListInfoTooltip,
    customClassName = "",
    ...rest
}: DropdownCollapsibleProps) => {
    const dropdownRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const defaultOpenedGroupId = Object.entries(options).find(([_id, option]) => option.defaultOpen)?.[0];
    const [internalOpen, setInternalOpen] = useState<boolean | undefined>(defaultOpen);
    const [internalValue, setInternalValue] = useState<DropdownCollapsibleProps["value"]>(value || defaultValue);
    const [selectedValue, setSelectedValue] = useState<DropdownCollapsibleProps["value"]>(value || defaultValue);
    const [openedGroup, setOpenedGroup] = useState<string | undefined>(defaultOpenedGroupId ?? Object.keys(options)[0]);

    const isOpenControlledByParent = useMemo(() => typeof open === "boolean" && !!onClose && !!onOpen, [open, onClose, onOpen]);

    const isOpened = useMemo(() => {
        if (isOpenControlledByParent) {
            return open;
        }
        return internalOpen;
    }, [internalOpen, open, isOpenControlledByParent]);

    const showTriggerBorder = !isCustomTrigger(trigger) && trigger.showBorder;

    const itsOnlyTriggerIcon = useMemo(() => {
        return !isCustomTrigger(trigger) && !trigger.label && !trigger.placeholder && !trigger.leadingIcon;
    }, [trigger]);

    const itsIconAndTrigger = useMemo(() => {
        return !isCustomTrigger(trigger) && !trigger.label && !trigger.placeholder && trigger.leadingIcon;
    }, [trigger]);

    const isTriggerIconAnimationDisabled = useMemo(() => {
        return !isCustomTrigger(trigger) && !!trigger.customTriggerIcon;
    }, [trigger]);

    const isLastGroup = (itemIndex: number) => itemIndex === Object.keys(options).length - 1;

    const syncInternalValueFromValue = useCallback(() => {
        setInternalValue(selectedValue);
    }, [selectedValue]);

    const onToggleDropdown = (setIsOpen?: boolean): void => {
        syncInternalValueFromValue();

        if (isOpenControlledByParent) {
            return open || (setIsOpen !== undefined && !setIsOpen) ? onClose?.(selectedValue) : onOpen?.(selectedValue);
        }

        setInternalOpen((prevInternalOpen) => setIsOpen ?? !prevInternalOpen);
    };

    const onToggleCollapse = (groupId: string) => {
        setOpenedGroup((prevState) => (prevState === groupId ? "" : groupId));
    };

    const isOptionSelected = (groupOption: DropdownCollapsibleInternalOptionValue) => {
        const optionGroupInSelectedValues = internalValue?.[groupOption.groupId];
        const optionGroupValuesSet = new Set(optionGroupInSelectedValues?.selectedOptions);
        return optionGroupValuesSet.has(groupOption.option.value);
    };

    const handleSelectOption = (
        clickedGroupOption: DropdownCollapsibleInternalOptionValue,
        optionGroupInSelectedValues: DropdownCollapsibleGroupValue | undefined,
    ): DropdownCollapsibleGroupValue["selectedOptions"] => {
        const groupIsRadio = clickedGroupOption.mode === DropdownCollapsibleOptionModes.RADIO;
        return groupIsRadio
            ? [clickedGroupOption.option.value]
            : [...(optionGroupInSelectedValues?.selectedOptions ?? []), clickedGroupOption.option.value];
    };

    const handleUnselectOption = (
        clickedGroupOption: DropdownCollapsibleInternalOptionValue,
        optionGroupInSelectedValues: DropdownCollapsibleGroupValue | undefined,
    ): DropdownCollapsibleGroupValue["selectedOptions"] => {
        return [
            ...(optionGroupInSelectedValues?.selectedOptions?.filter(
                (selectedOption) => selectedOption !== clickedGroupOption.option.value,
            ) ?? []),
        ];
    };

    const handleClickOption = (clickedGroupOption: DropdownCollapsibleInternalOptionValue) => {
        setInternalValue((prevValue) => {
            const optionGroupInSelectedValues = prevValue?.[clickedGroupOption.groupId];
            const optionIsSelected = isOptionSelected(clickedGroupOption);
            const newGroupSelectedOptions = optionIsSelected
                ? handleUnselectOption(clickedGroupOption, optionGroupInSelectedValues)
                : handleSelectOption(clickedGroupOption, optionGroupInSelectedValues);
            const newGroupValue: DropdownCollapsibleGroupValue = {selectedOptions: newGroupSelectedOptions};
            const newSelectedValue = {...prevValue, [clickedGroupOption.groupId]: newGroupValue};
            if (onChange) onChange(newSelectedValue);
            if (!submitActionButton && !value) setSelectedValue(newSelectedValue);
            return newSelectedValue;
        });
    };

    const handleCallToActionButtonClick = (optionValue?: DropdownOption) => {
        if (callToActionButton?.disabled) return;
        if (!callToActionButton?.preventCloseOnClick) {
            onToggleDropdown(false);
        }
        callToActionButton?.onClick(optionValue);
    };

    const handleSubmitActionButtonClick = () => {
        onToggleDropdown(false);
        if (!value) setSelectedValue(internalValue);
        submitActionButton?.onClick(internalValue);
    };

    const handleCancelActionButtonClick = () => {
        onToggleDropdown(false);
        syncInternalValueFromValue();
        cancelActionButton?.onClick?.();
    };

    useOnClickOutside(dropdownRef, () => {
        !disableCloseWhenClickOutside && onToggleDropdown(false);
    });

    useEffect(() => {
        setInternalValue(value);
        setSelectedValue(value);
    }, [value]);

    useEffect(() => {
        syncInternalValueFromValue();
    }, [syncInternalValueFromValue]);

    return (
        <div>
            {formLabel && <span className={className(styles.formLabel, conditionalClass([styles.light, !!light]))}>{formLabel}</span>}
            <section
                ref={dropdownRef}
                className={className(
                    styles.dropdown,
                    customClassName,
                    conditionalClass(
                        [styles.opened, !!isOpened],
                        [styles.light, !!light],
                        [styles.onlyTriggerIcon, !!itsOnlyTriggerIcon],
                        [styles.iconAndTrigger, !!itsIconAndTrigger],
                        [styles.withCustomTrigger, isCustomTrigger(trigger)],
                        [styles.showInputBorder, !!showTriggerBorder],
                        [styles.triggerIconAnimationDisabled, !!isTriggerIconAnimationDisabled],
                        [styles.disableTransparency, !isCustomTrigger(trigger) && !!trigger?.disableTransparency],
                    ),
                )}
            >
                {isCustomTrigger(trigger) ? (
                    <div
                        ref={triggerRef}
                        className={styles.customTriggerWrapper}
                        onClick={() => {
                            onToggleDropdown();
                        }}
                        onKeyDown={onKeyDownA11y(() => {
                            onToggleDropdown();
                        })}
                        tabIndex={0}
                        role="button"
                    >
                        {trigger}
                    </div>
                ) : (
                    <div
                        {...rest}
                        data-testid={testId}
                        ref={triggerRef}
                        className={className(
                            styles.trigger,
                            styles[trigger.formTriggerSize ?? DropdownFormTriggerSizes.SMALL],
                            conditionalClass(
                                [styles.light, !!light],
                                [styles.formTrigger, !!trigger?.formTrigger],
                                [styles.hideSelectedInputBorder, !!trigger.hideSelectedInputBorder],
                            ),
                        )}
                        onClick={() => {
                            onToggleDropdown();
                        }}
                        onKeyDown={onKeyDownA11y(() => {
                            onToggleDropdown();
                        })}
                        tabIndex={0}
                        role="button"
                    >
                        {!itsOnlyTriggerIcon && (
                            <div className={styles.label}>
                                <DropdownLabel icon={trigger?.leadingIcon} label={trigger?.label ?? trigger?.placeholder} />
                            </div>
                        )}
                        <DropdownIconComponent
                            customClassName={className(styles.triggerIcon, conditionalClass([styles.light, !!light]))}
                            icon={trigger.customTriggerIcon?.icon ?? IconsNames.CHEVRON_DOWN}
                            strokeColor={trigger.customTriggerIcon?.color}
                            useInlineColors={!!trigger.customTriggerIcon?.color}
                            size={20}
                        />
                    </div>
                )}
                <DropdownList
                    dropdownTestId={testId}
                    disableCloseWhenClickOutside={disableCloseWhenClickOutside}
                    dropdownListInfoTooltip={dropdownListInfoTooltip}
                    desktopDropdownWidth={desktopDropdownWidth}
                    desktopDropdownMaxHeight={desktopDropdownMaxHeight}
                    alignment={alignment}
                    openToTop={openToTop}
                    customListClassName={customListClassName}
                    submitActionButton={submitActionButton && {...submitActionButton, onClick: handleSubmitActionButtonClick}}
                    cancelActionButton={cancelActionButton && {...cancelActionButton, onClick: handleCancelActionButtonClick}}
                    callToActionButton={callToActionButton && {...callToActionButton, onClick: handleCallToActionButtonClick}}
                    opened={!!isOpened}
                    onToggleDropdown={onToggleDropdown}
                    mobileTitle={mobileTitle}
                    withoutGap
                    withoutMarginBottom
                    withoutMarginRight
                    centerOpenAnimation={!isCustomTrigger(trigger) && !!trigger?.formTrigger}
                    options={Object.entries(options).map(([id, optionsGroup], i) => (
                        <DropdownCollapseOption
                            key={id}
                            groupId={id}
                            optionsGroup={optionsGroup}
                            handleCollapse={() => {
                                onToggleCollapse(id);
                            }}
                            handleClickOption={handleClickOption}
                            isOptionSelected={isOptionSelected}
                            dropdownTestId={testId}
                            openedGroup={openedGroup ?? ""}
                            isLastGroup={isLastGroup(i)}
                        />
                    ))}
                />
            </section>
        </div>
    );
};

export * from "./type";
