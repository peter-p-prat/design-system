import React from "react";

import {className, conditionalClass} from "@app/shared";

import styles from "./DropdownStories.module.scss";

export interface DropdownWrapperProps {
    children: React.ReactNode;
    withBackground?: boolean;
    light?: boolean;
}

export const DropdownWrapper = ({children, withBackground, light}: DropdownWrapperProps) => {
    return (
        <section
            className={className(
                styles.dropdownWrapper,
                conditionalClass([styles.withBackground, !!withBackground], [styles.light, !!light]),
            )}
        >
            {children}
        </section>
    );
};
