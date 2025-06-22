import {HTMLAttributes, isValidElement} from "react";

import {IconName} from "@app/Foundations";

import {SearchInputProps} from "../InputFields";

export interface ImageIconConfig {
    url: string;
    alt?: string;
}

export type DropdownIcon = IconName | ImageIconConfig | React.ReactNode;

export interface DropdownOption {
    label: React.ReactNode;
    triggerLabel?: React.ReactNode;
    value: string;
    /**
     * @description The icon to include at start of the label. Can use a custom image using the ImageIconConfig (object with url and alt properties) type
     */
    icon?: DropdownIcon;
}

export interface DropdownSelectOption extends DropdownOption {
    onClick?: never;
}

export interface DropdownMenuOption extends DropdownOption {
    onClick?: (...args: unknown[]) => unknown;
}

export enum DropdownAlignments {
    RIGHT = "right",
    LEFT = "left",
}

export enum DropdownModes {
    SELECT = "SELECT",
    MENU = "MENU",
}

export enum DropdownFormTriggerSizes {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

export interface CancelActionButtonProps {
    label: string;
    onClick?: () => void;
}

export interface SubmitActionButtonProps {
    label: string;
    onClick: (dropdownValue: DropdownOption[] | undefined) => void;
    disabled?: boolean;
}

export interface CallToActionButtonProps {
    label: string;
    onClick: (dropdownOption: DropdownOption | undefined) => void;
    icon?: DropdownIcon;
    preventCloseOnClick?: boolean;
    disabled?: boolean;
}

export interface ActionButtonInternalProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

export interface DropdownDefaultProps extends Partial<Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange">> {
    /**
     * @description Defines if the dropdown is disabled.
     * @default false
     */
    isDisabled?: boolean;
    /**
     * @description Defines if the dropdown allows multiple selection. If false, the dropdown value will always be an array with a single value.
     * @default false
     */
    multiselect?: boolean;
    /**
     * @description The options to use in the Dropdown, they change to DropdownMenuOption, with an onClick function, when MODE is MENU
     * @type DropdownOption[]
     * @default []
     */
    options: DropdownOption[];
    /**
     * @description The mode to use in the Dropdown; The default value SELECT acts as a selectable component that allows each option to be selected and showed instead of the label when selected; MENU mode does select the option internally, but does not show it on the label and also the options can have an onClick function to trigger different functionalities when selected
     * @type DropdownModes
     * @default DropdownModes.SELECT
     */
    mode?: DropdownModes;
    /**
     * @description Controls externally if the dropdown is open. The dropdown controls itself to close and open, unless you explicitly pass open, onOpen and onClose
     */
    open?: boolean;
    value?: DropdownOption[];
    defaultOpen?: boolean;
    /**
     * @description The default option value to start in the Dropdown
     */
    defaultValue?: DropdownOption[];
    formLabel?: React.ReactNode;
    label?: React.ReactNode;
    /**
     * @description The title to be shown on top of the dropdown options modal when the dropdown is opened on mobile devices
     */
    mobileTitle?: React.ReactNode;
    /**
     * @description With this option enabled, the dropdown turns into a light version, with a white font color and a light border color, to be used on dark backgrounds
     * @default false
     */
    light?: boolean;
    /**
     * @description The icon to include at start of the label. Can use a custom image using the ImageIconConfig (object with url and alt properties) type
     */
    labelIcon?: DropdownIcon;
    /**
     * @description The icon to replace the default chevron down on the trigger. Can use a custom image using the ImageIconConfig (object with url and alt properties) type
     */
    triggerIcon?: DropdownIcon;
    /**
     * @description The Dropdown placeholder, shown when no value is selected yet. The Dropdown Label property has more priority than this (and the Selected Value more than the Label) to be shown on the Trigger Component (SelectedValue >> Label >> Placeholder)
     */
    placeholder?: React.ReactNode;
    /**
     * @description Disables closing the options modal after selecting an option
     * @default false
     */
    disableCloseAfterSelection?: boolean;
    /**
     * @description Disables closing the options modal when clicking outside of it
     * @default false
     */
    disableCloseWhenClickOutside?: boolean;
    /**
     * @description Disables the modal transparency on the trigger, making it opaque against the background
     * @default false
     */
    disableTransparency?: boolean;
    /**
     * @description Disables showing the options as a modal when the dropdown is in a mobile device
     * @default false
     */
    disableMobileModalMode?: boolean;
    /**
     * @description With this option enabled the Dropdown looks more like an input, showing the borders even when not selected
     * @default false
     */
    showInputBorder?: boolean;
    /**
     * @description With this option enabled the Dropdown hides the border when an option is selected
     * @default false
     */
    hideSelectedInputBorder?: boolean;
    onChange?: (option: DropdownOption[]) => void;
    /**
     * @description Triggers when the dropdown is closed. The dropdown controls itself to close and open, unless you explicitly pass open, onOpen and onClose
     */
    onClose?: (dropdownValue: DropdownOption[] | undefined) => void;
    /**
     * @description Triggers when the dropdown is opened. The dropdown controls itself to close and open, unless you explicitly pass open, onOpen and onClose
     */
    onOpen?: (dropdownValue: DropdownOption[] | undefined) => void;
    /**
     * @description This function is passed to each option and uses the return value (boolean) to decide if the option is selected. By default, the option that has the property value equal to the value the Dropdown has as selected is the one marked as selected
     * @param option The option to be checked if is selected or not
     * @param dropdownValue The current value of the Dropdown
     * @returns boolean
     */
    getOptionSelected?: (option?: DropdownOption, dropdownValue?: DropdownOption[]) => boolean;
    /**
     * @description This function is passed to each option and uses the return value (boolean) to decide if the option is disabled. By default, nothing is disabled
     * @param option The option to be checked if is disabled or not
     * @param dropdownValue The current value of the Dropdown
     * @returns boolean
     */
    getOptionDisabled?: (option?: DropdownOption, dropdownValue?: DropdownOption[]) => boolean;
    /**
     * @description Controls if the dropdown has a search input included inside the options
     * @default false
     */
    enableSearchInput?: boolean;
    /**
     * @description The search input options, inherited from the SearchInput component, that we can override one by one as needed. By default the dropdown implements its own logic for searching, with a search within the label or the value of the option by text substrings (case insensitive), and does not debounce the search (debounceTime: 0 on SearchInput)
     */
    searchInputProps?: Partial<SearchInputProps>;
    /**
     * @description This function is used when the SearchInput updates to filter each option, receiving a boolean for each to show it or not. By default, it checks the option's label and value for matches with the search text, as a substring, case insensitive
     * @param searchTextValue The value of the search input
     * @param optionValue The option value to be filtered
     * @param optionIndex The index of the option in the options array
     * @param optionsArray The array of options to be filtered
     * @returns boolean
     */
    onSearchFilter?: (searchTextValue: string, optionValue: DropdownOption, optionIndex: number, optionsArray: DropdownOption[]) => boolean;
    /**
     * @description Optional 'cancel' button that positions itself at the end of the options the Dropdown shows. It closes the dropdown when is clicked. Receives the label and the onClick function
     *
     * Overriden if `callToActionButton` is passed
     */
    cancelActionButton?: CancelActionButtonProps;
    /**
     * @description Optional 'submit' button that positions itself at the end of the options the Dropdown shows. It sends the current value in a callback to be excecuted when is clicked, while also closing the dropdown options (does not prevent the options from closing the dropdown on selection, that's what the disableCloseAfterSelection prop is for). Receives the label and the onClick function
     *
     * Overriden if `callToActionButton` is passed
     */
    submitActionButton?: SubmitActionButtonProps;
    /**
     * @description Renders an action button at the bottom of the dropdown list. If passed, cancelActionButton and submitActionButton will be ignored
     * @default undefined
     * @type CallToActionButtonProps
     */
    callToActionButton?: CallToActionButtonProps;
    customListClassName?: string;
    /**
     * @description className to be applied to the dropdown label element
     * @type string
     */
    customLabelClassName?: string;
    alignment?: DropdownAlignments;
    /**
     * @description Defines if the Dropdown opens to the top instead of the bottom
     * @default false
     */
    openToTop?: boolean;
    /**
     * @description The Dropdown width for desktop devices. Can be defined as a number (representing pixels) or a string, in which case it will be used as is
     */
    desktopDropdownWidth?: number | string;
    /**
     * @description Defines the max-height property of the dropdown list in desktop
     * @type string | number
     * @default 348px
     */
    desktopDropdownMaxHeight?: number | string;
    iconColor?: string;
    customClassName?: string;
    /**
     * @description Defines if the dropdown trigger should have the same shape and styles as an input field
     * @default false
     */
    formTrigger?: boolean;
    /**
     * @description If formTrigger is true, it defines the size of the form trigger
     * @type DropdownFormTriggerSizes
     * @default DropdownFormTriggerSizes.SMALL
     */
    formTriggerSize?: DropdownFormTriggerSizes;
    /**
     * @description If passed, it renders an info tooltip next to the dropdown list containing the passed node module
     * @type React.ReactNode
     */
    dropdownListInfoTooltip?: React.ReactNode;
    /**
     * The dropdown data-testid. Required for testing purposes
     */
    "data-testid": string;
    /**
     * @description React Node to be used as trigger for the dropdown. If passed, label, triggerIcon and placeholder will be ignored.
     * @type React.ReactNode
     */
    customTrigger?: React.ReactNode;
    /**
     * @description Defines if the dropdown should hide the selected icon when an option is selected
     * @default false
     * @type boolean
     */
    hideSelectedIcon?: boolean;
    /**
     * @description Class name applied to the dropdown trigger element
     * @type string
     */
    customFormTriggerClassName?: string;
}

