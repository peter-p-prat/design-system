import React from "react";

import {className, conditionalClass} from "@app/shared";

import styles from "./CheckboxStoriesWrapper.module.scss";

export interface CheckboxWrapperProps {
    children: React.ReactNode;
    withBackground?: boolean;
}

export const CheckboxStoriesWrapper = ({children, withBackground}: CheckboxWrapperProps) => {
    return (
        <section className={className(styles.checkboxStoriesWrapper, conditionalClass([styles.withBackground, !!withBackground]))}>
            {children}
        </section>
    );
};
