import * as blurs from "@app/Foundations/theme/blurs/styles/_exports.module.scss";

export type BlurVariation = {name: string; value: string};
export type BlursMap = Record<string, BlurVariation[]>;

const blurVariables: Record<string, string> = blurs as any;
const blursSet: string[] | undefined = blurVariables?.blurs?.split(" ");

export const blursMap: BlursMap =
    blursSet?.reduce((acc, spacingName) => {
        const spacingValues = blurVariables[spacingName]?.split(" ");

        const spacingValueObj = spacingValues?.map((spacing) => {
            const [variationName, variationValue] = spacing.split("_");
            return {
                name: variationName,
                value: variationValue,
            };
        });
        return {...acc, [spacingName]: spacingValueObj};
    }, {}) ?? {};