export interface DropdownSelectProps extends DropdownDefaultProps {
    useRadioButtons?: boolean;
    mode?: DropdownModes.SELECT;
    options: DropdownSelectOption[];
}

export interface DropdownMenuProps extends DropdownDefaultProps {
    useRadioButtons?: never;
    mode?: DropdownModes.MENU;
    options: DropdownMenuOption[];
}

export type DropdownProps = DropdownSelectProps | DropdownMenuProps;

export const isMenuDropdownOption = (option: DropdownOption): option is DropdownMenuOption => "onClick" in option;

export interface DropdownCollapsibleCancelActionButtonProps {
    label: string;
    onClick?: () => void;
}

export interface DropdownCollapsibleSubmitActionButtonProps {
    label: string;
    onClick: (dropdownValue: DropdownCollapsibleValue | undefined) => void;
}

export interface DropdownCollapsibleCallToActionButtonProps {
    label: string;
    onClick: (dropdownOption: DropdownOption | undefined) => void;
    icon?: DropdownIcon;
    preventCloseOnClick?: boolean;
    disabled?: boolean;
}

export enum DropdownCollapsibleOptionModes {
    MULTI_SELECT = "MULTI_SELECT",
    RADIO = "RADIO",
}

export interface DropdownCollapsibleInternalOptionValue {
    groupId: string;
    option: DropdownOption;
    mode?: DropdownCollapsibleOptionModes;
}
export interface DropdownCollapsibleOptionsGroup {
    label: React.ReactNode;
    options: DropdownOption[];
    mode: DropdownCollapsibleOptionModes;
    defaultOpen?: boolean;
}

