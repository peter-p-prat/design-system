enum ButtonDesignVariants {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    LIGHT = "light",
    GHOST = "ghost",
}

const ButtonVariants = {
    FILLED: "filled",
    OUTLINED: "outlined",
    LIGHT: "light",
    GHOST: "ghost",
} as const;
type ButtonVariantsKeys = keyof typeof ButtonVariants;
type ButtonVariantsType = (typeof ButtonVariants)[ButtonVariantsKeys];

const ButtonTypes = {
    DEFAULT: "default",
    LIGHT: "light",
} as const;
type ButtonTypesKeys = keyof typeof ButtonTypes;
type ButtonTypesType = (typeof ButtonTypes)[ButtonTypesKeys];

const ButtonSizes = {
    SMALL: "sm",
    MEDIUM: "md",
    LARGE: "lg",
    EXTRA_LARGE: "xl",
    DOUBLE_EXTRA_LARGE: "xl-2",
} as const;
type ButtonSizesKeys = keyof typeof ButtonSizes;
type ButtonSizesType = (typeof ButtonSizes)[ButtonSizesKeys];

export {ButtonDesignVariants, ButtonTypes, ButtonTypesType, ButtonSizes, ButtonSizesType, ButtonVariants, ButtonVariantsType};
