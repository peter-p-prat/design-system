import {useMemo} from "react";
import {OptionsType} from "embla-carousel/components/Options";

import {Breakpoints} from "@app/Foundations";
import {BreakpointsConfigs, Options} from "@app/Molecules";
import {useDetectViewport} from "@app/shared";

interface UseCarouselOptionsProps {
    breakpoints?: BreakpointsConfigs;
    options?: Options;
    responsiveRootElementSelector?: string;
}

interface UseCarouselOptions {
    emblaOptions: Partial<OptionsType>;
    carouselOptions?: Options;
}

export const DEFAULT_CAROUSEL_OPTIONS = {showDots: true, slidesToShow: 1, gap: 12};

export const useCarouselOptions = ({breakpoints, options, responsiveRootElementSelector}: UseCarouselOptionsProps): UseCarouselOptions => {
    const {viewport} = useDetectViewport(responsiveRootElementSelector);

    const finalOptions = useMemo(() => {
        if (viewport === Breakpoints.DESKTOP && breakpoints?.desktop) {
            return {
                ...options,
                ...breakpoints.desktop,
            };
        }
        if (viewport === Breakpoints.TABLET && breakpoints?.tablet) {
            return {
                ...options,
                ...breakpoints.tablet,
            };
        }
        if (viewport === Breakpoints.MOBILE && breakpoints?.mobile) {
            return {
                ...options,
                ...breakpoints.mobile,
            };
        }
        return options;
    }, [breakpoints, options, viewport]);

    const emblaFinalOptions: Partial<OptionsType> = useMemo(() => {
        return {
            align: "start",
            slidesToScroll: finalOptions?.slidesToShow ?? DEFAULT_CAROUSEL_OPTIONS.slidesToShow,
            dragFree: viewport === Breakpoints.MOBILE,
            ...finalOptions?.emblaOptions,
        };
    }, [finalOptions, viewport]);

    return {emblaOptions: emblaFinalOptions, carouselOptions: finalOptions};
};
