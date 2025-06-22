import React from "react";

import {className, conditionalClass} from "@app/shared";

import {ActionButtonInternalProps} from "../../type";

import styles from "./DropdownActionButton.module.scss";

interface Props {
    action: ActionButtonInternalProps;
    testId: string;
    disabled?: boolean;
}

export const DropdownActionButton = ({action, testId, disabled}: Props) => {
    return (
        <button
            key={action.label}
            type="button"
            className={className(styles.actionButton, conditionalClass([styles.disabled, !!disabled]))}
            disabled={disabled}
            onClick={action.onClick}
            data-testid={testId}
        >
            {action.label}
        </button>
    );
};
