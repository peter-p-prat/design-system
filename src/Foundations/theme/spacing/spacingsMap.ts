import * as spacings from "@app/Foundations/theme/spacing/styles/_exports.module.scss";

export type SpacingVariation = {name: string; value: string};
export type SpacingsMap = Record<string, SpacingVariation[]>;

const spacingVariables: Record<string, string> = spacings as any;
const spacingsSet: string[] | undefined = spacingVariables?.spacings?.split(" ");

export const spacingsMap: SpacingsMap =
    spacingsSet?.reduce((acc, spacingName) => {
        const spacingValues = spacingVariables[spacingName]?.split(" ");

        const spacingValueObj = spacingValues?.map((spacing) => {
            const [variationName, variationValue] = spacing.split("_");
            return {
                name: variationName,
                value: variationValue,
            };
        });
        return {...acc, [spacingName]: spacingValueObj};
    }, {}) ?? {};
