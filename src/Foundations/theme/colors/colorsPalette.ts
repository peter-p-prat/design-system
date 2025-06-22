import * as colors from "@app/Foundations/theme/colors/styles/_exports.module.scss";

export type ColorVariation = {name: string; value: string};
export type ColorPalette = Record<string, ColorVariation[]>;

const colorVariables: Record<string, string> = colors as any;
const colorsSet: string[] = colorVariables?.colors?.split(" ");

export const colorsPalette: ColorPalette = colorsSet.reduce(
    (acc, colorName) => {
        const colorValues = colorVariables[colorName]?.split(/\s(?!#)/g);

        const colorValueObj = colorValues.map((color) => {
            const [variationName, variationValue] = color.split("_");
            return {
                name: variationName,
                value: variationValue,
            };
        });
        return {...acc, [colorName]: colorValueObj};
    },
    {},
);
