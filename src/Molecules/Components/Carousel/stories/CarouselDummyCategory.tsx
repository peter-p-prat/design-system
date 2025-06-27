import React, {PropsWithChildren} from "react";

import styles from "./CarouselDummyCategory.module.scss";

export const CarouselDummyCategoryColumn = ({children}: PropsWithChildren) => {
    return <div className={styles.carouselDummyCategoryColumn}>{children}</div>;
};

export const CarouselDummyCategory = () => {
    return <div className={styles.carouselDummyCategory}>Category name</div>;
};
