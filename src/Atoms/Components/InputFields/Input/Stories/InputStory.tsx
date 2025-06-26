import React, {useState} from "react";

import {Input, InputFeedback, InputSizes} from "@app/Atoms";
import {IconsNames} from "@app/Foundations";

export interface InputStoryProps {
    placeholder: string;
    size?: InputSizes;
    clearable?: boolean;
    disabled?: boolean;
    inputFeedback?: InputFeedback | null;
    leadingIcon?: "icon" | "button";
    trailingIcon?: "icon" | "button";
    isPassword?: boolean;
    prefixLabel?: string;
    withMask?: boolean;
}

export const InputStory = ({
    placeholder,
    size,
    clearable,
    disabled,
    inputFeedback,
    leadingIcon,
    trailingIcon,
    isPassword,
    prefixLabel,
    withMask,
}: InputStoryProps) => {
    const [value, setValue] = useState<string>("");

    const onChange = (newInputValue: string) => {
        setValue(newInputValue);
    };

    const iconsMap = {
        icon: {
            iconName: IconsNames.INFO_CIRCLE,
            altText: "inbox",
        },
        button: {
            iconName: IconsNames.ANNOTATION_CHECK,
            action: () => {},
            altText: "check",
        },
    };

    if (prefixLabel) {
        return (
            <Input
                label="Label"
                value={value}
                placeholder={placeholder}
                size={size}
                clearable={clearable}
                disabled={disabled}
                trailingIcon={trailingIcon ? iconsMap[trailingIcon] : undefined}
                handleChange={onChange}
                inputFeedback={inputFeedback}
                prefixLabel={prefixLabel}
                data-testid="input"
                maskPattern={
                    withMask
                        ? {
                              mask: "##/##/####",
                              patterns: {"#": /\d/},
                          }
                        : undefined
                }
            />
        );
    }

    return (
        <Input
            label="Label"
            value={value}
            placeholder={placeholder}
            size={size}
            clearable={clearable}
            disabled={disabled}
            leadingIcon={leadingIcon ? iconsMap[leadingIcon] : undefined}
            trailingIcon={trailingIcon ? iconsMap[trailingIcon] : undefined}
            handleChange={onChange}
            inputFeedback={inputFeedback}
            isPassword={isPassword}
            maskPattern={
                withMask
                    ? {
                          mask: "##/##/####",
                          patterns: {"#": /\d/},
                      }
                    : undefined
            }
            data-testid="input"
        />
    );
};
