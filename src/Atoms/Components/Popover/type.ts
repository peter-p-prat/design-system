export enum PopoverAlignments {
    RIGHT = "right",
    LEFT = "left",
}

export interface PopoverProps {
    /**
     * @description If passed, the popover will turn into a controlled component. This prop will manage the open/close state of the popover.
     * @default false
     */
    isOpen?: boolean;
    /**
     * @description The element to be used as the anchor of the popover
     */
    anchor?: React.ReactNode;
    /**
     * @description The element to be used as the popover content
     */
    content?: React.ReactNode;
    /**
     * @description Disables closing the popover when clicking outside of it
     * @default false
     */
    disableCloseWhenClickOutside?: boolean;
    /**
     * @description Disables showing the popover as a modal in mobile devices
     * @default false
     */
    disableMobileModalMode?: boolean;
    /**
     * @description Triggers when the popover is closed.
     */
    onClose?: () => void;
    /**
     * @description Triggers when the popover is opened.
     */
    onOpen?: () => void;
    /**
     * @description className to be applied to the popover anchor element
     * @type string
     */
    customAnchorClassName?: string;
    /**
     * @description className to be applied to the popover element
     * @type string
     */
    customPopoverClassName?: string;
    /**
     * @description Defines the alignment of the popover
     * @default PopoverAlignments.RIGHT
     */
    alignment?: PopoverAlignments;
    /**
     * @description Defines if the popover opens to the top instead of the bottom
     * @default false
     */
    openToTop?: boolean;
    /**
     * @description Applies a shadow to the popover element
     * @default true
     */
    applyShadow?: boolean;
    /**
     * The popover data-testid. Required for testing purposes
     */
    "data-testid": string;
}
