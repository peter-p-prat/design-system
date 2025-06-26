import React, {PropsWithChildren} from "react";

import styles from "./PaginationButtonStoryWrapper.module.scss";

export const PaginationButtonStoryWrapper = ({children}: PropsWithChildren) => {
    return <div className={styles.wrapper}>{children}</div>;
};
