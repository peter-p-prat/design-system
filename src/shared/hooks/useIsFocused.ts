import {RefObject, useEffect, useState} from "react";

/**
 * Hook used to check if an element is currently being focused
 * @param ref ref to the element to check when its focused
 * @returns a prop indicating when the element is focused
 */
export const useIsElementFocused = <T extends Element>(ref: RefObject<T | null>) => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const handleFocus = (event: Event) => {
            const target = event.target as Node;
            if (ref.current && ref.current.contains(target)) {
                setIsFocused(true);
                return;
            }
            setIsFocused(false);
        };

        document.addEventListener("focus", handleFocus, true);

        return () => {
            document.removeEventListener("focus", handleFocus, true);
        };
    }, [ref]);

    return isFocused;
};
