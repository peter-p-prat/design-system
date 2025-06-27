import React, {CSSProperties, ReactNode, useMemo} from "react";
import {EmblaOptionsType} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import {className, conditionalClass} from "@app/shared";

import {NextButton, PrevButton} from "./CarouselArrowButtons";
import {DotButton} from "./CarouselDots";
import {DEFAULT_CAROUSEL_OPTIONS, useCarouselButtons, useCarouselDots, useCarouselOptions} from "./hooks";

import styles from "./Carousel.module.scss";

export interface Options {
    overflowVisible?: boolean;
    showButtons?: boolean;
    showDots?: boolean;
    slidesToShow?: number;
    gap?: number;
    outlined?: boolean;
    lightMode?: boolean;
    emblaOptions?: EmblaOptionsType;
}

export interface BreakpointsConfigs {
    desktop?: Options;
    tablet?: Options;
    mobile?: Options;
}

export interface CarouselProps {
    options?: Options;
    breakpoints?: BreakpointsConfigs;
    responsiveRootElementSelector?: string;
    children: ReactNode[];
}

export const Carousel = ({children, options, breakpoints, responsiveRootElementSelector}: CarouselProps) => {
    const {emblaOptions, carouselOptions} = useCarouselOptions({options, breakpoints, responsiveRootElementSelector});
    const {
        outlined,
        overflowVisible,
        showButtons,
        lightMode,
        showDots = DEFAULT_CAROUSEL_OPTIONS.showDots,
        slidesToShow = DEFAULT_CAROUSEL_OPTIONS.slidesToShow,
        gap = DEFAULT_CAROUSEL_OPTIONS.gap,
    } = carouselOptions ?? {};
    const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);
    const slideSize = useMemo(() => 100 / slidesToShow, [slidesToShow]);
    const {selectedIndex, scrollSnaps, shouldShowDots, onDotButtonClick} = useCarouselDots(emblaApi);
    const {prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} = useCarouselButtons(emblaApi);

    return (
        <section
            className={styles.carouselWrapper}
            style={{"--slide-spacing": `${String(gap)}px`, "--slide-size": `${String(slideSize)}%`} as CSSProperties}
        >
            <div className={styles.viewportButtonsContainer}>
                <div
                    className={className(
                        styles.carouselViewport,
                        conditionalClass([styles.overflowVisible, !!overflowVisible], [styles.outlined, !!outlined]),
                    )}
                    ref={emblaRef}
                >
                    <div className={styles.slidesContainer}>
                        {children.length > 0 &&
                            children.map((slide, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <div key={index}>{slide}</div>
                            ))}
                    </div>
                </div>
                {showButtons && (
                    <>
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </>
                )}
            </div>

            {showDots && shouldShowDots && (
                <div className={styles.carouselDots}>
                    {scrollSnaps.map((snap, index) => (
                        <DotButton
                            lightMode={lightMode}
                            key={snap}
                            onClick={() => {
                                onDotButtonClick(index);
                            }}
                            selected={index === selectedIndex}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};
