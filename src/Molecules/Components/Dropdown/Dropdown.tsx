import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {Breakpoints, IconsNames} from "@app/Foundations";
import {useDetectViewport} from "@app/shared";
import {className, conditionalClass, onKeyDownA11y} from "@app/shared/helpers";
import {findSubstringIgnoreCase} from "@app/shared/helpers/strings";
import {useIsElementFocused} from "@app/shared/hooks/useIsFocused";
import {useListCursor} from "@app/shared/hooks/useListCursor";
import {useOnClickOutside} from "@app/shared/hooks/useOnClickOutside";

import {
  SearchInput,
  SearchInputProps,
} from "../../../Atoms/Components/InputFields";

import useModalMode from "./hooks/useModalMode";
import {
  DropdownIconComponent,
  DropdownLabel,
  DropdownList,
  DropdownOptionComponent,
} from "./components";
import {
  DropdownFormTriggerSizes,
  DropdownModes,
  DropdownOption,
  DropdownProps,
} from "./type";

import styles from "./Dropdown.module.scss";

export const Dropdown = ({
  isDisabled,
  multiselect,
  options,
  mode = DropdownModes.SELECT,
  open,
  value,
  defaultOpen,
  defaultValue,
  formLabel,
  label,
  mobileTitle,
  placeholder,
  light,
  labelIcon,
  triggerIcon,
  disableCloseAfterSelection,
  disableCloseWhenClickOutside,
  disableTransparency,
  disableMobileModalMode,
  showInputBorder,
  hideSelectedInputBorder,
  useRadioButtons,
  onChange,
  onClose,
  onOpen,
  getOptionSelected,
  getOptionDisabled,
  enableSearchInput,
  searchInputProps,
  onSearchFilter,
  submitActionButton,
  cancelActionButton,
  callToActionButton,
  customListClassName,
  alignment,
  openToTop,
  desktopDropdownWidth,
  desktopDropdownMaxHeight,
  formTrigger,
  formTriggerSize = DropdownFormTriggerSizes.SMALL,
  "data-testid": dataTestId,
  dropdownListInfoTooltip,
  iconColor,
  customClassName = "",
  customTrigger,
  customLabelClassName = "",
  hideSelectedIcon = false,
  customFormTriggerClassName = "",
  ...rest
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const isFocused = useIsElementFocused(dropdownRef);
  const {viewport} = useDetectViewport();
  const [internalOpen, setInternalOpen] = useState<boolean | undefined>(
    defaultOpen
  );
  const [searchTextChange, setSearchTextChange] = useState<string>("");
  const [searchTextSubmit, setSearchTextSubmit] = useState<string>("");
  const [internalValue, setInternalValue] = useState<DropdownProps["value"]>(
    value || defaultValue
  );
  const [selectedValue, setSelectedValue] = useState<DropdownProps["value"]>(
    value || defaultValue
  );
  const {desktopMode} = useModalMode({disableMobileModalMode});

  const isOpenControlledByParent = useMemo(
    () => typeof open === "boolean" && !!onClose && !!onOpen,
    [open, onClose, onOpen]
  );

  const isOpened = useMemo(() => {
    if (isOpenControlledByParent) {
      return open;
    }
    return internalOpen;
  }, [internalOpen, open, isOpenControlledByParent]);

  const labelValue = useMemo(() => {
    if (multiselect) {
      return {value: "", label};
    }

    return value?.[0] ?? selectedValue?.[0];
  }, [label, multiselect, selectedValue, value]);

  const exposedValue = useMemo(() => {
    return value ?? selectedValue;
  }, [selectedValue, value]);

  const itHasValue = useMemo(() => {
    return !!exposedValue;
  }, [exposedValue]);

  const itsOnlyTriggerIcon = useMemo(() => {
    return !label && !placeholder && !labelIcon && !customTrigger;
  }, [label, labelIcon, placeholder, customTrigger]);

  const itsIconAndTrigger = useMemo(() => {
    return !label && !placeholder && labelIcon && !customTrigger;
  }, [label, labelIcon, placeholder, customTrigger]);

  const isTriggerIconAnimationDisabled = useMemo(() => {
    return triggerIcon;
  }, [triggerIcon]);

  const {cursor, resetCursor, handleDownPress} = useListCursor({
    listLength: options?.length,
    preventChangesIf: () => !isOpened || !isFocused,
  });

  const defaultSearchInputProps: SearchInputProps = useMemo(
    () => ({
      handleChange: (changedValue) => {
        setSearchTextChange(changedValue);
      },
      handleSubmit: (submittedValue) => {
        resetCursor();
        setSearchTextSubmit(submittedValue);
      },
      placeholder: "",
      value: searchTextChange,
      clearable: true,
      debounceTime: 0,
      "data-testid": `${dataTestId}-search-input`,
    }),
    [searchTextChange, resetCursor, dataTestId]
  );

  const labelValues: DropdownOption | undefined = useMemo(() => {
    if (itsOnlyTriggerIcon || (multiselect && !label)) return undefined;

    if (multiselect) {
      return {label: label ?? "", value: ""};
    }

    if (mode !== DropdownModes.MENU && labelValue && !itsIconAndTrigger) {
      return {
        label: labelValue.triggerLabel ?? labelValue.label,
        value: labelValue.value,
        icon: labelValue.icon,
      };
    }

    return {
      label:
        label ??
        (placeholder ? (
          <span className={styles.placeholder}>{placeholder}</span>
        ) : undefined),
      value: labelValue?.value ?? "",
      icon: labelIcon,
    };
  }, [
    multiselect,
    mode,
    labelValue,
    label,
    labelIcon,
    placeholder,
    itsIconAndTrigger,
    itsOnlyTriggerIcon,
  ]);

  const syncInternalValueFromValue = useCallback(() => {
    setInternalValue(exposedValue);
  }, [exposedValue]);

  const onToggleDropdown = (setIsOpen?: boolean): void => {
    syncInternalValueFromValue();

    if (isDisabled) return;

    if (isOpenControlledByParent) {
      if (open || (setIsOpen !== undefined && !setIsOpen)) {
        onClose?.(selectedValue);
      } else {
        onOpen?.(selectedValue);
      }
      return;
    }

    setInternalOpen((prevInternalOpen) => {
      const shouldOpen = setIsOpen ?? !prevInternalOpen;
      if (shouldOpen) {
        onOpen?.(selectedValue);
      }
      if (!shouldOpen) {
        onClose?.(selectedValue);
      }
      return shouldOpen;
    });
  };

  const isOptionSelected = (option: DropdownOption) => {
    const selectedValuesSet = new Set(
      internalValue?.map((mappedOption) => mappedOption.value)
    );
    const isSelected = selectedValuesSet.has(option.value);
    return getOptionSelected?.(option, internalValue) ?? isSelected;
  };

  const onClickOption = (clickedOption: DropdownOption) => {
    if (multiselect) {
      setInternalValue((prevValue) => {
        const prevValueArray =
          !!prevValue && Array.isArray(prevValue) ? prevValue : [];
        const optionIsSelected = isOptionSelected(clickedOption);
        const newSelectedValue = optionIsSelected
          ? prevValueArray.filter(
              (selectedOption) => selectedOption.value !== clickedOption.value
            )
          : [...prevValueArray, clickedOption];
        if (onChange) onChange(newSelectedValue);
        if (!submitActionButton) setSelectedValue(newSelectedValue);
        return newSelectedValue;
      });
      return;
    }

    if (mode !== DropdownModes.MENU) setInternalValue([clickedOption]);
    if (!submitActionButton && mode !== DropdownModes.MENU)
      setSelectedValue([clickedOption]);
    if (onChange) onChange([clickedOption]);
    if (!disableCloseAfterSelection) onToggleDropdown(false);
    triggerRef.current?.focus();
  };

  const isOptionDisabled = (option: DropdownOption) => {
    return getOptionDisabled?.(option, selectedValue) ?? false;
  };

  const resetSearch = () => {
    setSearchTextChange("");
    setSearchTextSubmit("");
  };

  const filterOptions = useCallback(
    (
      optionValue: DropdownOption,
      optionIndex: number,
      optionsArray: DropdownOption[]
    ): boolean => {
      if (!enableSearchInput || !searchTextSubmit) return true;
      if (onSearchFilter)
        return onSearchFilter(
          searchTextSubmit,
          optionValue,
          optionIndex,
          optionsArray
        );

      let labelText = "";
      if (typeof optionValue.label === "string") {
        labelText = optionValue.label;
      } else if (optionValue.label) {
        labelText = "";
      }

      return findSubstringIgnoreCase(labelText, searchTextSubmit);
    },
    [searchTextSubmit, enableSearchInput, onSearchFilter]
  );

  const focusSearchInput = useCallback(
    (searchInputContainerNode: HTMLDivElement | null) => {
      if (
        !isOpened ||
        !enableSearchInput ||
        !searchInputContainerNode ||
        viewport === Breakpoints.MOBILE ||
        viewport === Breakpoints.TABLET
      )
        return;

      const [searchInput] = searchInputContainerNode.querySelectorAll("input");
      searchInput?.focus();
    },
    [isOpened, enableSearchInput, viewport]
  );

  const handleEnterKeyOnSearchInput = () => {
    handleDownPress();
    requestAnimationFrame(() => {
      const dropdownOptionElement =
        document.activeElement as HTMLDivElement | null;
      if (!dropdownOptionElement?.className.includes("dropdownOption")) return;
      dropdownOptionElement.click();
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
    if (submitActionButton?.disabled) return;
    onToggleDropdown(false);
    setSelectedValue(internalValue);
    submitActionButton?.onClick(internalValue);
  };

  const handleCancelActionButtonClick = () => {
    onToggleDropdown(false);
    syncInternalValueFromValue();
    cancelActionButton?.onClick?.();
  };

  useOnClickOutside(dropdownRef, () => {
    if (!disableCloseWhenClickOutside) {
      onToggleDropdown(false);
    }
  });

  useEffect(() => {
    if (!isOpened) {
      resetCursor();
      resetSearch();
    }
  }, [isOpened, resetCursor]);

  useEffect(() => {
    syncInternalValueFromValue();
  }, [exposedValue, syncInternalValueFromValue]);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <div>
      {formLabel && (
        <span
          className={className(
            styles.formLabel,
            conditionalClass([styles.light, !!light])
          )}
        >
          {formLabel}
        </span>
      )}
      <section
        ref={dropdownRef}
        className={className(
          styles.dropdown,
          customClassName,
          conditionalClass(
            [styles.opened, !!isOpened],
            [styles.hasValue, itHasValue],
            [styles.light, !!light],
            [styles.onlyTriggerIcon, !!itsOnlyTriggerIcon],
            [styles.iconAndTrigger, !!itsIconAndTrigger],
            [styles.withCustomTrigger, !!customTrigger],
            [styles.showInputBorder, !!showInputBorder],
            [
              styles.triggerIconAnimationDisabled,
              !!isTriggerIconAnimationDisabled,
            ],
            [styles.disableTransparency, !!disableTransparency]
          )
        )}
      >
        {customTrigger ? (
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
            data-testid={`${dataTestId}-custom-trigger`}
          >
            {customTrigger}
          </div>
        ) : (
          <div
            {...rest}
            data-testid={dataTestId}
            ref={triggerRef}
            className={className(
              styles.trigger,
              styles[formTriggerSize],
              conditionalClass(
                [styles.light, !!light],
                [styles.formTrigger, !!formTrigger],
                [styles.hideSelectedInputBorder, !!hideSelectedInputBorder],
                [styles.disabled, !!isDisabled]
              ),
              customFormTriggerClassName
            )}
            onClick={() => {
              onToggleDropdown();
            }}
            onKeyDown={onKeyDownA11y(() => {
              onToggleDropdown();
            })}
            tabIndex={0}
            role="button"
            style={
              {
                "--trigger-color": iconColor,
              } as CSSProperties
            }
          >
            {!itsOnlyTriggerIcon && (
              <div className={styles.label}>
                <DropdownLabel
                  customClassName={customLabelClassName}
                  icon={hideSelectedIcon ? undefined : labelValues?.icon}
                  label={labelValues?.label}
                />
              </div>
            )}
            <DropdownIconComponent
              customClassName={className(
                styles.triggerIcon,
                conditionalClass([styles.light, !!light])
              )}
              icon={triggerIcon ?? IconsNames.CHEVRON_DOWN}
              size={20}
            />
          </div>
        )}
        <DropdownList
          dropdownTestId={dataTestId}
          disableCloseWhenClickOutside={disableCloseWhenClickOutside}
          disableMobileModalMode={disableMobileModalMode}
          dropdownListInfoTooltip={dropdownListInfoTooltip}
          desktopDropdownWidth={desktopDropdownWidth}
          desktopDropdownMaxHeight={desktopDropdownMaxHeight}
          centerOpenAnimation={!!formTrigger}
          alignment={alignment}
          openToTop={openToTop}
          customListClassName={customListClassName}
          submitActionButton={
            submitActionButton && {
              ...submitActionButton,
              onClick: handleSubmitActionButtonClick,
            }
          }
          cancelActionButton={
            cancelActionButton && {
              ...cancelActionButton,
              onClick: handleCancelActionButtonClick,
            }
          }
          callToActionButton={
            callToActionButton && {
              ...callToActionButton,
              onClick: handleCallToActionButtonClick,
            }
          }
          opened={!!isOpened}
          onToggleDropdown={onToggleDropdown}
          mobileTitle={mobileTitle}
          searchInput={
            enableSearchInput && (
              <div
                className={className(
                  styles.searchInputContainer,
                  conditionalClass([styles.desktopMode, !!desktopMode])
                )}
                ref={focusSearchInput}
                onKeyDown={onKeyDownA11y(
                  () => {
                    handleEnterKeyOnSearchInput();
                  },
                  {
                    disableSpacebar: true,
                  }
                )}
                role="button"
                tabIndex={0}
              >
                <SearchInput
                  {...defaultSearchInputProps}
                  {...searchInputProps}
                />
              </div>
            )
          }
          options={options
            .filter((option, index, array) =>
              filterOptions(option, index, array)
            )
            .map((option, i) => (
              <DropdownOptionComponent
                key={`${option.value}${String(i)}`}
                optionNumber={i}
                option={option}
                multiselect={multiselect}
                useRadioButtons={useRadioButtons}
                onClick={onClickOption}
                isSelected={isOptionSelected}
                isDisabled={isOptionDisabled}
                isActive={cursor === i}
                testId={`${dataTestId}-option-${String(i)}`}
              />
            ))}
        />
      </section>
    </div>
  );
};

export * from "./type";
