type prefixMaximumLength = string & {__length?: never};

const MIN_PREFIX_LENGTH = 1;
const MAX_PREFIX_LENGTH = 3;

/**
 * Validates if the provided string meets the length requirements for a leading prefix
 * @param leadingPrefix - The string to validate as a leading prefix
 * @returns True if the string length is between 1 and 3 characters
 */
export const isValidPrefixLabel = (leadingPrefix: string): leadingPrefix is prefixMaximumLength => {
    if (!leadingPrefix) return false;
    return leadingPrefix.length >= MIN_PREFIX_LENGTH && leadingPrefix.length <= MAX_PREFIX_LENGTH;
};
