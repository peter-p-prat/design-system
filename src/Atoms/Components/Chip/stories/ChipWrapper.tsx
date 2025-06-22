import React, {ReactNode} from "react";

import {className, conditionalClass} from "@app/shared";

import styles from "./ChipWrapper.module.scss";

interface ChipWrapperProps {
    children: ReactNode;
    dark?: boolean;
}

export const ChipWrapper = ({dark, children}: ChipWrapperProps) => {
    return <div className={className(styles.chipWrapper, conditionalClass([styles.dark, !!dark]))}>{children}</div>;
};
