import React from "react";

import {DividerOrientation} from "@app/Atoms";
import {className} from "@app/shared/helpers";

import styles from "./DividerWrapper.module.scss";

export interface DividerWrapperProps {
    orientation: DividerOrientation;
    children: React.ReactNode;
}

export const DividerWrapper = ({orientation, children}: DividerWrapperProps) => {
    return (
        <section className={styles.dividerWrapper}>
            <div className={className(styles.dividerWrapperBox, styles[orientation])}>{children}</div>
            <p>
                *Here the box surrounding the divider is used as a visual reference to see how gap behaves relative to the parent component
            </p>
        </section>
    );
};
