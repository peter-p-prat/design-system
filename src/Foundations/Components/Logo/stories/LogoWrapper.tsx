import React, {ReactNode} from "react";

import {className, conditionalClass} from "@app/shared";

import styles from "./LogoWrapper.module.scss";

interface LogoWrapperProps {
    children: ReactNode;
    darkBackground?: boolean;
}

export const LogoWrapper = ({children, darkBackground}: LogoWrapperProps) => {
    return (
        <div className={className(styles.logoWrapper, conditionalClass([styles.darkBackground, !!darkBackground]))}>{children}</div>
    );
};
