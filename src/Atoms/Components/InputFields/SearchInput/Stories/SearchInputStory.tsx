import React, {useState} from "react";

import {InputFeedback, InputStates, SearchInput} from "@app/Atoms";

import styles from "./SearchInputStory.module.scss";

export interface SearchInputStoryProps {
    title: string;
    inputFeedback?: InputFeedback | null;
    disabled?: boolean;
    debounceTime?: number;
    maxLength?: number;
}

export const SearchInputStory = ({
    title,
    inputFeedback,
    disabled,
    debounceTime,
    maxLength,
}: React.PropsWithChildren<SearchInputStoryProps>) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [inputFeedbackState, setInputFeedbackState] = useState<InputFeedback | null>(inputFeedback ?? null);

    const validator = (value: string) => {
        switch (value) {
            case "loading":
                return {
                    state: InputStates.LOADING,
                };
            case "error":
                return {
                    state: InputStates.ERROR,
                };
            case "success":
                return {
                    state: InputStates.SUCCESS,
                };
            default:
                return null;
        }
    };

    const handleChange = (value: string) => {
        setInputValue(value);
        const validationResult = validator(value);
        setInputFeedbackState(validationResult);
    };

    return (
        <article className={styles.searchInputWrapper}>
            <h2>Search input</h2>
            <p className={styles.description}>
                Search input that executes the function passed by parameters in two ways: when entering text (with a debounce time of
                delayProp milliseconds) and by clicking the search icon
            </p>
            <h3>{title}</h3>
            <SearchInput
                clearable
                label="Label"
                value={inputValue}
                placeholder="Search input"
                disabled={disabled}
                handleChange={handleChange}
                handleSubmit={() => {
                    setInputFeedbackState({
                        state: InputStates.SUCCESS,
                        message: "Submitted!",
                    });
                }}
                inputFeedback={inputFeedbackState}
                buttonAltText="search"
                debounceTime={debounceTime}
                maxLength={maxLength}
                data-testid="search-input"
            />
        </article>
    );
};