export interface DropdownCollapsibleGroupValue {
    selectedOptions: string[];
}

export type DropdownCollapsibleValue = Record<string, DropdownCollapsibleGroupValue>;
export type DropdownCollapsibleOptions = Record<string, DropdownCollapsibleOptionsGroup>;

export interface DropdownCollapsibleTriggerConfigs {
    label?: React.ReactNode;
    leadingIcon?: DropdownIcon;
    customTriggerIcon?: {icon: DropdownIcon; color?: string};
    placeholder?: React.ReactNode;
    showBorder?: boolean;
    /**
     * @description Defines if the dropdown trigger should have the same shape and styles as an input field
     * @default false
     */
    formTrigger?: boolean;
    /**
     * @description If formTrigger is true, it defines the size of the form trigger
     * @type DropdownFormTriggerSizes
     * @default DropdownFormTriggerSizes.SMALL
     */
    formTriggerSize?: DropdownFormTriggerSizes;
    hideSelectedInputBorder?: boolean;
    disableTransparency?: boolean;
}

export type DropdownCollapsibleTrigger = React.ReactNode | DropdownCollapsibleTriggerConfigs;

export const isCustomTrigger = (trigger: DropdownCollapsibleTrigger): trigger is React.ReactNode => isValidElement(trigger);

