import React, {PropsWithChildren} from "react";

import styles from "./PopoverStoryWrapper.module.scss";

export const PopoverStoryWrapper: React.FC<PropsWithChildren> = ({children}) => {
    return <div className={styles.popoverStoryWrapper}>{children}</div>;
};
