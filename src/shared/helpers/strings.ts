export const findSubstringIgnoreCase = (container: string, searchText: string): boolean => {
    const lowerContainer = container.toLowerCase();
    const lowerSearchText = searchText.toLowerCase();
    return lowerContainer.includes(lowerSearchText);
};

/**
 * Returns a normalized string (trim and lowercase)
 * @param str The string to normalize
 * @returns string
 */
export const normalizeString = (str: string) => str.trim().toLowerCase();

/**
 * Returns boolean if the includedString is included in the searchInString (normalizing both strings, trim and lowercase)
 * @param includedString The string to search for
 * @param searchInString The string to search in
 * @returns boolean
 */
export const includesNormalized = (includedString: string, searchInString: string): boolean => {
    return normalizeString(searchInString).includes(normalizeString(includedString));
};

/**
 * Validates if the input string length is within the specified maximum length.
 * @param value - The string to validate
 * @param maxLength - The maximum allowed length
 * @returns true if the value length is valid, false otherwise
 */
export const isValidLength = (value: string, maxLength: number) => {
    return value.trim().length <= maxLength;
};
