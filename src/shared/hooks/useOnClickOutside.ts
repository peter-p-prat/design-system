import {RefObject, useEffect} from "react";

type ClickOutsideEvent = (MouseEvent | TouchEvent) & {path?: any[]};

/**
 * This hook checks if the user clicks outside of some element and if it does, uses the handler
 * * Firstly it checks if the target contains the element (this was used in the beginning and WAS enough)
 * * Secondly, it checks if the ref is in the event path, this was added when we noticed the click event
 * target on our extension just shows the OUTER LAYER, with the path we know exactly from where we are to
 * the outside elements, then if our ref is included in that array
 * @param ref ref to use as the exception (clicking outside of this)
 * @param handler What to do when we click outside? (optional event passed into the function)
 */
export const useOnClickOutside = (ref: RefObject<HTMLElement | null>, handler?: (event?: ClickOutsideEvent) => void) => {
    useEffect(() => {
        const listener = (event: ClickOutsideEvent) => {
            if (
                !ref.current ||
                ref.current.contains(event.target as Node) ||
                event.path?.includes(ref.current) ||
                event.composedPath().includes(ref.current) ||
                !handler
            ) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
};
