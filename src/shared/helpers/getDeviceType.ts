import {Breakpoints} from "@app/Foundations";

const TABLET_PATTERNS = {
    IPAD: /(ipad)/i,
    ANDROID_TABLET: /android/i,
    ANDROID_MOBILE: /(mobi|mobile)/i,
    GENERIC_TABLET: /tablet|playbook/i,
    FOLDABLE: /fold/i,
} as const;

const MOBILE_PATTERNS = {
    GENERIC_MOBILE: /(mobi|android.*mobile|iphone|ipod|blackberry|iemobile|opera mini)/i,
    TOUCH_DEVICES: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i,
} as const;

export const getDeviceType = (): Breakpoints => {
    // If navigator is undefined (for example, during server-side rendering), default to DESKTOP.
    if (typeof navigator === "undefined") {
        return Breakpoints.DESKTOP;
    }

    const ua = navigator.userAgent.toLowerCase();
    const maxTouchPoints = navigator.maxTouchPoints || 0;

    // Traditional tablets
    const isTraditionalTablet =
        TABLET_PATTERNS.IPAD.test(ua) ||
        (TABLET_PATTERNS.ANDROID_TABLET.test(ua) && !TABLET_PATTERNS.ANDROID_MOBILE.test(ua)) ||
        TABLET_PATTERNS.FOLDABLE.test(ua) ||
        TABLET_PATTERNS.GENERIC_TABLET.test(ua);

    if (isTraditionalTablet) {
        return Breakpoints.TABLET;
    }

    // Mobile devices
    if (MOBILE_PATTERNS.GENERIC_MOBILE.test(ua) || (maxTouchPoints > 0 && MOBILE_PATTERNS.TOUCH_DEVICES.test(ua))) {
        return Breakpoints.MOBILE;
    }

    return Breakpoints.DESKTOP;
};
