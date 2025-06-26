import {RefObject, useEffect, useState} from "react";

interface UseDetectScrollProps<T> {
    ref: RefObject<T | null>;
}

interface UseDetectScroll {
    isScrolledFromTop: boolean;
    scrollTop: number;
    isScrolledFromLeft: boolean;
    scrollLeft: number;
    scrollWidth: number;
    scrollHeight: number;
}

export const useDetectScroll = <T extends Element>({ref}: UseDetectScrollProps<T>): UseDetectScroll => {
    const [scrollInfo, setScrollInfo] = useState({
        isScrolledFromTop: false,
        scrollTop: 0,
        isScrolledFromLeft: false,
        scrollLeft: 0,
        scrollWidth: 0,
        scrollHeight: 0,
    });

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener(
                "scroll",
                (e) => {
                    if (e.target instanceof Element) {
                        setScrollInfo({
                            isScrolledFromTop: e.target.scrollTop > 0,
                            scrollTop: e.target.scrollTop,
                            isScrolledFromLeft: e.target.scrollLeft > 0,
                            scrollLeft: e.target.scrollLeft,
                            scrollWidth: e.target.scrollWidth,
                            scrollHeight: e.target.scrollHeight,
                        });
                    }
                },
                {passive: true},
            );
        }
    }, [ref]);

    return scrollInfo;
};
