export const generateSizePropertyValue = (properyValue: number | string) => {
    return typeof properyValue === "number" ? `${String(properyValue)}px` : properyValue;
};
