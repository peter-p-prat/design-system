import {ButtonHTMLAttributes} from "react";

export interface ModalProps {
  /**
   * Value to show or hide the modal
   * @type boolean
   * @default false
   */
  isOpen: boolean;
  /**
   * Disables the backdrop blur effect
   * @type boolean
   * @default false
   */
  disableBackdropBlur?: boolean;
  /**
   * Disables triggering the close action when the backdrop is clicked
   * @type boolean
   * @default false
   */
  disableClosingOnBackdropClick?: boolean;
  /**
   * Disables triggering the close action when the ESC key is pressed
   * @type boolean
   * @default false
   */
  disableClosingOnEscape?: boolean;
  /**
   * Enables clicks outside the modal container.
   * @type boolean
   * @default false
   */
  enableOutsideClicks?: boolean;
  /**
   * @description Defines if the modal should have a smooth transition when it opens and closes.
   * @type boolean
   * @default true
   */
  smoothTransition?: boolean;
  /**
   * The position of the modal. This can be CENTER, TOP, BOTTOM, LEFT or RIGHT and this will always be horizontally or vertically aligned when it applies. It can also be a combination of them, TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT which will represent the corners of the screen.
   * @type ModalPosition
   * @default ModalPosition.CENTER
   */
  position?: ModalPosition;
  /**
   * If true, the modal will have a lower z-index than the header
   * @type boolean
   * @default false
   */
  underHeader?: boolean;
  /**
   * The modal data-testid. Required for testing purposes
   */
  "data-testid": string;
  /**
   * Function to close the modal. This function will be executed when the ESC key is pressed and when the user clicks outside the modal.
   * @type () => void
   */
  handleClose?: () => void;
}

export enum ModalPosition {
  CENTER = "center",
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
  TOP_LEFT = "topLeft",
  TOP_RIGHT = "topRight",
  BOTTOM_LEFT = "bottomLeft",
  BOTTOM_RIGHT = "bottomRight",
}
