import React from "react";

import {className, conditionalClass} from "@app/shared";

import styles from "./CarouselStoryWrapper.module.scss";

const CAROUSEL_STORY_VIEWPORT_ID = "carousel-story-wrapper";
export const CAROUSEL_STORY_VIEWPORT_SELECTOR = `#${CAROUSEL_STORY_VIEWPORT_ID}`;

export interface CarouselStoryWrapperProps {
    children: React.ReactNode;
    desktop?: boolean;
    tablet?: boolean;
    mobile?: boolean;
    lightMode?: any;
}

export const CarouselStoryWrapper = ({lightMode, desktop, tablet, mobile = true, children}: CarouselStoryWrapperProps) => {
    return (
        <section
            id={CAROUSEL_STORY_VIEWPORT_ID}
            className={className(
                styles.carouselStoryWrapper,
                conditionalClass(
                    [styles.desktop, !!desktop],
                    [styles.tablet, !!tablet],
                    [styles.mobile, !!mobile],
                    [styles.lightMode, !!lightMode],
                ),
            )}
        >
            {children}
        </section>
    );
};
