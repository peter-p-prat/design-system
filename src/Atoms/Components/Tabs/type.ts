import {IconName} from "@app/Foundations";

import {PrimaryTabsProps} from "./PrimaryTabs";
import {SecondaryTabsProps} from "./SecondaryTabs";
import {TertiaryTabsProps} from "./TertiaryTabs";

export interface Tab {
    /**
     * @description The value to be sent to the callback function
     * @type string
     */
    value: string;
    /**
     * @description The label to be displayed on the tab
     * @type string
     */
    label: string;
    /**
     * @description The icon to be displayed on the tab
     * @type IconName
     */
    icon?: IconName;
    /**
     * @description Defines the active status of the tab
     * @type boolean
     */
    active: boolean;
}

export interface InternalTabsProps {
    /**
     * @description The list of tabs to be displayed
     * @type Tab[]
     */
    tabs: Tab[];
    /**
     * @description The tabs size. Optional.
     */
    tabsSize?: TabsSize;
    /**
     * The tabs data-testid. Required for testing purposes
     */
    "data-testid": string;
    /**
     * @description The tab callback function. It will send the tab value as a parameter
     * @type (tabValue: Tab["value"]) => void
     */
    onClick: (tabValue: Tab["value"]) => void;
}

export enum TabsSize {
    SMALL = "small",
    DEFAULT = "default",
}

export enum TabsType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
}

export type TabsProps = InternalTabsProps & (PrimaryTabsProps | SecondaryTabsProps | TertiaryTabsProps);

export enum SecondaryTabLineShape {
    ROUNDED = "rounded",
    SQUARED = "squared",
}
