import {useCallback, useEffect, useState} from "react";
import {EmblaCarouselType} from "embla-carousel";

interface UseDotButton {
    selectedIndex: number;
    scrollSnaps: number[];
    shouldShowDots: boolean;
    onDotButtonClick: (index: number) => void;
}

export const useCarouselDots = (emblaApi: EmblaCarouselType | undefined): UseDotButton => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [shouldShowDots, setShouldShowDots] = useState<boolean>(false);

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi],
    );

    const onInit = useCallback((emblaApiParam: EmblaCarouselType) => {
        setScrollSnaps(emblaApiParam.scrollSnapList());
        setShouldShowDots(emblaApiParam.scrollSnapList().length > 1);
    }, []);

    const onSelect = useCallback((emblaApiParam: EmblaCarouselType) => {
        setSelectedIndex(emblaApiParam.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return {
        selectedIndex,
        scrollSnaps,
        shouldShowDots,
        onDotButtonClick,
    };
};
