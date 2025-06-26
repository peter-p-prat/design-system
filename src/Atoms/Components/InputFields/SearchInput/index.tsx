import React from "react";

import {Input, InputProps, InputStates} from "@app/Atoms";
import {IconsNames} from "@app/Foundations";
import {getColorFromPalette, isValidLength} from "@app/shared";
import {useDebounce} from "@app/shared/hooks/useDebounce";

export interface SearchInputProps extends Omit<InputProps, "leadingIcon" | "prefixLabel"> {
    buttonAltText?: string;
    debounceTime?: number;
    maxLength?: number;
    /**
     * The search input data-testid. Required for testing purposes
     */
    "data-testid": string;
    handleSubmit: (value: string) => void;
}

export const SearchInput = ({
    value,
    handleChange,
    placeholder,
    handleSubmit,
    label,
    size,
    clearable,
    disabled,
    inputFeedback,
    buttonAltText,
    debounceTime,
    maxLength,
    "data-testid": dataTestId,
    ...rest
}: SearchInputProps) => {
    const {debouncedFunction: debouncedSubmit} = useDebounce((...args: unknown[]) => {
        handleSubmit(args[0] as string);
    }, debounceTime ?? 1_000);

    const onChange = (newInputValue: string) => {
        if (maxLength && !isValidLength(newInputValue, maxLength)) return;
        handleChange(newInputValue);
        debouncedSubmit(newInputValue);
    };

    return (
        <Input
            {...rest}
            value={value}
            label={label}
            placeholder={placeholder}
            size={size}
            clearable={clearable}
            disabled={disabled}
            leadingIcon={{
                iconName: IconsNames.SEARCH_MD,
                iconColor: getColorFromPalette("gray", "100"),
                action: () => {
                    handleSubmit(value);
                },
                altText: buttonAltText,
                disabled: !!disabled || inputFeedback?.state === InputStates.ERROR || inputFeedback?.state === InputStates.LOADING,
            }}
            handleChange={onChange}
            inputFeedback={inputFeedback}
            data-testid={dataTestId}
        />
    );
};
