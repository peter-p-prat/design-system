import React, {ButtonHTMLAttributes, CSSProperties, MouseEventHandler} from "react";

import {Icon, IconName} from "@app/Foundations";
import {className, conditionalClass} from "@app/shared";

import styles from "./SectionButton.module.scss";

export interface SectionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    /**
     * Text to be displayed in the button
     */
    label: string;
    /**
     * Icon to be shown in the button before the label
     */
    leadingIcon?: IconName;
    /**
     * Icon to be shown in the button after the label
     */
    trailingIcon?: IconName;
    /**
     * Define if the button has a shadow
     */
    hasShadow?: boolean;
    /**
     * Define a custom border color for the button
     */
    borderColor: string;
    /**
     * The button callback action
     */
    onClick: MouseEventHandler<HTMLElement>;
    /**
     * Custom class name for the button
     */
    customClassName?: string;
    /**
     * Custom size for the leading icon
     */
    leadingIconSize?: number;
    /**
     * Custom size for the trailing icon
     */
    trailingIconSize?: number;
    /**
     * The button data-testid. Required for testing purposes
     */
    "data-testid": string;
}

export const SectionButton = ({
    label,
    leadingIcon,
    trailingIcon,
    onClick,
    customClassName = "",
    hasShadow = true,
    borderColor,
    leadingIconSize = 24,
    trailingIconSize = 24,
    "data-testid": dataTestId,
    ...rest
}: SectionButtonProps) => {
    return (
        <button
            type="button"
            {...rest}
            className={className(styles.sectionButton, customClassName, conditionalClass([styles.hasShadow, !!hasShadow]))}
            onClick={onClick}
            style={
                {
                    "--custom-border-color": borderColor,
                } as CSSProperties
            }
            data-testid={dataTestId}
        >
            {leadingIcon && <Icon name={leadingIcon} customClassName={styles.sectionButtonIcon} size={leadingIconSize} />}
            <span className={styles.sectionButtonLabel}>{label}</span>
            {trailingIcon && (
                <Icon
                    name={trailingIcon}
                    customClassName={className(styles.sectionButtonIcon, styles.trailingIcon)}
                    size={trailingIconSize}
                />
            )}
        </button>
    );
};
