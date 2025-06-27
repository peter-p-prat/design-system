import React from "react";

import styles from "./FooterWrapper.module.scss";

export interface FooterWrapperProps {
    children: React.ReactNode;
}

export const FooterWrapper = ({children}: FooterWrapperProps) => {
    return <section className={styles.footerWrapper}>{children}</section>;
};
