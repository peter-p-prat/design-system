import React, {InputHTMLAttributes} from "react";

import {InputStates} from "@app/Atoms/Components/InputFields/Input";
import {removeSpecialCharacters} from "@app/Atoms/Components/InputFields/NumberInput/utils/NumberInputUtils";
import {className, conditionalClass} from "@app/shared";

import styles from "./NumberInput.module.scss";

export interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    handleChange: (value: string) => void;
    disabled?: boolean;
    inputState?: InputStates | null;
    /**
     * The number input data-testid. Required for testing purposes
     */
    "data-testid": string;
}

export const NumberInput = ({value, disabled, inputState, handleChange, "data-testid": dataTestId, ...rest}: NumberInputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const numPatter = /\d/;
        const target = event.target as HTMLInputElement;
        const {value: inputValue} = target;
        if (inputValue.length > target.maxLength) return;
        if (inputValue === "" || numPatter.test(inputValue)) {
            handleChange(inputValue);
        }
    };

    return (
        <input
            {...rest}
            className={className(styles.numberInput, conditionalClass([styles.error, inputState === InputStates.ERROR]))}
            disabled={disabled}
            value={value}
            onChange={(e) => {
                handleInputChange(e);
            }}
            type="number"
            maxLength={1}
            onKeyUp={removeSpecialCharacters}
            data-testid={dataTestId}
        />
    );
};
