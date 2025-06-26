import React, {useState} from "react";

import {NumberInput} from "@app/Atoms";
import {InputStates} from "@app/Atoms/Components/InputFields/Input";

export interface NumberInputStoryProps {
    disabled?: boolean;
    inputState?: InputStates | null;
    initValue?: string;
}

export const NumberInputStory = ({disabled, inputState, initValue}: NumberInputStoryProps) => {
    const [value, setValue] = useState<string>(initValue ?? "");

    const onChange = (newInputValue: string) => {
        setValue(newInputValue);
    };

    return <NumberInput value={value} disabled={disabled} inputState={inputState} handleChange={onChange} data-testid="number-input" />;
};
