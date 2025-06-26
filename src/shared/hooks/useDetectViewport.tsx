import {useEffect, useState} from "react";

import {Breakpoints, breakpointsMap} from "@app/Foundations";

export const DEFAULT_ROOT_ELEMENT = "body";

const getWidthBreakpoint = (width: number): Breakpoints => {
    if (width >= breakpointsMap[Breakpoints.DESKTOP]) return Breakpoints.DESKTOP;
    if (width >= breakpointsMap[Breakpoints.TABLET]) return Breakpoints.TABLET;
    return Breakpoints.MOBILE;
};

const detectElementBreakpoint = (selector: string): {breakpoint: Breakpoints; height: number} => {
    const root = document.querySelector(selector);
    if (root) {
        const {width, height} = root.getBoundingClientRect();
        return {breakpoint: getWidthBreakpoint(width), height};
    }
    return {breakpoint: Breakpoints.MOBILE, height: 0};
};

export const useDetectViewport = (rootSelector = DEFAULT_ROOT_ELEMENT): {viewport: Breakpoints; viewportHeight: number} => {
    const [viewport, setViewport] = useState<Breakpoints>(detectElementBreakpoint(rootSelector).breakpoint);
    const [viewportHeight, setViewportHeight] = useState<number>(detectElementBreakpoint(rootSelector).height);

    const observer = new ResizeObserver((entries) => {
        // this will get called whenever div dimension changes
        entries.forEach((entry) => {
            const {width, height} = entry.contentRect;

            setViewport(() => getWidthBreakpoint(width));
            setViewportHeight(height);
        });
    });

    useEffect(() => {
        const root = document.querySelector(rootSelector);
        if (root) observer.observe(root);

        return () => {
            observer.disconnect();
        };
    });

    return {viewport, viewportHeight};
};
