export interface MaskPattern {
    /**
     * The mask pattern
     * @example
     * "##/##/####"
     */
    mask: string;
    /**
     * The patterns to be used for the mask
     * @example
     * { "#": /\d/ }
     */
    patterns: Record<string, RegExp>;
}

/**
 * Formats a value according to a given mask pattern
 * @param value - The value to format
 * @param config - Mask configuration object
 * @returns Formatted string
 *
 * @example
 * ```ts
 * // Date formatting
 * mask("12345678", {
 *   mask: "##/##/####",
 *   patterns: { "#": /\d/ }
 * }) // Returns "12/34/5678"

 * ```
 */
export const mask = (value: string, {mask, patterns}: MaskPattern): string => {
    if (!value) return "";

    const result: string[] = [];
    let valueIndex = 0;

    for (let maskIndex = 0; maskIndex < mask.length && valueIndex < value.length; maskIndex++) {
        const maskChar = mask.charAt(maskIndex);
        const nextMaskChar = mask.charAt(maskIndex + 1);
        const patternEntry = Object.entries(patterns).find(([key]) => key === maskChar);
        const nextCharIsMask = Object.entries(patterns).some(([key]) => key !== nextMaskChar);

        if (!patternEntry) {
            continue;
        }

        const [, pattern] = patternEntry;
        let matched = false;

        while (valueIndex < value.length && !matched) {
            const char = value.charAt(valueIndex);
            valueIndex++;

            if (pattern.test(char)) {
                result.push(char);
                matched = true;
            }
        }

        if (matched && nextCharIsMask) {
            result.push(nextMaskChar);
        }
    }

    return result.join("");
};
