enum Breakpoints {
    MOBILE = "mobile",
    TABLET = "tablet",
    DESKTOP = "desktop",
}

const breakpointsMap: Record<Breakpoints, number> = {
    [Breakpoints.MOBILE]: 0,
    [Breakpoints.TABLET]: 768,
    [Breakpoints.DESKTOP]: 1_220,
};

export {Breakpoints, breakpointsMap};
