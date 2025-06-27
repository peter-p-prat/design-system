import {ReactElement} from "react";

import {IconName} from "@app/Foundations";
import {getColorFromPalette} from "@app/shared";

export interface MessageProps {
    /**
     * The message data-testid. Required for testing purposes
     */
    "data-testid"?: string;
    /**
     * @description Defines the message width size between some predefined options.
     * @type MessageWidthSize
     * @default MessageWidthSize.FULL_WIDTH
     */
    widthSize?: MessageWidthSize;
    /**
     * @description The title of the message
     * @type string | React.ReactNode
     */
    title: string | React.ReactNode;
    /**
     * @description The icon that will appear before the title
     * @type IconName
     */
    icon: IconName;
    /**
     * @description Value to show or hide the modal
     * @type boolean
     * @default false
     */
    isOpen?: boolean;
    /**
     * @description Any content that the message should display below the title
     * @type string | React.ReactNode
     * @default undefined
     */
    body?: string | React.ReactNode;
    /**
     * @description Value to snap the message to the bottom of the screen. This only applies to Tablet and Mobile devices
     * @type boolean
     * @default false
     */
    snapToBottom?: boolean;
    /**
     * @description The position of the icon relative to title and body. If it is left, then title and body will appear to the right of the icon. If it is top, title and body will be below the icon.
     * @type MessageIconPosition
     * @default MessageIconPosition.LEFT
     */
    iconPosition?: MessageIconPosition;
    /**
     * @description The different type of messages to show different styles
     * @type MessageType
     * @default MessageType.WHITE
     */
    type?: MessageType;
    /**
     * @description The button that will appear to the right in the footer of the message
     * @type MessageButton
     * @default undefined
     */
    rightButton?: MessageButton;
    /**
     * @description The left button of the message
     * @type MessageButton
     * @default undefined
     */
    leftButton?: MessageButton;
    /**
     * @description Function to close the message
     * @type () => void
     * @default undefined
     */
    handleClose?: () => void;
}

export interface NotificationMessageProps {
    /**
     * @description Array of Messages to be displayed
     * @type React.ReactElement[]
     */
    messages: ReactElement<MessageProps>[];
    /**
     * @description The notification messages width size for desktop and tablet devices
     * @type number
     * @default fit-content
     */
    width?: number;
}

export interface MessageButton {
    /**
     * @description The label of the button
     * @type string
     */
    label: string;
    /**
     * @description The icon that will appear before the label
     * @type IconName
     * @default undefined
     */
    icon?: IconName;
    /**
     * @description Value to disable the button
     * @type boolean
     * @default false
     */
    isDisabled?: boolean;
    /**
     * @description Custom class name for the button
     * @type string
     * @default undefined
     */
    customClassName?: string;
    /**
     * @description Function to execute when the button is clicked
     * @type () => void
     */
    onClick: () => void;
}

export enum MessageWidthSize {
    FULL_WIDTH = "full-width",
    FIT_CONTENT = "fit-content",
}

export enum MessageIconPosition {
    LEFT = "left",
    TOP = "top",
}

export enum MessageType {
    WHITE = "white",
    PRIMARY = "primary",
    NEUTRAL = "neutral",
    WARNING = "warning",
    ERROR = "error",
    SUCCESS = "success",
    GRAY = "gray",
}

export const iconCloseColor: Record<MessageType, string> = {
    [MessageType.WHITE]: getColorFromPalette("gray", "500"),
    [MessageType.PRIMARY]: getColorFromPalette("primary", "500"),
    [MessageType.NEUTRAL]: getColorFromPalette("progress", "500"),
    [MessageType.WARNING]: getColorFromPalette("warning", "500"),
    [MessageType.ERROR]: getColorFromPalette("error", "500"),
    [MessageType.SUCCESS]: getColorFromPalette("success", "600"),
    [MessageType.GRAY]: getColorFromPalette("gray", "600"),
};
