import React from "react";

import styles from "./CollapseWrapper.module.scss";

export interface CollapseWrapperProps {
    children: React.ReactNode;
}

export const CollapseWrapper = ({children}: CollapseWrapperProps) => {
    return <section className={styles.collapseWrapper}>{children}</section>;
};
