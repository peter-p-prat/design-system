type ClassNamesParams = Array<string | Record<string, boolean>>;
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
        if (typeof classNameToAdd === "object") {
            for (const key in classNameToAdd) {
                if (
                    Object.prototype.hasOwnProperty.call(classNameToAdd, key) &&
                    classNameToAdd[key]
                ) {
                    classes.push(key);
                }
            }
        } else {
            classes.push(classNameToAdd);
        }
    });

    return classes.join(" ");
}
