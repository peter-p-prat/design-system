import {useCallback, useState} from "react";

import useKeyPress, {ETargetKey} from "./useKeyPress";

interface Props {
    listLength: number;
    initialCursor?: number;
    preventChangesIf?: () => boolean;
}

/**
 * Hook used to manage an internal cursor, that goes up when the down key is pressed and goes down when the up key is pressed. Used to control pagination or navigation through a list
 * @param listLength The length of the list the cursor will cycle through
 * @param initialCursor The cursor number to use at the start and the reset
 * @param preventChangesIf Function used to prevent changes in the cursor if it returns true
 * @returns the number of the current cursor, custom handlers to go up or down and a resetCursor function to reset it
 */
export const useListCursor = ({listLength, initialCursor, preventChangesIf}: Props) => {
    const [cursor, setCursor] = useState<number | undefined>(initialCursor);

    const handleDownPress = () => {
        if (preventChangesIf?.()) return;
        if (!cursor && cursor !== 0) {
            setCursor(0);
            return;
        }
        setCursor((prevState) => ((prevState || prevState === 0) && prevState < listLength - 1 ? prevState + 1 : 0));
    };

    const handleUpPress = () => {
        if (preventChangesIf?.()) return;
        if (!cursor && cursor !== 0) {
            setCursor(listLength - 1);
            return;
        }
        setCursor((prevState) => (prevState && prevState > 0 ? prevState - 1 : listLength - 1));
    };

    const resetCursor = useCallback(() => {
        setCursor(initialCursor);
    }, [initialCursor]);

    useKeyPress(ETargetKey.ARROW_DOWN, {keyDownHandler: handleDownPress});

    useKeyPress(ETargetKey.ARROW_UP, {keyDownHandler: handleUpPress});

    return {cursor, handleDownPress, handleUpPress, resetCursor};
};
