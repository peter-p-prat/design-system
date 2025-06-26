import {InputHTMLAttributes} from "react";

enum SwitchSizes {
    SMALL = "sm",
    MEDIUM = "md",
}

enum SwitchVariants {
    LIGHT = "light",
    DARK = "dark",
}

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "checked" | "disabled" | "value"> {
    /**
     * @description Sets the label for the switch (optional)
     */
    label?: string;
    /**
     * @description Defines if the switch is checked from the beginning
     */
    isChecked?: boolean;
    /**
     * @description The switch disabled state;
     */
    isDisabled?: boolean;
    /**
     * @description Defines the switch size;
     * @default SwitchSizes.MEDIUM
     */
    size?: SwitchSizes;
    /**
     * @description Defines the switch color mode;
     * @default SwitchVariants.LIGHT
     */
    variant?: SwitchVariants;
    /**
     * @description The aria-label for the switch element;
     * @default "Toggle switch"
     */
    ariaLabel?: string;
    /**
     * The switch data-testid. Required for testing purposes
     */
    "data-testid": string;
    /**
     * @description The switch onChange callback function;
     */
    onChange?: () => void;
}

export {SwitchProps, SwitchSizes, SwitchVariants};
