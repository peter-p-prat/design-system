import {IconsNames} from "@app/Foundations";

export interface CopyButtonProps {
    /**
     * The text to be copied to the clipboard
     */
    textToCopy: string;
    /**
     * The icon to be shown as the button
     */
    iconName: IconsNames;
    /**
     * @description The icon size
     * @default 16
     */
    size?: number;
    /**
     * @description The aria-label for the button
     * @default copy-button
     */
    ariaLabel?: string;
    /**
     * @description The time in milliseconds to show the copied icon
     * @default 500
     */
    timeToShowCopiedIcon?: number;
    /**
     * @description The custom class name for the button
     * @default undefined
     */
    customClassName?: string;
    /**
     * @description The color of the button
     * @default undefined
     */
    color?: string;
    /**
     * The copy button data-testid. Required for testing purposes
     */
    "data-testid": string;
}
