import React from "react";

import {DividerV2Orientation} from "@app/Atoms";
import {className} from "@app/shared/helpers";

import styles from "./DividerV2Wrapper.module.scss";

export interface DividerWrapperProps {
    orientation: DividerV2Orientation;
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
