import React from "react";

import {className, conditionalClass} from "@app/shared";

import styles from "./DropdownRadioButton.module.scss";

interface Props {
    isSelected?: boolean;
    isDisabled?: boolean;
}

export const DropdownRadioButton = ({isSelected, isDisabled}: Props) => {
    return (
        <section
            className={className(
                styles.dropdownRadioButton,
                conditionalClass([styles.isSelected, !!isSelected], [styles.isDisabled, !!isDisabled]),
            )}
        />
    );
};
