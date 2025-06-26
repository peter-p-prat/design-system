type ConditionalClass = Record<string | number | symbol, boolean>;
type ClassNamesParams = (string | ConditionalClass | undefined)[];

/**
 * Helper function to safely create className objects from CSS modules
 * Bypasses TypeScript's strict checking for computed properties
 *
 * @param entries - Array of [cssClass, condition] tuples
 * @returns Object with cssClass keys and condition values
 */
export function conditionalClass(...entries: [any, boolean][]): ConditionalClass {
    return entries.reduce<ConditionalClass>((obj, [key, value]) => {
        obj[String(key)] = value;
        return obj;
    }, {});
}

/**
 * Helper function to safely access a style property by key
 * Safely handles cases where the key doesn't exist in the styles object
 *
 * @param styles - CSS module styles object
 * @param key - Key to access (typically an enum value)
 * @returns The CSS class string or undefined if not found
 */
export function styleByKey(styles: Record<string, string>, key: any): string | undefined {
    // Convert key to string to ensure it can be used as an index
    const stringKey = String(key);

    // Check if the key exists in the styles object
    return stringKey in styles ? styles[stringKey] : undefined;
}

/**
 * A helper function to handle class names conditions easily.
 * Receives an object containing strings or an object with the CSS class as key
 * and a condition to add or remove it as value.
 *
 * @param classNames - The classnames to be applied separated by a comma,
 * and/or an object where the key is the className and the value is the condition when this class should be applied
 * @returns The classes separated by a space
 */
export function className(...classNames: ClassNamesParams): string {
    const classes: string[] = [];

    classNames.forEach((classNameToAdd) => {
        if (typeof classNameToAdd === "object" && classNameToAdd !== null) {
            for (const key in classNameToAdd) {
                if (Object.prototype.hasOwnProperty.call(classNameToAdd, key) && classNameToAdd[key]) {
                    // Always convert key to string when adding to classes array
                    classes.push(String(key));
                }
            }
        } else if (classNameToAdd) {
            classes.push(classNameToAdd);
        }
    });

    return classes.join(" ");
}
