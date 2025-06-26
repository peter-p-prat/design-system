import {KeyboardEvent} from "react";

interface ExtraOptions {
    disableKeydown?: boolean;
    disableKeypress?: boolean;
    disableEnter?: boolean;
    disableSpacebar?: boolean;
}

/**
 * Wrapper to convert a function into being capable of triggering from
 * Enter or Spacebar keys, to comply with a11 onKeyDown on non-clickable
 * elements
 * @param handler the function to call in case of Enter or Spacebar
 * @returns the same handler wrapped in a custom trigger
 */
export const onKeyDownA11y = <T extends Element>(
    handler: (...args: unknown[]) => unknown,
    extraOptions?: ExtraOptions,
): ((event: KeyboardEvent<T>) => void) => {
    const allowedEventTypes: string[] = [];
    if (!extraOptions?.disableKeydown) allowedEventTypes.push("keydown");
    if (!extraOptions?.disableKeypress) allowedEventTypes.push("keypress");

    const allowedKeys: string[] = [];
    if (!extraOptions?.disableEnter) allowedKeys.push("Enter");
    if (!extraOptions?.disableSpacebar) allowedKeys.push(" ");

    return function onKeyDown(event) {
        if (allowedEventTypes.includes(event.type) && allowedKeys.includes(event.key)) {
            handler();
        }
    };
};
