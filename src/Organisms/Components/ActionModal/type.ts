import {ModalProps} from "@app/Molecules";
import {ButtonHTMLAttributes} from "react";

export interface ActionModalProps extends ModalProps {
  /**
    /**
     * Defines the modal title
     */
  title?: string | React.ReactNode;
  /**
   * @description Defines the modal size
   * @default ModalSize.MEDIUM
   */
  size?: ActionModalSize;
  /**
   * If passed, set the icon to be shown in the modal
   */
  icon?: React.ReactNode;
  /**
   * Defines whether the modal displays the close button
   */
  hasCloseButton?: boolean;
  /**
   * If passed, showns the primary action button. Set the actions: {label, isDisabled, onClick}
   */
  primaryAction?: ModalAction;
  /**
   * If passed, showns the secondary action button. Set the actions: {label, isDisabled, onClick}
   */
  secondaryAction?: ModalAction;
  /**
   * If passed, shows the modal layout in full screen mode.
   * The modal will have a lower z-index than the header and the will be scrollable.
   * The modal height should be defined by the consumer with a custom className.
   */
  fullScreen?: boolean;
  /**
   * If passed, className to be added to the ModalLayout
   */
  customClassName?: string;
  /**
   * If passed, showns the back button.
   */
  backButton?: {
    label: string;
    onClick: () => void;
  };
}

export interface ModalAction
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  label: string;
  isDisabled?: boolean;
  customClassName?: string;
  "data-testid": string;
  onClick: () => void;
}

export enum ActionModalSize {
  LARGE = "lg",
  MEDIUM = "md",
  SMALL = "sm",
}