export interface DropdownCollapsibleProps extends Partial<Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange">> {
    options: DropdownCollapsibleOptions;
    /**
     * @description Controls externally if the dropdown is open. The dropdown controls itself to close and open, unless you explicitly pass open, onOpen and onClose
     * @type boolean
     */
    open?: boolean;
    /**
     * @description The Dropdown value
     * @type DropdownCollapsibleValue
     */
    value?: DropdownCollapsibleValue;
    /**
     * @description Controls whether to start with the Dropdown opened
     * @type boolean
     */
    defaultOpen?: boolean;
    /**
     * @description The default value when the Dropdown initializes
     * @type DropdownCollapsibleValue
     */
    defaultValue?: DropdownCollapsibleValue;
    /**
     * @description The Dropdown label to be shown on top of the dropdown trigger, with the same styles of the input label. It also can receive a ReactNode
     * @type React.ReactNode
     */
    formLabel?: React.ReactNode;
    /**
     * @description The title to be shown on top of the dropdown options modal when the dropdown is opened on mobile devices
     * @type React.ReactNode
     */
    mobileTitle?: React.ReactNode;
    /**
     * @description Trigger configs to customize the trigger. It receives a leading icon (optional), a label (optional), a placeholder (optional), a custom trigger icon and color (optional) and if the trigger border should be shown. Optionally, a node can be passed to be rendered as the trigger
     * @type DropdownCollapsibleTrigger
     */
    trigger: DropdownCollapsibleTrigger;
    /**
     * @description Defines if light styles should be applied to the dropdown label and trigger
     * @type boolean
     */
    light?: boolean;
    /**
     * @description Defines if the dropdown shouldn't close when clicking outside of the options list and info tooltip
     * @type boolean
     */
    disableCloseWhenClickOutside?: boolean;
    /**
     * @description Callback to be executed when the dropdown value changes
     * @type (dropdownValue: DropdownCollapsibleValue | undefined) => void
     */
    onChange?: (currentValue: DropdownCollapsibleValue) => void;
    /**
     * @description Callback to be executed when the dropdown is closed
     * @type (dropdownValue: DropdownCollapsibleValue | undefined) => void
     */
    onClose?: (dropdownValue: DropdownCollapsibleValue | undefined) => void;
    /**
     * @description Callback to be executed when the dropdown is opened
     * @type (dropdownValue: DropdownCollapsibleValue | undefined) => void
     */
    onOpen?: (dropdownValue: DropdownCollapsibleValue | undefined) => void;
    /**
     * @description Renders an cancel button at the bottom of the dropdown list.
     * @default undefined
     * @type DropdownCollapsibleCancelActionButtonProps
     */
    cancelActionButton?: DropdownCollapsibleCancelActionButtonProps;
    /**
     * @description Renders an submit button at the bottom of the dropdown list.
     * @default undefined
     * @type DropdownCollapsibleSubmitActionButtonProps
     */
    submitActionButton?: DropdownCollapsibleSubmitActionButtonProps;
    /**
     * @description Renders an action button at the bottom of the dropdown list. If passed, cancelActionButton and submitActionButton will be ignored
     * @default undefined
     * @type CallToActionButtonProps
     */
    callToActionButton?: DropdownCollapsibleCallToActionButtonProps;
    /**
     * @description Defines the alignment of the Dropdown options. The default value RIGHT aligns the options to the right of the label, while LEFT aligns them to the left of the label
     * @default DropdownAlignments.RIGHT
     * @type DropdownAlignments
     */
    alignment?: DropdownAlignments;
    /**
     * @description Defines if the Dropdown opens to the top instead of the bottom
     * @default false
     * @type boolean
     */
    openToTop?: boolean;
    /**
     * @description The Dropdown width for desktop devices. Can be defined as a number (representing pixels) or a string, in which case it will be used as is
     * @default 100%
     * @type string | number
     */
    desktopDropdownWidth?: number | string;
    /**
     * @description Defines the max-height property of the dropdown list in desktop
     * @type string | number
     * @default 348px
     */
    desktopDropdownMaxHeight?: number | string;
    /**
     * @description className to be applied to the dropdown main element
     * @type string
     */
    customClassName?: string;
    /**
     * @description className to be applied to the dropdown list
     * @type string
     */
    customListClassName?: string;
    /**
     * @description If passed, it renders an info tooltip next to the dropdown list containing the passed ReactNode
     * @type React.ReactNode
     */
    dropdownListInfoTooltip?: React.ReactNode;
    /**
     * @description test id to be passed all through the dropdown elements, including wrapper, trigger, options list and options
     * @type string
     */
    "data-testid": string;
}
