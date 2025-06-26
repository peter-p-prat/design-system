import {colorsPalette} from "@app/Foundations";

enum ColorsTypesEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  GRAY = "gray",
  BG = "bg",
  ERROR = "error",
  SUCCESS = "success",
  PROGRESS = "progress",
  WARNING = "warning",
  NEUTRAL = "neutral",
  BUTTONS = "buttons",
  BUTTON_OVER_PRIMARY = "buttonOverPrimary",
}

type ColorsType = `${ColorsTypesEnum}`;

type DefaultColorVariations =
  | "25"
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

type BGColorVariations = "1" | "2" | "3" | "4" | "5";
type NeutralColorVariations = "white" | "black";
type ButtonOverPrimaryColorVariations =
  | "bg-color"
  | "label-color"
  | "hover-overlay"
  | "pressed-overlay"
  | "disabled";

type ColorVariations<T extends ColorsType> =
  T extends `${ColorsTypesEnum.BUTTON_OVER_PRIMARY}`
    ? ButtonOverPrimaryColorVariations
    : T extends `${ColorsTypesEnum.BG}`
      ? BGColorVariations
      : T extends `${ColorsTypesEnum.NEUTRAL}`
        ? NeutralColorVariations
        : DefaultColorVariations;

/**
 * Returns a color value from the palette, using the color type and variation name
 * @param colorType the color type between the predefined ones
 * @param variationName the variation name specific to the color type
 * @returns a string value, representing the color, with a possible css var value
 */
export function getColorFromPalette<T extends ColorsType>(
  colorType: T,
  variationName: ColorVariations<T>
): string {
  const colorVariations = colorsPalette[colorType];
  const colorVariation = colorVariations?.find(
    (variation) => variation.name === variationName
  );
  if (!colorVariation) {
    throw new Error(
      `Color variation ${colorType} => ${variationName} not found in palette`
    );
  }
  return colorVariation.value;
}
