import {useEffect, useRef} from "react";

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: unknown[]) => void;
/**
 *
 * @param func The original, non debounced function (You can pass any number of args to it)
 * @param delay The delay (in ms) for the function to return
 * @returns The debounced function, which will run only if the debounced function has not been called in the last (delay) ms
 */

export function useDebounce<Func extends SomeFunction>(func: Func, delay = 1_000) {
    const timer = useRef<Timer | undefined>(undefined);

    useEffect(() => {
        return () => {
            if (!timer.current) return;
            clearTimeout(timer.current);
        };
    }, []);

    const debouncedFunction = ((...args: Parameters<Func>) => {
        const newTimer = setTimeout(() => {
            func(...args);
        }, delay);
        clearTimeout(timer.current);
        timer.current = newTimer;
    }) as Func;

    const resetDebounce = () => {
        clearTimeout(timer.current);
    };

    return {debouncedFunction, resetDebounce};
}
