import React from "react";

import {className, conditionalClass} from "@app/shared";

import styles from "./CarouselDummyBanner.module.scss";

export interface CarouselDummyBannerProps {
    desktop?: boolean;
    tablet?: boolean;
}

export const CarouselDummyBanner = ({desktop, tablet}: CarouselDummyBannerProps) => {
    return <div className={className(styles.carouselDummyBanner, conditionalClass([styles.desktop, !!desktop], [styles.tablet, !!tablet]))} />;
};
