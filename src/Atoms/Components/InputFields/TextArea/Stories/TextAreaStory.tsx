import React, {useState} from "react";

import {TextArea, TextAreaFeedback, TextAreaResize, TextAreaSizes} from "@app/Atoms";

export interface TextAreaStoryProps {
    placeholder: string;
    label?: string;
    size?: TextAreaSizes;
    resize?: TextAreaResize;
    disabled?: boolean;
    feedback?: TextAreaFeedback | null;
    rows?: number;
}

export const TextAreaStory = ({placeholder, label, size, resize, disabled, feedback, rows}: TextAreaStoryProps) => {
    const [value, setValue] = useState<string>("");

    const onChange = (newTextAreaValue: string) => {
        setValue(newTextAreaValue);
    };

    return (
        <TextArea
            label={label}
            value={value}
            placeholder={placeholder}
            size={size}
            disabled={disabled}
            handleChange={onChange}
            feedback={feedback}
            rows={rows}
            resize={resize}
            data-testid="text-area"
        />
    );
};
