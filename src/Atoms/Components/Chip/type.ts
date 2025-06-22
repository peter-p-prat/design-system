import {IconsNames} from "@app/Foundations";

interface ChipPropsBase {
    /**
     * The text to be displayed in the chip
     */
    label?: string | React.ReactNode;
    /**
     * @description The chip variant
     * @default ChipVariants.OUTLINED
     */
    variant?: ChipVariantsType;
    /**
     * @description The chip color
     * @default ChipColors.PRIMARY
     */
    color?: ChipColorsType;
    /**
     * @description The chip size
     * @default ChipSizes.SMALL
     */
    size?: ChipSizesType;
    /**
     * @description The chip shape
     * @default ChipShapes.SQUARED
     */
    shape?: ChipShapesType;
    /**
     * @description If passed, the chip will have lighter colors and lower opacity
     */
    inactive?: boolean;
    /**
     * If passed, the chip will be clickeable
     */
    onClick?: () => void;
    /**
     * If passed, a clear button will be shown on the right side of the chip
     */
    onClear?: () => void;
    /**
     * @deprecated Use `data-testid` instead
     */
    testId?: string;
    /**
     * The chip data-testid. Required for testing purposes
     */
    "data-testid": string;
    /**
     * @description Custom class to be passed to the chip
     */
    customClassName?: string;
}

interface ChipPropsWithIcon extends ChipPropsBase {
    leadingImg?: never;
    /**
     * If passed, the icon will be shown on the left side of the chip
     */
    leadingIcon?: IconsNames;
}

interface ChipPropsWithImg extends ChipPropsBase {
    /**
     * If passed, the img will be shown on the left side of the chip
     */
    leadingImg?: string;
    leadingIcon?: never;
}

type ChipProps = ChipPropsWithIcon | ChipPropsWithImg;

const ChipVariants = {
    FILLED: "filled",
    OUTLINED: "outlined",
    FILLED_LIGHT: "filled-light",
} as const;
type ChipVariantsKeys = keyof typeof ChipVariants;
type ChipVariantsType = (typeof ChipVariants)[ChipVariantsKeys];

const ChipColors = {
    GRAY: "gray",
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    RED: "red",
    YELLOW: "yellow",
    GREEN: "green",
    BLUE: "blue",
    WHITE: "white",
} as const;
type ChipColorsKeys = keyof typeof ChipColors;
type ChipColorsType = (typeof ChipColors)[ChipColorsKeys];

const ChipSizes = {
    SMALL: "sm",
    LARGE: "lg",
} as const;
type ChipSizesKeys = keyof typeof ChipSizes;
type ChipSizesType = (typeof ChipSizes)[ChipSizesKeys];

const ChipShapes = {
    SQUARED: "squared",
    ROUNDED: "rounded",
} as const;
type ChipShapesKeys = keyof typeof ChipShapes;
type ChipShapesType = (typeof ChipShapes)[ChipShapesKeys];

export {ChipProps, ChipColors, ChipColorsType, ChipSizes, ChipSizesType, ChipShapes, ChipShapesType, ChipVariants, ChipVariantsType};
