enum ButtonDesignVariants {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    LIGHT = "light",
    GHOST = "ghost",
    GHOST_V2 = "ghostV2",
}

const ButtonVariants = {
    FILLED: "filled",
    OUTLINED: "outlined",
    LIGHT: "light",
    GHOST: "ghost",
    GHOST_V2: "ghostV2",
    OVER_PRIMARY: "overPrimary",
} as const;
type ButtonVariantsKeys = keyof typeof ButtonVariants;
type ButtonVariantsType = (typeof ButtonVariants)[ButtonVariantsKeys];

const InputButtonVariants = {
    FILLED: "filled",
    OUTLINED: "outlined",
} as const;
type InputButtonVariantsKeys = keyof typeof InputButtonVariants;
type InputButtonVariantsType = (typeof InputButtonVariants)[InputButtonVariantsKeys];

const ButtonAppearances = {
    DEFAULT: "default",
    LIGHT: "light",
    GRAY: "gray",
} as const;
type ButtonAppearancesKeys = keyof typeof ButtonAppearances;
type ButtonAppearancesType = (typeof ButtonAppearances)[ButtonAppearancesKeys];

const ButtonSizes = {
    EXTRA_SMALL: "xs",
    SMALL: "sm",
    MEDIUM: "md",
    LARGE: "lg",
    EXTRA_LARGE: "xl",
    DOUBLE_EXTRA_LARGE: "xl-2",
} as const;
type ButtonSizesKeys = keyof typeof ButtonSizes;
type ButtonSizesType = (typeof ButtonSizes)[ButtonSizesKeys];

const ButtonShapes = {
    ROUNDED: "rounded",
    SQUARE: "square",
} as const;
type ButtonShapesKeys = keyof typeof ButtonShapes;
type ButtonShapesType = (typeof ButtonShapes)[ButtonShapesKeys];

const ButtonJustifyContent = {
    CENTER: "center",
    START: "start",
    END: "end",
    SPACE_BETWEEN: "space-between",
    SPACE_AROUND: "space-around",
    SPACE_EVENLY: "space-evenly",
} as const;
type ButtonJustifyContentKeys = keyof typeof ButtonJustifyContent;
type ButtonJustifyContentType = (typeof ButtonJustifyContent)[ButtonJustifyContentKeys];

export {
    ButtonDesignVariants,
    ButtonAppearances,
    ButtonAppearancesType,
    ButtonSizes,
    ButtonSizesType,
    ButtonShapes,
    ButtonShapesType,
    ButtonVariants,
    ButtonVariantsType,
    InputButtonVariants,
    InputButtonVariantsType,
    ButtonJustifyContent,
    ButtonJustifyContentType,
};
