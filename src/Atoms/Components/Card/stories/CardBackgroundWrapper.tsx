import React from "react";

import styles from "./CardBackgroundWrapper.module.scss";

export interface CardBackgroundWrapperProps {
    children: React.ReactNode;
}

export const CardBackgroundWrapper = ({children}: CardBackgroundWrapperProps) => {
    return <section className={styles.cardBackgroundWrapper}>{children}</section>;
};
