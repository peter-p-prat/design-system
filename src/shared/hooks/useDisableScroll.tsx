import {useEffect, useMemo, useRef} from "react";

interface UseDisableScrollProps {
    condition: boolean;
    elementSelector?: string;
}

// TODO - Known issue: if more than one component uses this hook, they will conflict to lock / unlock the element scroll
// Example: Mobile header menu in WebappV2 locks the scroll, Dropdown locks it again when opened and unlocks it when it closes, remaining unlocked for both
export const useDisableScroll = ({condition, elementSelector = "body"}: UseDisableScrollProps): void => {
    const targetElement: HTMLElement = useMemo(() => document.querySelector(elementSelector) ?? document.body, [elementSelector]);
    const prevOverflowValue = targetElement.style.overflow;
    const prevOverflowValueRef = useRef(prevOverflowValue && prevOverflowValue !== "hidden" ? prevOverflowValue : "unset");

    useEffect(() => {
        targetElement.style.overflow = condition ? "hidden" : prevOverflowValueRef.current;

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            targetElement.style.overflow = prevOverflowValueRef.current;
        };
    }, [condition, targetElement]);
};
