import React from "react";

import {IconName} from "@app/Foundations";

export enum CollapseSkeletonSizes {
    EXTRA_SMALL = "extra-small",
    SMALL = "small",
    DEFAULT = "default",
}

export interface CollapseSkeletonProps {
    /**
     * The title to show for the collapse (as a button that toggles it)
     */
    title?: string | React.ReactNode;
    /**
     * Used to control the open state of the Collapse externally
     */
    isOpen?: boolean;
    /**
     * Used to control if the Collapse starts opened by default
     */
    isDefaultOpen?: boolean;
    /**
     * The icon to show at the right of the title
     */
    icon?: IconName;
    /**
     * The color of the icon at the right of the title. Defaults to secondary 500 when undefined
     * @default undefined
     */
    iconColor?: string;
    /**
     * Used to show a line between the Collapse and the content when opened
     */
    enableLineSeparator?: boolean;
    /**
     * Used to disable the padding that the content of the Collapse has by default
     */
    disableContentPadding?: boolean;
    /**
     * A custom class name to be added to the root element of the Collapse
     */
    customClassName?: string;
    /**
     * The size of the Collapse. It varies the padding and the font weight of the trigger
     * @default CollapseSkeletonSizes.DEFAULT
     */
    size?: CollapseSkeletonSizes;
    /**
     * Disables the hover color of the trigger
     * @default false
     */
    disableTriggerHoverColor?: boolean;
    /**
     * The collapse data-testid. Required for testing purposes
     */
    "data-testid": string;
    /**
     * A callback that's called when the collapse is toggled
     */
    onCollapse?: (isOpen: boolean) => void;
}

export type CollapseProps = CollapseSkeletonProps;
