import React from "react";

import {className, conditionalClass} from "@app/shared/helpers";

import styles from "./ButtonBackgroundWrapper.module.scss";

export interface ButtonBackgroundWrapperProps {
    isActive: boolean;
    overPrimary?: boolean;
    children: React.ReactNode;
}

export const ButtonBackgroundWrapper = ({isActive, overPrimary = false, children}: ButtonBackgroundWrapperProps) => {
    return (
        <section className={className(conditionalClass([styles.buttonBackgroundWrapper, isActive], [styles.overPrimary, !!overPrimary]))}>
            {children}
        </section>
    );
};
