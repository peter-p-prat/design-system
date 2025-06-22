import * as typography from "@app/Foundations/theme/typography/styles/_exports.module.scss";

export interface TypographyVariation {
    name: string;
    value: string;
}
export type TypographyMap = Record<string, TypographyVariation[]>;

const typographyVariables: Record<string, string> = typography as any;
const typographySet: string[] | undefined = typographyVariables?.variants?.split(" ");

export const typographyMap: TypographyMap =
    typographySet?.reduce((acc, spacingName) => {
        const typographyValues = typographyVariables[spacingName]?.split(" ");

        const typoValueObj = typographyValues?.map((spacing) => {
            const [variationName, variationValue] = spacing.split("_");
            return {
                name: variationName,
                value: variationValue,
            };
        });
        return {...acc, [spacingName]: typoValueObj};
    }, {}) ?? {};
