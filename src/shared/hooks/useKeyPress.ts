import {useCallback, useEffect, useState} from "react";

interface Handler {
    keyDownHandler?: (...args: any[]) => unknown;
    keyUpHandler?: (...args: any[]) => unknown;
}

interface KeyPressed {
    isKeyPressed: boolean;
}

export enum ETargetKey {
    ESCAPE = "Escape",
    ARROW_UP = "ArrowUp",
    ARROW_DOWN = "ArrowDown",
    BACKSPACE = "Backspace",
}

/**
 * @param targetKey key name to check
 * @param handlers optional handlers when pressing / releasing
 * @returns object with property {isKeyPressed} indicating when user is pressing the key
 */
const useKeyPress = (targetKey: ETargetKey, handlers?: Handler): KeyPressed => {
    const [isKeyPressed, setIsKeyPressed] = useState(false);

    const keyDownHandler = useCallback(
        ({key}: {key: string}): void => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
            if (key === targetKey) {
                handlers?.keyDownHandler?.();
                setIsKeyPressed(true);
            }
        },
        [handlers, targetKey],
    );

    const keyUpHandler = useCallback(
        ({key}: {key: string}): void => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
            if (key === targetKey) {
                handlers?.keyUpHandler?.();
                setIsKeyPressed(false);
            }
        },
        [handlers, targetKey],
    );

    useEffect(() => {
        window.addEventListener("keydown", keyDownHandler);
        window.addEventListener("keyup", keyUpHandler);

        return () => {
            window.removeEventListener("keydown", keyDownHandler);
            window.removeEventListener("keyup", keyUpHandler);
        };
    }, [keyDownHandler, keyUpHandler]);
    return {isKeyPressed};
};

export default useKeyPress;
