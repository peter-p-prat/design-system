import React from "react";

import {InputIconPositions, InputSizes} from "@app/Atoms";
import {Icon, IconName} from "@app/Foundations";
import {className, conditionalClass} from "@app/shared";

import styles from "../Input.module.scss";

interface InputIconProps {
    size: InputSizes;
    position: InputIconPositions;
    iconName: IconName;
    iconColor?: string;
    title?: string;
    customClassName?: string;
    action?: () => void;
    disabled?: boolean;
}

export const InputIcon = ({size, position, iconName, iconColor, title, customClassName = "", action, disabled}: InputIconProps) => {
    if (action)
        return (
            <button
                aria-label={title}
                className={className(
                    styles.iconButton,
                    styles[size],
                    customClassName,
                    conditionalClass(
                        [styles.leading, position === InputIconPositions.LEADING],
                        [styles.trailing, position === InputIconPositions.TRAILING],
                    ),
                )}
                type="button"
                onClick={action}
                disabled={disabled}
            >
                <Icon name={iconName} size={20} title={title} strokeColor={iconColor} useInlineColors={!!iconColor} />
            </button>
        );

    return (
        <div
            className={className(
                styles.iconContainer,
                styles[size],
                customClassName,
                conditionalClass(
                    [styles.leading, position === InputIconPositions.LEADING],
                    [styles.trailing, position === InputIconPositions.TRAILING],
                ),
            )}
        >
            <Icon name={iconName} size={20} title={title} />
        </div>
    );
};
