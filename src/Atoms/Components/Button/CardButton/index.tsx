import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  MouseEventHandler,
} from "react";

import {Icon, IconName} from "@app/Foundations";
import {className, conditionalClass} from "@app/shared";

import styles from "./CardButton.module.scss";

export interface CardButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
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

export const CardButton = ({
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
}: CardButtonProps) => {
  return (
    <button
      type="button"
      {...rest}
      className={className(
        styles.cardButton,
        customClassName,
        conditionalClass([styles.hasShadow, !!hasShadow])
      )}
      onClick={onClick}
      style={
        {
          "--custom-border-color": borderColor,
        } as CSSProperties
      }
      data-testid={dataTestId}
    >
      {leadingIcon && (
        <Icon
          name={leadingIcon}
          customClassName={styles.cardButtonIcon}
          size={leadingIconSize}
        />
      )}
      <span className={styles.cardButtonLabel}>{label}</span>
      {trailingIcon && (
        <Icon
          name={trailingIcon}
          customClassName={className(
            styles.cardButtonIcon,
            styles.trailingIcon
          )}
          size={trailingIconSize}
        />
      )}
    </button>
  );
};
