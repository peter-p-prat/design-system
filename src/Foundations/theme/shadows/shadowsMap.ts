import * as shadows from "@app/Foundations/theme/shadows/styles/_exports.module.scss";

export interface ShadowVariation {
    name: string;
    value: string;
}
export type ShadowsMap = Record<string, ShadowVariation[]>;

const shadowVariables: Record<string, string> = shadows as any;
const shadowSet: string[] | undefined = shadowVariables?.shadows?.split(" ");

export const shadowsMap: ShadowsMap =
    shadowSet?.reduce((acc, shadowName) => {
        const shadowValues = shadowVariables[shadowName]?.split("__");
        shadowValues?.pop();

        const shadowValueObj = shadowValues?.map((shadow) => {
            const [variationName, variationValue] = shadow.trim().split("_");
            return {
                name: variationName,
                value: variationValue,
            };
        });
        return {...acc, [shadowName]: shadowValueObj};
    }, {}) ?? {};
